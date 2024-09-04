import React, { useState, useEffect } from "react";
import { Switch } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as M from "../../style/Main.style";
import "../../style/Main.style";
import CONFIG from "../../config/config.json";
import logo from "../../assets/img/logo.png";
import data from "./DemmyArticle";
import isLogin from "../../util/isAuth";
import mypage from "../../assets/img/mypage.png";
import chat from "../../assets/img/chat.png";
import community from "../../assets/img/community.png";
import line from "../../assets/img/line.png";
import search_icon from "../../assets/img/search_icon.png";
import delete_search from "../../assets/img/x.png";
import myInFo from "../../assets/img/myInfo.png";
import comunity from "../../assets/img/comunity.png";

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
      `${CONFIG.SERVER}/article/page/${page}`,
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

  const Main = ({ isLogin }) => {
    const navigate = useNavigate();
    const [articlesData, setArticlesData] = useState({
      articles: [],
      totalPage: 0,
    });
    const [currentPage, setCurrentPage] = useState(0);

    const ServerConnect = async (page) => {
      // todo ServerConnect 함수명 바꾸기
      const response = await axios.get(
        `${CONFIG.SERVER}/article/page/${page}`,
        {
          withCredentials: true,
        }
      );
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
          return "1년";
        case "MONTH":
          return "1개월";
        case "DAY":
          return "1일";
        case "HOUR":
          return "1시간";
        default:
          return rentalType;
      }
    };
    console.log(isLogin);

    function Main() {
      const App = () =>
        React.createElement("ConfigProvider", {
          theme: { components: { Switch: {} } },
        });

      return (
        <>
          <M.logo img src={logo} alt="logo" />
          <M.search />
          <M.search_icon img src={search_icon} alt="search icon" />
          <M.delete_search img src={delete_search} alt="delete" />
          <M.mypage img src={mypage} alt="mypage" />
          <M.chat img src={chat} alt="chat" />
          <M.community img src={community} alt="community" />
          <M.line1 img src={line} alt="line" />
          <M.line2 img src={line} alt="line" />
          <M.main_line />
          <M.recommend>상품 추천</M.recommend>

          <Switch checkedChildren="차용" unCheckedChildren="대여" />

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
                    <h2>{article.title}</h2>
                    <p>가격: {article.price}원</p>
                    <p>{renderRentalType(article.rentalType)}</p>

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
    }
  };
};

export default Main;
