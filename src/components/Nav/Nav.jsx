import myInFo from "../../assets/img/myInfo.png"
import comunity from "../../assets/img/comunity.png"
import chat from "../../assets/img/chat.png"
import logo from "../../assets/img/logo.png"
import * as N from "../../style/Nav.style";
import { useNavigate } from "react-router";

const Nav = ({isLogin}) => {
    const navigate = useNavigate();
    console.log(isLogin)
    const LoginHandler = () => {
        navigate("/login")
    }
    const SignUpHandler = () => {
        navigate("/signup")
    }
    const PostArticleHandler = () => {
        navigate("/article/post")
    }
    return (
        <>
            <N.navContainer>
                <N.navImage src={logo}></N.navImage>
                <input type="text" placeholder="검색해라"></input>
                {isLogin ? (
                    <>
                        <N.navImage src={logo}></N.navImage>
                        <N.navImage src={logo}></N.navImage>
                        <N.navImage src={logo}></N.navImage>
                        <N.p onClick={PostArticleHandler}>글쓰기</N.p>
                    </>
                    ) : (
                    <>
                        <N.p onClick={LoginHandler}>로그인해라</N.p>
                        <N.p onClick={SignUpHandler}>회원가입해라</N.p>
                    </>
                )}
            </N.navContainer>
        </>
    )
}
export default Nav;