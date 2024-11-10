import React, { useState } from "react";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);

  const insideSignUp = async ({ signUp }) => {
    console.log("Test", signUp);
    const reqBody = {
      fullname: "Dummy Name",
      username: signUp.email,
      password: signUp.password,
      confirmPassword: signUp.password,
      gender: "female",
    };
    console.log("ReqBody", reqBody);
    setLoading(true);
    try {
      const apiRes = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reqBody),
      });

      const res = await apiRes.json();
      if (res.error) throw new Error(res.error);

      console.log("Res", res);
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, insideSignUp };
};

export default useSignUp;
