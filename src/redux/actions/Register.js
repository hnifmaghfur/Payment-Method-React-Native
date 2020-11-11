import Axios from 'axios';
import {BASE_URL} from '../../components/utils/index';

export const registerRequest = () => {
  return {
    type: 'REGISTER_REQUEST',
  };
};

export const registerSuccess = (message) => {
  return {
    type: 'REGISTER_SUCCESS',
    payload: message,
  };
};

export const registerFailed = (message) => {
  return {
    type: 'REGISTER_FAILED',
    payload: message,
  };
};

export const Signup = (fields) => {
  return (dispatch) => {
    dispatch(registerRequest());
    console.log(fields);
    console.log('ini fields');
    return Axios({
      method: 'POST',
      data: fields,
      url: `https://zwallet-sleepless-backend.herokuapp.com/zwallet/api/v1/auth/register`,
    })
      .then((res) => {
        const data = res.data.token.token;
        console.log(data);
        console.log('ini register');
        dispatch(registerSuccess(data));
      })
      .catch((err) => {
        console.log(err);
        const message = err.message;
        dispatch(registerFailed(message));
      });
  };
};
