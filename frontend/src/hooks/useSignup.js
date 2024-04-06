import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useSignup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useAuthContext();

  const signup = async ({ name, dob, email, password }) => {
    const success = handleInputErrors({
      name,
      dob,
      email,
      password,
    });

    if (!success) {
      return;
    }

    try {
      const response = await axios.post(`/api/v1/users/signup`, {
        name,
        dob,
        email,
        password,
      });

      const data = response.data;
      console.log(data);
      if (data.error) {
        throw new Error(data.error);
      }

      // localstorage
      localStorage.setItem("userInfo", JSON.stringify(data));
      // context
      setIsAuthenticated(data);
      navigate("/login");
    } catch (error) {
      console.log(error.response.data);
      toast.error(error.response.data.msg);
    }
  };

  return { signup };
};

function handleInputErrors({ name, dob, email, password }) {
  if (!name || !dob || !email || !password) {
    toast.error("Please fill in all fields");
    return false;
  }
  return true;
}

export default useSignup;
