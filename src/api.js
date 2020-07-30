import axios from "axios";

const Error = {
  UNAUTHORIZED: 401,
  INTERNAL_SERVER_ERROR: 500,
  NOT_FOUND: 404
};

const createAPI = (onServerError, onUnauthorized) => {
  const api = axios.create({
    baseURL: `https://4.react.pages.academy/wtw`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onError = (err) => {
    const {response} = err;

    switch (response.status) {
      case Error.NOT_FOUND:
        onServerError();
        break;
      case Error.UNAUTHORIZED:
        onUnauthorized(response);
        throw err;
    }

    if (response.status >= Error.INTERNAL_SERVER_ERROR) {
      onServerError();
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};

export {createAPI};
