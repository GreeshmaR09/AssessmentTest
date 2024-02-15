const express=require('express')
const bcrypt=require('bcrypt')
const route=express.Router()
const User=require('../Model/Users')
const jwt=require('jsonwebtoken')

//UserRegister
route.post('/register',async (req,res)=>{

    try {
        const {username,email,password}=req.body
        const hashedpassword=await bcrypt.hash(password,10)
        const user= new User({
          username,
          email,
          password:hashedpassword
        })
        await user.save()
        res.status(200).json({message:"Success"})

        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Failed"})
        
    }
 
})


//userLogin
route.post('/login', async (req, res) => {
    try {
        // Extracting email and password from the request body
        const { email, password } = req.body;

        
        const user = await User.findOne({ email });

        // Validating the manager's credentials
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Creating a JWT token for authentication
        const token = jwt.sign({ userId: user._id }, "secretKey", { expiresIn: '1h' });

        // Responding with the generated token
        res.status(200).json({ token });
    } catch (error) {
        // Handling errors and responding with an error message
        console.error(error);
        res.status(500).json({ error: 'Login failed' });
    }
});

module.exports=route