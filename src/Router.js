import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../src/components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import LoginSuccess from "./components/LoginSuccess/LoginSuccess";
import Main from "./components/Main/Main";
import ArticleInfo from "./components/ArticleInfo/ArticleInfo";
import { useState, useEffect } from "react";
import isAuth from "./util/isAuth";
import Nav from "./components/Nav/Nav";
import PostArticle from "./components/PostArticle/PostArticle";

function Router() {
  const [isLogin, setIsLogin] = useState(null);

  useEffect(() => {
    isAuth().then(result => {
      setIsLogin(result);
    });
  }, []);

  if(isLogin === null) {
    return(
      <>로딩중</>
    )
  }

  return (
    <BrowserRouter>
      <Nav isLogin={isLogin}/>
      <Routes>
        <Route exact path="/" element={<Main/>} />
        <Route exact path="/article/post" element={<PostArticle />} />
        <Route path="/article/:id" element={<ArticleInfo />}  />
        <Route path="/login/success" element={<LoginSuccess />} />
        <Route exact path="/login" element={isLogin ? <Navigate to="/" /> : <Login setIsLogin={setIsLogin}/>} />
        <Route exact path="/signup" element={isLogin ? <Navigate to="/" /> : <SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
