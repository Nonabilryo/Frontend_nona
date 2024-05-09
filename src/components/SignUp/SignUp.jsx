import React, { useCallback, useEffect, useState } from "react";
import * as S from "../../style/SignUp.style";
import cart from "../../assets/img/nonabilryo_cart.png";
import axios from "axios";
import CONFIG from "../../config/config.json";



function SignUp() {

  const [signUpData, setSignUpData] = useState({
    name: "",
    id: "",
    password: "",
    email: "",
    tell: "",
    adress: "",
    emailVerifyCode: "",
    tellVerifyCode: "",
  });

  const handleSignupChange = useCallback(
    (e) => {
      const { value, name } = e.target;
      setSignUpData((prev) => ({ ...prev, [name]: value }));
    },
    [setSignUpData]
  );

  const ServerConnect = async () => {
    const SignUpData = {
      name: signUpData.name,
      id: signUpData.id,
      password: signUpData.password,
      email: signUpData.email,
      tell: signUpData.tell,
      adress: signUpData.adress,
      emailVerifyCode: signUpData.emailVerifyCode,
      tellVerifyCode: signUpData.tellVerifyCode,
    };

    try {
      const { data } = await axios.post(
        `${CONFIG.SERVER}/sso/sign-up`,
        SignUpData
      );

      console.log("성공");
    } catch (e) {
      console.log("실패");
    }
  };

  useEffect(() => {
    ServerConnect();
  }, []);

  return (
    <>
      <S.back />
      <S.cart img src={cart} alt="cart" />

      <S.title1>환영합니다,</S.title1>
      <S.title2>노나빌려</S.title2>
      <S.title3>입니다!</S.title3>
      <S.nickcheck>중복 확인</S.nickcheck>

      <S.nickbox placeholder="닉네임" />
      <S.idbox placeholder="아이디를 입력해주세요" />
      <S.emailbox placeholder="이메일을 입력해주세요" />
      <S.emailcheck>인증하기</S.emailcheck>
      <S.emailicertinum placeholder="인증 번호" />
      <S.emailpass>확인</S.emailpass>
      <S.passwordbox placeholder="비밀번호를 입력해주세요" />
      <S.passcheck placeholder="비밀번호를 다시 입력해주세요" />
      <S.phonenumbox placeholder="전화번호를 입력해주세요" />

      <S.nickbox
        placeholder="닉네임"
        type="id"
        id="id"
        name="id"
        onChange={handleSignupChange} />

      <S.emailbox
        placeholder="이메일을 입력해주세요"
        type="email"
        id="email"
        name="email"
        onChange={handleSignupChange} />
      <S.emailcheck>중복 확인</S.emailcheck>
      <S.passwordbox
        placeholder="비밀번호를 입력해주세요"
        type="password"
        id="password"
        name="password"
        onChange={handleSignupChange}/>
      <S.phonenumbox
      placeholder="전화번호를 입력해주세요"
      type="tell"
        id="tell"
        name="tell"
        onChange={handleSignupChange}/>

      <S.numcertifi>인증하기</S.numcertifi>
      <S.phonenumbox placeholder="전화번호를 입력해주세요" />
      <S.phonecertinum placeholder="인증 번호" />
      <S.phonepass>확인</S.phonepass>



      <S.signup>회원가입</S.signup>
    </>
  );
}
export default SignUp;