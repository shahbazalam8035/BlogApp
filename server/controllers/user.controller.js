const userModel = require("../models/userModel")
const bcrypt = require("bcrypt");

// create user register 
exports.registerController=async(req,res)=>{
    try {
        const {username,email,password}=req.body;
        if(!username || !email || !password){
            return res.status(400).send({
                success:false,
                message:"please fill all fields"
            })
        }
        const existingUser = await userModel.findOne({email})
        if(existingUser){
            return res.send(401).send({
                success:false,
                message:"email allready exists"
            })
        }
        const hashedPasword= await bcrypt.hash(password,10)

        const user = new userModel({username,email,password:hashedPasword})
        await user.save();
        return res.status(201).send({
            success:true,
            message:"user created",
            user
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message:"error in register callback",
            success:false,
            error
        })
    }
}

exports.getAllUsers=async(req,res)=>{
    try {
        const allUsers = await userModel.find({});
        return res.status(200).send({
            success:true,
            message:" all users data",
            allUsers
        })
    } catch (error) {
        return res.status(500).send({
            success:false,
            message:"Error in get all users",
            error
        })
    }
}

exports.loginController=async(req,res)=>{
    try {
        const{email,password}=req.body;
        if(!email || !password){
            return res.status(401).send({
                success:false,
                message:"plese provide email or password"
            })
        }
        const user = await userModel.findOne({email})
         if(!user){
            return res.status(200).send({
                success:false,
                message:"email not registered"
            })
         }
         const isMatch = await bcrypt.compare(password,user.password)   
        if(!isMatch){
            res.status(401).send({
                success:false,
                message:"invalid email and password"
            })
        }
        return res.status(200).send({
            success:true,
            message:"login successfully",
            user
        })
        
    } catch (error) {
        return res.status(500).send({
            success:false,
            message:" Error in login",
            error
        })
    }
}