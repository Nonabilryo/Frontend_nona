import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as M from "../../style/Main.style"; // 스타일 컴포넌트 임포트
import CONFIG from "../../config/config.json"; // config 파일 임포트
import logo from "../../assets/img/logo.png"; // 로고 이미지
import isLogin from "../../util/isAuth"; // 인증 유틸리티
import mypage from "../../assets/img/mypage.png"; // 마이페이지 이미지
import chat from "../../assets/img/chat.png"; // 채팅 이미지
import community from "../../assets/img/community.png"; // 커뮤니티 이미지
import line from "../../assets/img/line.png"; // 선 이미지
import search_icon from "../../assets/img/search_icon.png"; // 검색 아이콘
import delete_search from "../../assets/img/x.png"; // 삭제 아이콘

const Main = ({ isLogin }) => {
  const navigate = useNavigate();
  const [articlesData, setArticlesData] = useState({
    articles: [],
    totalPage: 0,
  });
  const [currentPage, setCurrentPage] = useState(0);

  const ServerConnect = async (page) => {
    try {
      const response = await axios.get(`/article/page/${page}`, {
        withCredentials: true,
      });

      // 서버 응답 데이터 확인
      console.log(response.data);

      setArticlesData((prevData) => ({
        articles: [...prevData.articles, ...response.data.data.content],
        totalPage: response.data.data.totalPages,
      }));
    } catch (error) {
      console.error("Failed to fetch articles:", error);
    }
  };

  useEffect(() => {
    ServerConnect(currentPage);
  }, [currentPage]); // currentPage가 변경될 때마다 서버 호출

  const LoadMoreArticles = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
  };

  const ChunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const ArticleClickHandler = (event) => {
    navigate(`/article/${event.currentTarget.id}`);
  };

  const renderRentalType = (rentalType) => {
    switch (rentalType) {
      case "YEAR":
        return "년";
      case "MONTH":
        return "개월";
      case "DAY":
        return "일";
      case "HOUR":
        return "시간";
      default:
        return rentalType;
    }
  };

  const timeAgo = (date) => {
    const now = new Date();
    const createdAt = new Date(date);
    const diffInSeconds = Math.floor((now - createdAt) / 1000);

    const minutes = Math.floor(diffInSeconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    switch (true) {
      case years > 0:
        return `${years}년 전`;
      case months > 0:
        return `${months}개월 전`;
      case days > 0:
        return `${days}일 전`;
      case hours > 0:
        return `${hours}시간 전`;
      case minutes > 0:
        return `${minutes}분 전`;
      default:
        return `방금 전`;
    }
  };

  const textLengthOverCut = (txt, len, lastTxt) => {
    if (len == "" || len == null) {
      // 기본값
      len = 20;
    }
    if (lastTxt == "" || lastTxt == null) {
      // 기본값
      lastTxt = "...";
    }
    if (txt.length > len) {
      txt = txt.substr(0, len) + lastTxt;
    }
    return txt; // 'return txt;'로 수정
  };

  return (
    <>
      <M.box />
      <M.articleContainer>
        <M.divide />
        <M.tiText>상품 추천</M.tiText>
        {ChunkArray(articlesData.articles, 5).map((chunk, chunkIndex) => (
          <M.line key={chunkIndex}>
            {chunk.map((article, index) => (
              <M.article
                key={index}
                id={article.idx}
                name="article"
                onClick={ArticleClickHandler}>
                <M.showBox />
                <M.image src={article.image.url} alt="Image" />
                <M.title>
                  {textLengthOverCut(article.title, 38, "…")}
                </M.title>{" "}
                {/* 글자 제한 적용 */}
                <M.price>{article.price}원</M.price>
                <M.unitt>{renderRentalType(article.rentalType)}</M.unitt>
                <M.dateBefore>{timeAgo(article.createdAt)}</M.dateBefore>
              </M.article>
            ))}
          </M.line>
        ))}
      </M.articleContainer>
      {currentPage < articlesData.totalPage - 1 && (
        <M.button onClick={LoadMoreArticles}>Load More</M.button>
      )}
    </>
  );
};

export default Main;
