import axios from "axios";
import CONFIG from "../config/config.json";
import Cookies from "js-cookie";

const verifyAccessToken = async () => {
  const accessToken = Cookies.get("accessToken");
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
  const refreshToken = Cookies.get("refreshToken");
  if (!refreshToken) return false; // null 체크
  try {
    const response = await axios.post(
      `${CONFIG.SERVER}/sso/refresh`,
      { refreshToken },
      { headers: { "Content-Type": "application/json" } }
    );
    if (response.status === 200) {
      Cookies.set("accessToken", response.data.data.accessToken);
      Cookies.set("refreshToken", response.data.data.refreshToken);
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
