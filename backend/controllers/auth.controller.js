import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";
import bcrypt from "bcryptjs";

//SIGNUP
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

//LOGIN
export const login = async (req, res) => {

  try {
    const { username, password } = req.body;
    const user = await User.findOne({username})
    const passCheck = await bcrypt.compare(password, user?.password || "");

    if (!user || !passCheck) {
      return res.status(400).json({error: "Invalid username or password"});
    }

    generateToken(user._id, res);
    res.status(201).json({
      _id: user._id,
      fullname: user.fullname,
      username: user.username,
      profilePic: user.profilePic,
    });

  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//LOGOUT
export const logout = (req, res) => {

  try {
    res.cookie("jwt", "", {maxAge: 0})
    res.status(200).json({message: "Logged out successfully."})

  } catch (error){
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
