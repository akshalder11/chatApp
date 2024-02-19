import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js"
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullname, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    //HashPass
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, salt);
    //Image
    const profilePicBoy = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const profilePicGirl = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = await User({
      fullname,
      username,
      password: hashPass,
      gender,
      profilePic: gender === "male" ? profilePicBoy : profilePicGirl,
    });

    if (newUser) {

      //JWT
      generateToken(newUser._id, res);

      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullname: newUser.fullname,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }


  } catch {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = (req, res) => {
  console.log("loginUser");
};

export const logout = (req, res) => {
  console.log("logoutUser");
};
