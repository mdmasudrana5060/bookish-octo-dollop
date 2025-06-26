// export const storeUserInfo = ({accessToken}) => {
// return setToLocalStorage(authKey,accessToken),this setLocalStorage is a function come from utils folder
// authkey is coming from  constant folder
// };

import { authKey } from "@/constants/authkey";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
} from "@/utils/local-storage";

// import { getFromLocalStorage } from "@/utils/local-storage";

// export const getUserInfo = () => {
//   const authTOken = getFromLocalStorage(authKey);
// if(authToken){
//     const decodeData=decodeToken(authToken)
// return {
//   ...decodedData,
//   role: decodedData?.role.toLowerCase(),
// };
// }
// };

// export const isLoggedIn = () => {
//   const authToken = getFromLocalStorage(authKey);
//   if (authToken) {
//     return !!authToken;
//   }
// };

// export const removeUser = () => {
//   return removeFromLocalStorage(authKey);
// };
