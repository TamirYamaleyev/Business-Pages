import JwtDecode from "jwt-decode";
const TOKEN = "token";

export const setTokenInLocalStorage = (encryptedToken) =>
  localStorage.setItem(TOKEN, encryptedToken);

export const getUser = () => {
  try {
    const user = localStorage.getItem(TOKEN);
    const userDetails = JwtDecode(user);
    userDetails.isBusiness = userDetails.isBusiness === "true";
    userDetails.isAdmin = userDetails.isAdmin === "true";

    return userDetails;
  } catch (error) {
    return null;
  }
};

export const removeToken = () => localStorage.removeItem(TOKEN);

export const getToken = () => localStorage.getItem(TOKEN);
