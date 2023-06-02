import OverallStat from "../models/OverallStat.js";

export const getSales=async (req,res)=> {
    try {
        const OverallStats=await OverallStat.find();

        return res.status(200).json(OverallStats[0]);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}