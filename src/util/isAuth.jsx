import axios from "axios";
import CONFIG from "../config/config.json";

const verifyAccessToken = async () => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) return false; // null 체크
  try {
    const response = await axios.post(
      `${CONFIG.SERVER}/sso/verify/accessToken`,
      { accessToken },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.status === 200;
  } catch (error) {
    // todo
    return false;
  }
};

const refreshTokens = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  if (!refreshToken) return false; // null 체크
  try {
    const response = await axios.post(
      `${CONFIG.SERVER}/sso/refresh`,
      { refreshToken },
      { headers: { "Content-Type": "application/json" } }
    );
    if (response.status === 200) {
      localStorage.setItem("accessToken", response.data.data.accessToken);
      localStorage.setItem("refreshToken", response.data.data.refreshToken);
      return true;
    }
  } catch (error) {
    //todo
  }
  return false;
};

const isAuth = async () => {
  const verified = await verifyAccessToken();
  if (!verified) {
    const refreshed = await refreshTokens();
    return refreshed;
  }
  return true;
};

export default isAuth;
