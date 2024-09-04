import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as M from "../../style/Main.style";
import "../../style/Main.style";
import CONFIG from "../../config/config.json";
import myInFo from "../../assets/img/myInfo.png";
import comunity from "../../assets/img/comunity.png";
import chat from "../../assets/img/chat.png";
import isLogin from "../../util/isAuth";
import logo from "../../assets/img/logo.png";
import data from "./DemmyArticle";

const Main = ({ isLogin }) => {
  const navigate = useNavigate();
  const [articlesData, setArticlesData] = useState({
    articles: [],
    totalPage: 0,
  });

  const LoginHandler = () => {
    navigate("/login");
  };
  const SignUpHandler = () => {
    navigate("/signup");
  };
  const PostArticleHandler = () => {
    navigate("/article/post");
  };

  const [currentPage, setCurrentPage] = useState(0);

  const ServerConnect = async (page) => {
    // todo ServerConnect 함수명 바꾸기
    // console.log("-----------------------");
    const response = await axios.get(
      `/article/page/${page}`,
      {},
      {
        withCredentials: true,
      }
    );
    // const response = { data: JSON.parse(data) };
    // console.log(response);

    setArticlesData((prevData) => ({
      articles: [...prevData.articles, ...response.data.data.content],
      totalPage: response.data.data.totalPages,
    }));
  };

  useEffect(() => {
    ServerConnect(0);
  }, []);

  const LoadMoreArticles = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    ServerConnect(nextPage);
  };

  const ChunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const ArticleClickHandler = (event) => {
    console.log(event.target);
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
  console.log(isLogin);

  return (
    <>
      {/* <M.navContainer>
          <>
            <M.nav src={myInFo} alt="Image"></M.nav>
            <M.nav src={comunity} alt="Image"></M.nav>
            <M.nav src={chat} alt="Image"></M.nav>
          </>
      </M.navContainer> */}

      <M.articleContainer>
        {ChunkArray(articlesData.articles, 5).map((chunk, chunkIndex) => (
          <M.line key={chunkIndex}>
            {" "}
            {/* todo 이름 바꾸기*/}
            {chunk.map((article, index) => (
              <M.article
                key={index}
                id={article.idx}
                name="article"
                onClick={ArticleClickHandler}>
                <M.image src={article.image.url} alt="Image" />
                <M.title>{article.title}</M.title>
                <M.price>{article.price}원</M.price>
                <M.unitt>{renderRentalType(article.rentalType)}</M.unitt>
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
