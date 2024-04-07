import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/components/Login/Login";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>hi</h1>} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
