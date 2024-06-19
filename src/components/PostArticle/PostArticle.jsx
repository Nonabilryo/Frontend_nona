import axios from "axios";
import { useCallback, useState, useEffect } from "react";
import CONFIG from "../../config/config.json";
import { useNavigate } from "react-router";

const PostArticle = () => {
    const navigate = useNavigate();
    const [postData, setPostData] = useState({
        title: "",
        category: "",
        description: "",
        price: "",
        rentalType: ""
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
        console.log(postData)
        const formData = new FormData();
        formData.append('title', postData.title);
        formData.append('category', postData.category);
        formData.append('description', postData.description);
        formData.append('price', postData.price);
        formData.append('rentalType', postData.rentalType);
        
        Array.from(selectedFiles).forEach((file, index) => {
            formData.append(`images`, file);
        });

        try {
            const response = await axios.post(`${CONFIG.SERVER}/article`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': localStorage.getItem("accessToken"),
                    // 'userIdx': '18c6ef73-58b7-45a5-ab42-f21a2d58d3ee'
                },
            },
            // { withCredentials: true }
        );
            navigate("/")
            // Handle the response if needed
        } catch (error) {
            // Handle the error if needed
        }
    };

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="title">제목</label>
            <input name="title" id="title" type="text" onChange={handlePostChange} />

            <label htmlFor="category">카테고리</label>
            <input name="category" id="category" type="text" onChange={handlePostChange} />

            <label htmlFor="description">설명</label>
            <textarea name="description" id="description" onChange={handlePostChange}></textarea>

            <label htmlFor="price">가격</label>
            <input name="price" id="price" type="number" onChange={handlePostChange} />

            <label htmlFor="rentalType">렌탈타입</label>
            <select name="rentalType" id="rentalType" onChange={handlePostChange} defaultValue="0">
                <option value="0">Year</option>
                <option value="1">Month</option>
                <option value="2">Day</option>
                <option value="3">Hour</option>
            </select>

            <label htmlFor="images">이미지</label>
            <input name="images" id="images" type="file" accept="image/png, image/jpeg" onChange={handleFileChange} multiple />

            <button type="submit" onClick={Submit}>올리기</button>
        </div>
    );
};

export default PostArticle;
