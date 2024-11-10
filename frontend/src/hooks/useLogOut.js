import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

const useLogOut = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const insideLogOut = async () => {
    setLoading(true);
    try {
      const apiRes = await fetch("/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const res = await apiRes.json();
      if (res.error) throw new Error(res.error);

      localStorage.removeItem("currentUser");
      setAuthUser(null);

    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, insideLogOut };
};

export default useLogOut;
