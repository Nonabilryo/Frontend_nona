import React, { useEffect, useState } from "react";
import * as S from "../../style/Chatting.style";
import ChattingRoom from "../../constants/ChattingRoom.jsx";
import searchImg from "../../assets/img/searchGray.svg";
import dummyImg from "../../assets/img/dummyImg.svg";

const ChattingPage = () => {
  const token = localStorage.getItem("accessToken");

  return (
    <>
      <S.all>
        <S.mainLine />
        <S.frontNlast style={{ overflow: "scroll" }}>
          <S.frontTop>
            <S.searchArea>
              <S.search type="text" placeholder="검색"></S.search>
              <S.searchBtn>
                <S.searchImg src={searchImg} />
              </S.searchBtn>
            </S.searchArea>
          </S.frontTop>
        </S.frontNlast>
        <ChattingRoom />
        <S.frontNlast>
          <S.productArea>
            <S.DummyImg src={dummyImg} />
            <div>
              <S.prodTitle>y2k 스타일 빈티지 목걸이 대여해드립니당</S.prodTitle>
              <S.prodPrice>3000원</S.prodPrice>
              <S.prodContents>
                원가 17만원인데 요새 잘 안써서 그냥 싼값에 대여해드릴게요~^^
              </S.prodContents>
            </div>
            <S.prodBtn>대여하기</S.prodBtn>
          </S.productArea>
        </S.frontNlast>
      </S.all>
    </>
  );
};

export default ChattingPage;
