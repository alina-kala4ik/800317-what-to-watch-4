import axios from "axios";

const createAPI = () => {
  const api = axios.create({
    baseURL: `https://4.react.pages.academy/wtw`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) =>{
    return response;
  };

  const onError = (err) => {
    throw err;
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};

export {createAPI};
