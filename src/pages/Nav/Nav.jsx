import myInFo from "../../assets/img/myInfo.png";
import comunity from "../../assets/img/comunity.png";
import chat from "../../assets/img/chat.png";
import logo from "../../assets/img/logo.png";
import * as N from "../../style/Nav.style";
import { useNavigate } from "react-router";

const Nav = ({ isLogin }) => {
  const navigate = useNavigate();
  console.log(isLogin);
  const LoginHandler = () => {
    navigate("/login");
  };
  const SignUpHandler = () => {
    navigate("/signup");
  };

  const MainHandler = () => {
    navigate("/");
    window.location.reload();
  };
  const ChatHandler = () => {
    navigate("/chat");
  };
  const LogoutHandler = () => {
    localStorage.setItem("accessToken", null);
    localStorage.setItem("refreshToken", null);
    alert("로그아웃 되었습니다.");
    window.location.reload();
  };

  const InfoHandler = () => {
    navigate("/mypage");
  };
  return (
    <>
      <N.navContainer>
        <N.navImage src={logo} onClick={MainHandler}></N.navImage>
        <N.search
          type="text"
          placeholder="찾으시는 상품을 검색하세요"></N.search>
        {isLogin ? (
          <N.iconBox>
            <N.info src={myInFo} onClick={InfoHandler}></N.info>
            <N.chat src={chat} onClick={ChatHandler}></N.chat>
            <N.comm src={comunity}></N.comm>

            <N.logout onClick={LogoutHandler}>로그아웃</N.logout>
          </N.iconBox>
        ) : (
          <>
            <N.login onClick={LoginHandler}>로그인</N.login>
            <N.signup onClick={SignUpHandler}>회원가입</N.signup>
          </>
        )}
      </N.navContainer>
      {isLogin ? <></> : <></>}
    </>
  );
};
export default Nav;
