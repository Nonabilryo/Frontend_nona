import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import "../../style/ArticleInfo";
import * as A from "../../style/ArticleInfo";

import CONFIG from "../../config/config.json"; // 서버 URL을 가져오는 설정 파일
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import userprofile from "../../assets/img/userprofile.png"; // 기본 프로필 이미지

const ArticleInfo = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 글 데이터와 작성자 데이터를 위한 상태 관리
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

  // 글 데이터를 가져오는 함수
  const fetchArticleData = async () => {
    try {
      const response = await axios.get(
        `${CONFIG.SERVER}/article/${location.pathname.split("/")[2]}`,
        { withCredentials: true } // 쿠키 인증이 필요하다면 추가
      );

      // API로부터 받은 데이터로 상태 업데이트
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

      // 작성자 데이터를 추가로 가져오는 요청
      const writerDataResponse = await axios.get(
        `${CONFIG.SERVER}/user/${response.data.data.writer}`,
        { withCredentials: true }
      );

      setWriterData(writerDataResponse.data.data);
    } catch (error) {
      // 302 리다이렉트 에러를 처리
      if (error.response && error.response.status === 302) {
        console.error("리다이렉트 발생:", error.response.headers.location);
        window.location.href = error.response.headers.location; // 리다이렉트 처리
      } else {
        console.error("데이터를 불러오는 도중 오류 발생:", error);
      }
    }
  };

  // 컴포넌트가 마운트되었을 때 데이터를 가져옴
  useEffect(() => {
    fetchArticleData();
  }, [location]);

  // Slider 설정 (이미지 슬라이더)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div>
        <A.title>{articleData.title}</A.title>
        <Slider {...settings} style={{ width: "900px", height: "300px" }}>
          {articleData.images.map((image, index) => (
            <div key={index}>
              <img
                src={image.url}
                alt={`Slide ${index}`}
                style={{ width: "50vw", height: "300px" }}
              />
            </div>
          ))}
        </Slider>
        <p>카테고리: {articleData.category}</p>
        <p>설명: {articleData.description}</p>
        <p>가격: {articleData.price}</p>
        <p>단위: {articleData.rentalType}</p>
        <p>날짜: {articleData.createdAt}</p>
      </div>
      <div>
        {" "}
        {/* 작성자 정보 */}
        <img src={userprofile} alt="기본프로필" />
        <p>올린사람: {writerData.name}</p>
      </div>
    </div>
  );
};

export default ArticleInfo;
