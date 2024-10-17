import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import * as A from "../../style/ArticleInfo";
import CONFIG from "../../config/config.json";
import userprofile from "../../assets/img/userprofile.png"; // 기본 프로필 이미지
import left from "../../assets/img/left.svg";
import right from "../../assets/img/right.svg";

const ArticleInfo = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [articleData, setArticleData] = useState({
    title: "",
    images: [],
    writer: "",
    category: "",
    description: "",
    price: "",
    rentalType: "",
    createdAt: "",
  });

  const [writerData, setWriterData] = useState({
    idx: "",
    name: "",
    imageUrl: "",
    description: "",
    signed: "",
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const fetchArticleData = async () => {
    try {
      const response = await axios.get(
        `${CONFIG.SERVER}/article/${location.pathname.split("/")[2]}`,
        { withCredentials: true }
      );

      setArticleData({
        title: response.data.data.title,
        images: response.data.data.images,
        writer: response.data.data.writer,
        category: response.data.data.category,
        description: response.data.data.description,
        price: response.data.data.price,
        rentalType: response.data.data.rentalType,
        createdAt: response.data.data.createdAt,
      });

      const writerDataResponse = await axios.get(
        `${CONFIG.SERVER}/user/${response.data.data.writer}`,
        { withCredentials: true }
      );
      setWriterData(writerDataResponse.data.data);
    } catch (error) {
      if (error.response && error.response.status === 302) {
        window.location.href = error.response.headers.location;
      } else {
        console.error("데이터를 불러오는 도중 오류 발생:", error);
      }
    }
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

  useEffect(() => {
    fetchArticleData();
  }, [location]);

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? articleData.images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === articleData.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <A.Container>
        <A.divide />
        <A.Title>{articleData.title}</A.Title>
        <A.ImageContainer>
          <A.LeftButton img src={left} onClick={handlePrevious} alt="이전 이미지" />
          {articleData.images.length > 0 && (
            <A.Image
              src={articleData.images[currentImageIndex].url}
              alt="상품 이미지"
            />
          )}
          <A.RightButton img src={right} onClick={handleNext} alt="다음 이미지" />
        </A.ImageContainer>

        <A.InfoContainer>
          {/* 카테고리 */}
          <A.InfoCate>카테고리 - {articleData.category}</A.InfoCate>
          {/* 설명 */}
          <A.InfoText>{articleData.description}</A.InfoText>
          {/* 가격 */}
          <A.Price>{articleData.price}원</A.Price>
          {/* 날짜 단위 */}
          <A.InfoType>{renderRentalType(articleData.rentalType)}</A.InfoType>
          {/* 몇 시간 전 */}
          <A.InfoDate>{timeAgo(articleData.createdAt)}</A.InfoDate>
        </A.InfoContainer>
        <A.divide2 />
        <A.ProfileImage
          src={writerData.imageUrl || userprofile}
          alt="작성자 프로필"
        />
        <A.ProfileText>{articleData.writer}</A.ProfileText>

        <A.chatButton>채팅하기</A.chatButton>
      </A.Container>
      <A.bottom />
    </>
  );
};

export default ArticleInfo;
