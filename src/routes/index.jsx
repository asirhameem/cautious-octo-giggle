import { Routes, Route } from "react-router-dom";
import Home from "../pages";
import Login from "../pages/auth/login.page";
import SignUp from "../pages/auth/signup.page";
import UserProfile from "../pages/user/user.page";

const AppRoutes = (props) => {
  return (
    <Routes>
      <Route path="/profile" exact {...props} element={<UserProfile />} />
      <Route path="/login" exact {...props} element={<Login />} />
      <Route path="/sign-up" exact {...props} element={<SignUp />} />
      <Route path="/" exact {...props} element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
