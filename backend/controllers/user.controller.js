import User from "../models/user.model.js";

export const getUserSidebar = async (req, res) => {
    try {
        console.log("Inside getUserSidebar");
        const currentUser = req.user._id;
        const filterUserArr = await User.find({ _id: {$ne: currentUser}}).select("-password");
        res.status(200).json(filterUserArr);
        
    } catch (error) {
        console.log("Error in getUserSidebar controller: ", error.message)
        res.status(500).json({error: "Internal server error"})
    }
}