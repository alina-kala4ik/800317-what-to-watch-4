import axios from "axios";

const Error = {
  UNAUTHORIZED: 401,
  NOT_FOUND: 404
};

const createAPI = (onNotFound, onUnauthorized) => {
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

    switch (response.status) {
      case Error.NOT_FOUND:
        onNotFound();
        throw err;
      case Error.UNAUTHORIZED:
        onUnauthorized();
        throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};

export {createAPI};
