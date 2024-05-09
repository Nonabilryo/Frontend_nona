import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Main from "../src/components/Main/Main"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>hi</h1>} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
