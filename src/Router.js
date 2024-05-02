import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>hi</h1>} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
