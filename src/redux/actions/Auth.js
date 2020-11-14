import Axios from 'axios';

const AuthLoginRequest = () => {
  return {
    type: 'LOGIN_REQUEST',
  };
};

const AuthLoginSuccess = (token) => {
  return {
    type: 'LOGIN_SUCCESS',
    payload: token,
  };
};
const AuthLoginError = (error) => {
  return {
    type: 'LOGIN_ERROR',
    payload: error,
  };
};

export const AuthLogin = (fields) => {
  return (dispatch) => {
    dispatch(AuthLoginRequest());
    return Axios({
      method: 'POST',
      data: fields,
      url:
        // 'https://zwallet-sleepless-backend.herokuapp.com/zwallet/api/v1/auth/login',
        'http://192.168.43.141:7000/zwallet/api/v1/auth/login',
    })
      .then((res) => {
        const data = res.data.token.token;
        // console.log(data);
        // console.log('ini dari login');

        dispatch(AuthLoginSuccess(data));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(AuthLoginError(message));
      });
  };
};

export const AuthLogout = () => {
  return {
    type: 'LOGOUT',
  };
};
