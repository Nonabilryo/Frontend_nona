import React from "react";
import * as S from "../../style/Chatting.style";
import userImg from "../../assets/img/user.svg";
import searchImg from "../../assets/img/searchGray.svg";

const ChattingPage = () => {
  return (
    <>
      <S.all>
        <S.frontNlast>
          <S.frontTop>
            <S.searchArea>
              <S.search 
              type="text"
              placeholder="검색"></S.search>
              <S.searchImg src={searchImg} />
            </S.searchArea>
          </S.frontTop>
        </S.frontNlast>
        <S.middle>
          <S.middleArea>
            <div>
              <S.userImg src={userImg} />
              <div>
                <div>가인님</div>
                <div>활동 중</div>
              </div>
            </div>
          </S.middleArea>
        </S.middle>
        <S.frontNlast></S.frontNlast>
      </S.all>
    </>
  );
};

export default ChattingPage;
