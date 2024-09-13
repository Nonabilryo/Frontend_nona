import React from "react";
import * as S from "../../style/Chatting.style";
import userImg from "../../assets/img/user.svg";
import searchImg from "../../assets/img/searchGray.svg";
import mapImg from "../../assets/img/map.svg";
import SendImg from "../../assets/img/send.svg";
import dummyImg from "../../assets/img/dummyImg.svg";

const ChattingPage = () => {
  return (
    <>
      <S.all>
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
        <S.middle>
          <S.middleTop>
            <S.UserInfo>
              <S.userImg src={userImg} />
              <S.UserInfoText>
                <div style={{ fontSize: "16px", fontWeight: "600" }}>
                  문가인(가인님)
                </div>
                <div style={{ color: "#8F8F8F", fontSize: "13px" }}>
                  활동 중
                </div>
              </S.UserInfoText>
            </S.UserInfo>
            <S.UserWhere>
              <S.MapImg src={mapImg} />
              <div style={{ color: "#8F8F8F", fontSize: "13px" }}>
                대구 달성군 구지면
              </div>
            </S.UserWhere>
          </S.middleTop>
          <S.middleMiddle></S.middleMiddle>
          <S.middleBottom>
            <S.SendChatArea>
              <S.SendChat type="text" placeholder="메시지를 입력하세요." />
              <S.searchBtn>
                <S.SendImg src={SendImg} />
              </S.searchBtn>
            </S.SendChatArea>
          </S.middleBottom>
        </S.middle>
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
