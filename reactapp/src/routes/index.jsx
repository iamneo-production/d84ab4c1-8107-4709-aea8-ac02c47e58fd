import { Routes, Route } from "react-router-dom";
import { HomePage } from "../components/Home";
import LoginPage from "../components/Login/LoginPage";
import SignupPage from "../components/Signup/SignupPage";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
      <Route path="*" element={<HomePage />}></Route>
    </Routes>
  );
};

export default PageRoutes;
