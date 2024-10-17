import axios from "axios";
import { useCallback, useState, useEffect } from "react";
import CONFIG from "../../config/config.json";
import { useNavigate } from "react-router";

import * as P from "../../style/PostArticle";
import "../../style/PostArticle";

const PostArticle = () => {
  const navigate = useNavigate();
  const [postData, setPostData] = useState({
    title: "",
    category: "",
    description: "",
    price: "",
    rentalType: "",
  });

  const [selectedFiles, setSelectedFiles] = useState([]);

  const handlePostChange = useCallback((e) => {
    const { value, name } = e.target;
    setPostData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files);
  };

  useEffect(() => {
    console.log(postData);
  }, [postData]);

  const Submit = async () => {
    console.log(postData);
    const formData = new FormData();
    formData.append("title", postData.title);
    formData.append("category", "테스트");
    formData.append("description", postData.description);
    formData.append("price", postData.price);
    formData.append("rentalType", 1);

    Array.from(selectedFiles).forEach((file, index) => {
      formData.append(`images`, file);
    });

    try {
      const response = await axios.post(
        `${CONFIG.SERVER}/article`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: localStorage.getItem("accessToken"),
            // 'userIdx': '18c6ef73-58b7-45a5-ab42-f21a2d58d3ee'
          },
        }
        // { withCredentials: true }
      );
      navigate("/");
      // Handle the response if needed
    } catch (error) {
      // Handle the error if needed
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <P.title htmlFor="title">제목</P.title>
      <P.tiInput
        name="title"
        id="title"
        type="text"
        onChange={handlePostChange}
      />

      <P.price htmlFor="price">가격</P.price>
      <P.priInput
        name="price"
        id="price"
        type="number"
        onChange={handlePostChange}
      />

      <P.desc htmlFor="description">설명</P.desc>
      <P.descInput
        name="description"
        id="description"
        onChange={handlePostChange}></P.descInput>

      <P.img htmlFor="images">이미지</P.img>
      <P.imgInput
        name="images"
        id="images"
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleFileChange}
        multiple
      />

      <P.sub type="submit" onClick={Submit}>
        게시
      </P.sub>
    </div>
  );
};

export default PostArticle;
