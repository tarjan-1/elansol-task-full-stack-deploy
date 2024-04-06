import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated } = useAuthContext();

  const login = async (email, password) => {
    const success = handleInputErrors(email, password);

    if (!success) {
      return;
    }

    try {
      const result = await axios.post(`/api/v1/users/login`, {
        email,
        password,
      });

      const response = result.data;

      if (response.error) {
        console.log(response.data);
        // throw new Error(response.error);
      }

      localStorage.setItem("userInfo", JSON.stringify(response));
      setIsAuthenticated("response");

      navigate("/dashboard"); // Redirect to dashboard after successful login
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  return { login };
};

function handleInputErrors(email, password) {
  if (!email || !password) {
    toast.error("Please fill in all fields");
    return false;
  }

  return true;
}

export default useLogin;
