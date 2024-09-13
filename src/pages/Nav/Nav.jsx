import React from "react";
import * as S from "../../style/Nav.style";
import LogoImg from "../../assets/img/logo.svg";
import ProfileImg from "../../assets/img/profile.svg";
import ChatImg from "../../assets/img/chat.svg";
import LogoutImg from "../../assets/img/logout.svg";
import SearchImg from "../../assets/img/search.svg";
import { useNavigate } from "react-router";
import MyPage from "../MyPage/MyPage";
import ChattingPage from "../Chat/ChattingPage";

const Nav = ({ isLogin }) => {
  const navigate = useNavigate();
  console.log(isLogin);
  const LoginHandler = () => {
    navigate("/login");
  };
  const SignUpHandler = () => {
    navigate("/signup");
  };
  const PostArticleHandler = () => {
    navigate("/article/post");
  };
  const MainHandler = () => {
    navigate("/main");
  };
  const LogoutHandler = () => {
    localStorage.setItem("accessToken", null);
    localStorage.setItem("refreshToken", null);
    navigate("/main");
  };

  const InfoHandler = () => {
    navigate("/mypage");
  };
  return (
    <>
      <S.Base>
      <S.Ground>
        <S.LogoImg src={LogoImg} alt="error" onClick={useNavigate(<MyPage />)} />
        <S.SearchBack>
        <S.Search
            type="text"
            placeholder="찾으시는 상품을 입력하세요."  />
            <S.SearchButton>
                <img src={SearchImg} alt="error" style={{width:"2.2vw"}} />
            </S.SearchButton>
        </S.SearchBack>
        <S.Icons>
          <S.ProfileImg src={ProfileImg} alt="error" onClick={useNavigate(<MyPage />)} />
          <S.ChatImg src={ChatImg} alt="error" onClick={useNavigate(<ChattingPage />)} />
          <S.LogoutImg src={LogoutImg} alt="error" />
        </S.Icons>
      </S.Ground>
    </S.Base>
    </>
  );
};
export default Nav;