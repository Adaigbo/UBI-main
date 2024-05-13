import axios from 'axios';
import Utils from '../utils/Utils';
import { Fragment } from 'react';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 50000,
  // headers: {
  //   'Accept': 'application/json',
  //   'Content-Type': 'application/json',
  // 'Content-Type': 'multipart/form-data',
  // 'Content-Type': 'application/x-www-form-urlencoded'
  // },
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
  let token = localStorage.getItem('ubi_token');
  // console.log(config)

  return {
    ...config,
    headers: {
      authorization: token ? `Bearer ${token}` : null,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  };
});

instance.interceptors.response.use(
  response => {
    return response
  },
  function (error) {
    // const originalRequest = error.config
    let errorMessage = '';


    // Validation Error
    if (error.response && error.response.status === 422) {
      const errors = error.response.data.errors;
      if (errors) {
        var errorsArray = [];
        for (const field in errors) {
          errorsArray.push(
            <>
              {errors[field].map((item, index) => (
                <Fragment key={index}>
                  {index !== 0 && <br />} {/* Add <br> tag after the first item */}
                  {item}
                </Fragment>
              ))}
            </>
          );
        }

        errorMessage = <>
          {errorsArray.map((item, index) => (
            <Fragment key={index}>
              {index !== 0 && <br />} {/* Add <br> tag after the first item */}
              {item}
            </Fragment>
          ))}
        </>

        // errorsArray.join(", \n");
      }
      else {
        errorMessage = error.response.data.message;
      }
    }

    else if (error.response && error.response.status === 401) {
      if (error.response.data.message != "You can't deactivate own account!") {
        localStorage.removeItem('ubi_token');
        localStorage.removeItem('ubi_user');
        if (window.location.pathname != `${process.env.PUBLIC_URL}/authentication/signup`) {
          window.location.href = `${process.env.PUBLIC_URL}/authentication/login`;
        }
      } else {
        Utils.Toast('error', error.response.data.message);
      }
      console.log(error.response);
      return;
    }
    else if (error.response && error.response.data && error.response.data.message) {
      errorMessage = error.response.data.message;
    }
    else if (error.message) {
      errorMessage = error.message;
    }

    // display error message
    if (!errorMessage) {
      if (error.response && error.response.data && error.response.data.message) {
        errorMessage = error.response.data.message;
      }
      else if (error.response && error.response.statusText) {
        errorMessage = error.response.status + ' ' + error.response.statusText;
      }
    }

    if (errorMessage) {
      Utils.Toast('error', errorMessage);
    }

    return Promise.reject(error)
  }
);



const responseBody = (response) => response.data;

const requests = {
  get: (url, body) => instance.get(url, body).then(responseBody),

  post: (url, body, headers) => instance.post(url, body, headers).then(responseBody),

  put: (url, body) => instance.put(url, body).then(responseBody),

  delete: (url, body) => instance.delete(url, body).then(responseBody),
};

export default requests;
