import React from "react";
import * as S from "../../style/Chatting.style";
import userImg from "../../assets/img/user.svg";
import searchImg from "../../assets/img/searchGray.svg";
import mapImg from "../../assets/img/map.svg";

const ChattingPage = () => {
  return (
    <>
      <S.all>
        <S.frontNlast>
          <S.frontTop>
            <S.searchArea>
              <S.search type="text" placeholder="검색"></S.search>
              <S.searchImg src={searchImg} />
            </S.searchArea>
          </S.frontTop>
        </S.frontNlast>
        <S.middle>
          <S.middleTop>
            <S.UserInfo>
              <S.userImg src={userImg} />
              <div>
                <div>가인님</div>
                <div>활동 중</div>
              </div>
            </S.UserInfo>
            <S.UserWhere>
              <img src={mapImg} />
              <div>대구 달성군 구지면</div>
            </S.UserWhere>
          </S.middleTop>
        </S.middle>
        <S.frontNlast></S.frontNlast>
      </S.all>
    </>
  );
};

export default ChattingPage;
