import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';

import "../../style/Main.style";
import CONFIG from "../../config/config.json";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { article } from '../../style/Main.style';

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
        createdAt: ""
    });
    const [writerData, setWriterData] = useState(
        {
            idx: "",
            name: "",
            imageUrl: "",
            description: "",
            signed: ""
        }
    )

    const fetchArticleData = async () => {
        const response = await axios.get(`${CONFIG.SERVER}/article/${location.pathname.split('/')[2]}`);
        setArticleData({
            title: response.data.data.title,
            images: response.data.data.images,
            writer: response.data.data.writer,
            category: response.data.data.category,
            description: response.data.data.description,
            price: response.data.data.price,
            rentalType: response.data.data.rentalType,
            createdAt: response.data.data.createdAt
        });
        const writerDataResponse = await await axios.get(
            `${CONFIG.SERVER}/user/${response.data.data.writer}`,
          );
        setWriterData(writerDataResponse.data.data)
    };

    useEffect(() => {
        fetchArticleData();
    }, [location]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <div>     {/*   <--------------- container로 만들기   알아서 꾸미기     */}
                <h1>{articleData.title}</h1>
                <Slider {...settings} style={{ width: "900px", height: "300px" }}>
                    {articleData.images.map((image, index) => (
                        <div key={index}>
                            <img 
                                src={image.url} 
                                alt={`Slide ${index}`} 
                                style={{ width: "900px", height: "300px"}} 
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
                <img src={writerData.imageUrl} alt="기본프로필"></img>  
                <p>올린사람: {writerData.name}</p>
            </div>
            <div>
                좋아요:
                실어요:
            </div>
        </div>
    );
};

export default ArticleInfo;
