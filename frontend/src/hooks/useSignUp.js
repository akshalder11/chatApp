import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const insideSignUp = async ({ signUp }) => {
    const reqBody = {
      fullname: "Dummy Name",
      username: signUp.email,
      password: signUp.password,
      confirmPassword: signUp.password,
      gender: "female",
    };
    setLoading(true);
    try {
      const apiRes = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reqBody),
      });

      const res = await apiRes.json();
      if (res.error) throw new Error(res.error);

      localStorage.setItem("currentUser", JSON.stringify(res));
      setAuthUser(res);
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, insideSignUp };
};

export default useSignUp;
