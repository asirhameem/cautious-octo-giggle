import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/request.helper";
import { useEffect } from "react";
import { Navbar } from "../../components/navbar";

export default function UserProfile() {
  const navigate = useNavigate();

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${token}`;
        const respone = await axiosInstance.get("/users/profile");
        if (!respone?.data?.success) {
          navigate("/login");
        }
      }
    } catch (err) {
      alert(err);
      navigate("/login");
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <>
      <Navbar />
    </>
  );
}
