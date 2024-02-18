import User from "../models/user.model.js"

export const signup = async (req, res) => {
  try {
    const { fullname, username, password, confirmPassword, gender } = req.body;

    if(password !== confirmPassword){
      return res.status(400).json({error: "Passwords don't match"})
    }

    const user = await User.findOne({username});

    if(user) {
      return res.status(400).json({error: "User already exists"})
    }


  } catch {
    console.log("signUser");
  }
};

export const login = (req, res) => {
  console.log("loginUser");
};

export const logout = (req, res) => {
  console.log("logoutUser");
};
