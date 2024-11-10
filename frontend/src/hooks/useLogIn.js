import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

const useLogIn = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const insideLogIn = async ({ logIn }) => {
    console.log("Test", logIn)
    const reqBody = {
      username: logIn.email,
      password: logIn.password,
    };

    setLoading(true);
    try {
      const apiRes = await fetch("/api/auth/login", {
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

  return { loading, insideLogIn };
};

export default useLogIn;
