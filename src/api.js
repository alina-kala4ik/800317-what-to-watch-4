import axios from "axios";

const Error = {
  UNAUTHORIZED: 401,
  NOT_FOUND: 404
};

const createAPI = (onNotFound) => {
  const api = axios.create({
    baseURL: `https://4.react.pages.academy/wtw`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) =>{
    return response;
  };

  const onError = (err) => {
    const {response} = err;

    if (response.status === Error.NOT_FOUND) {
      onNotFound();
      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};

export {createAPI};
