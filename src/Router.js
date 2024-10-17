import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import LoginSuccess from "./pages/LoginSuccess/LoginSuccess";
import Main from "./pages/Main/Main";
import ArticleInfo from "./pages/ArticleInfo/ArticleInfo";
import { useState, useEffect } from "react";
import isAuth from "./util/isAuth";
import Nav from "./pages/Nav/Nav";
import PostArticle from "./pages/PostArticle/PostArticle";
import DetailPage from "./pages/Detail/DetailPage";
import MyPage from "./pages/MyPage/MyPage";
import ChattingPage from "./pages/Chat/ChattingPage";

function Router() {
  const [isLogin, setIsLogin] = useState(null);

  useEffect(() => {
    isAuth().then((result) => {
      setIsLogin(result);
    });
  }, []);

  if (isLogin === null) {
    return <>로딩중</>;
  }

  return (
    <BrowserRouter>
      <Nav isLogin={isLogin} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route exact path="/article/post" element={<PostArticle />} />
        <Route exact path="/detail" element={<DetailPage />} />
        <Route exact path="/mypage" element={<MyPage />} />
        <Route path="/article/:id" element={<ArticleInfo />} />
        <Route path="/login/success" element={<LoginSuccess />} />
        <Route exact path="/chat" element={<ChattingPage />} />
        <Route
          exact
          path="/login"
          element={
            isLogin ? <Navigate to="/" /> : <Login setIsLogin={setIsLogin} />
          }
        />
        <Route
          exact
          path="/signup"
          element={isLogin ? <Navigate to="/" /> : <SignUp />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
