import React from "react"
import * as D from "../../style/Detail.style"
import PImg from "../../assets/img/ring.svg"
import userImg from "../../assets/img/user.svg"
import mapImg from "../../assets/img/map.svg"

const DetailPage = () => {
  return (
    <D.All>
      <D.Back>
        <D.PImg src={PImg} alt="error" />
        <D.ImgUnder>
          <D.User>
            <img src={userImg} alt="error" style={{ width: "3.5vw" }} />
            <div
              style={{
                fontSize: "22px",
                fontFamily: "pretendard",
                fontWeight: "500",
              }}
            >
              user
            </div>
          </D.User>
          <D.Map>
            <img src={mapImg} alt="error" style={{ width: "2vw" }} />
            <div
              style={{
                fontSize: "13px",
                color: "#8F8F8F",
                fontFamily: "pretendard",
              }}
            >
              대구 달성군 구지면
            </div>
          </D.Map>
        </D.ImgUnder>
        <D.Line />
        <D.Content>
          <D.DetailContent>
            <div style={{ fontSize: "20px", fontWeight: "600" }}>
              y2k 스타일 빈티지 목걸이 대여해드립니당
            </div>
            <div
              style={{ fontSize: "14px", fontWeight: "600", color: "#8F8F8F" }}
            >
              21시간 전
            </div>
            <div style={{ fontSize: "28px", fontWeight: "bold"}}>3000원</div>
          </D.DetailContent>
          <div style={{ fontSize: "19px" }}>
            원가 17만원인데 요새 잘 안써서 그냥 싼값에 대여해드려요~^^
          </div>
        </D.Content>
        <D.ButtonArea>
          <D.GoChat>채팅하기</D.GoChat>
        </D.ButtonArea>
      </D.Back>
    </D.All>
  )
}

export default DetailPage
