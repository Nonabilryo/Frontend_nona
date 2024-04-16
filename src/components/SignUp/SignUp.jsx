import React from "react";
import * as S from "../../style/SignUp.style";
import cart from "../../img/nonabilryo_cart.png";

function SignUp() {
  return (
    <>
      <S.back/>
      <S.cart img src={cart} alt="cart" />
      <S.title1>환영합니다,</S.title1>
      <S.title2>노나빌려</S.title2>
      <S.title3>입니다!</S.title3>

      <S.nickcheck>중복 확인</S.nickcheck>
      <S.nickbox placeholder="닉네임" />
      <S.idbox placeholder="아이디를 입력해주세요"/>
      <S.emailbox placeholder="이메일을 입력해주세요"/>
      <S.emailcheck>인증하기</S.emailcheck>
      <S.emailicertinum placeholder="인증 번호"/>
      <S.emailpass>확인</S.emailpass>

      <S.passwordbox placeholder="비밀번호를 입력해주세요"/>
      <S.passcheck placeholder="비밀번호를 다시 입력해주세요"/>
      <S.phonenumbox placeholder="전화번호를 입력해주세요"/>
      <S.numcertifi>인증하기</S.numcertifi>
      <S.phonenumbox placeholder="전화번호를 입력해주세요"/>
      <S.signup>회원가입</S.signup>



    </>
  );
}

export default SignUp;
