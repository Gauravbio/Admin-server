import User from '../models/User.js';

export const getAdmins=async (req,res)=> {
    try {
        const admins=await User.find({role: "admin"}).select("-password");
        return res.status(200).json(admins);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}