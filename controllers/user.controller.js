import User from "../models/user.model.js"
import jwt from "jsonwebtoken";
export const deleteUser =async(req,res)=>{
    const user = await User.findById(req.params.id);
    const token = req.cookies.accessToken;
    if(!token) return res.status(401).send("you are not authenticated");

 jwt.verify(token,process.env.JWT_KEY,(err,payload)=>{
    if(payload.id !== user._id){

    }
 });

    // await User.findByIdAndDelete(req.params.id);
}