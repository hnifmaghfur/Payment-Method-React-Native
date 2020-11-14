import Axios from 'axios';
import {BASE_URL} from '../../components/utils';

const UsersRequest = () => {
  return {
    type: 'USERS_REQUEST',
  };
};

const UsersSuccess = (data) => {
  return {
    type: 'USERS_SUCCESS',
    payload: data,
  };
};

const UsersPatch = (data) => {
  return {
    type: 'USERS_PATCH',
    payload: data,
  };
};
const UsersError = (error) => {
  return {
    type: 'USERS_ERROR',
    payload: error,
  };
};

export const GetUsers = (token) => {
  return (dispatch) => {
    dispatch(UsersRequest());
    return Axios({
      method: 'GET',
      // url: `${BASE_URL}/user`,
      url: `http://192.168.43.141:7000/zwallet/api/v1/user`,
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        const data = res.data.data[0];
        console.log(data, 'action user');
        dispatch(UsersSuccess(data));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(UsersError(message));
      });
  };
};

export const PatchPhone = (token, phone) => {
  return (dispatch) => {
    dispatch(UsersRequest());
    return Axios({
      method: 'PATCH',
      // url: `${BASE_URL}/user`,
      url: `http://192.168.43.141:7000/zwallet/api/v1/user/patch_user`,
      data: {
        phoneNumber: phone,
      },
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        const data = res.data.data[0];
        console.log(data, 'action user');
        dispatch(UsersPatch(data));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(UsersError(message));
      });
  };
};
