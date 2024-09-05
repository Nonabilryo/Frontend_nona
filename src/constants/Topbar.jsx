import React from "react";
import * as S from "../../style/Topbar.style";
import LogoImg from "../../assets/img/logo.svg";
import ProfileImg from "../../assets/img/profile.svg";
import ChatImg from "../../assets/img/chat.svg";
import CommunityImg from "../../assets/img/community.svg";
import SearchImg from "../../assets/img/search.svg";

const Topbar = () => {
  return (
    <S.Base>
      <S.Ground>
        <S.LogoImg src={LogoImg} alt="error" />
        <S.SearchBack>
        <S.Search
            type="text"
            placeholder="찾으시는 상품을 입력하세요."  />
            <S.SearchButton>
                <img src={SearchImg} alt="error" style={{width:"2.2vw"}} />
            </S.SearchButton>
        </S.SearchBack>
        <S.Icons>
          <S.ProfileImg src={ProfileImg} alt="error" />
          <S.ChatImg src={ChatImg} alt="error" />
          <S.CommunityImg src={CommunityImg} alt="error" />
        </S.Icons>
      </S.Ground>
    </S.Base>
  );
};

export default Topbar;
