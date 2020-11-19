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
    payload: data[0],
  };
};

const UsersPatch = (data) => {
  return {
    type: 'USERS_PATCH',
    payload: data.data[0],
  };
};

const UsersError = (error) => {
  return {
    type: 'USERS_ERROR',
    payload: error,
  };
};
const UsersPatchPassword = (data) => {
  return {
    type: 'USERS_PATCH_PASSWORD',
    payload: data.data[0],
  };
};

const UsersErrorPassword = (error) => {
  return {
    type: 'USERS_ERROR_PASSWORD',
    payload: error,
  };
};

export const GetUsers = (token) => async (dispatch) => {
  const res = await Axios.get(`${BASE_URL}/user`, {
    headers: {
      Authorization: token,
    },
  });
  dispatch(UsersSuccess(res.data.data));
};

export const PatchPhone = (token, phone) => {
  return (dispatch) => {
    dispatch(UsersRequest());
    return Axios({
      method: 'PATCH',
      // url: `${BASE_URL}/user`,
      url: `${BASE_URL}/user/patch_user`,
      data: {
        phoneNumber: phone,
      },
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        const data = res.data;
        // console.log(data, 'action user');
        dispatch(UsersPatch(data));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(UsersError(message));
      });
  };
};

export const PatchAll = (token, dataGet) => {
  return (dispatch) => {
    dispatch(UsersRequest());
    return Axios({
      method: 'PATCH',
      // url: `${BASE_URL}/user`,
      url: `${BASE_URL}/user/patch_user`,
      data: dataGet,
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        const data = res.data;
        console.log(data);
        console.log('data patch all');
        dispatch(UsersPatch(data));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(UsersError(message));
      });
  };
};
export const PatchPhoto = (token, dataPhoto) => async (dispatch) => {
  dispatch(UsersRequest());
  try {
    const res = await Axios.patch(`${BASE_URL}/user/patch_user`, dataPhoto, {
      headers: {
        Authorization: token,
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      },
    });
    dispatch(UsersPatch(res.data));
  } catch (error) {
    dispatch(UsersError(error.response.data));
  }
};

export const OnChangePassword = (token, data) => {
  return (dispatch) => {
    dispatch(UsersRequest());
    console.log(token);
    console.log('data from actions');
    return Axios.patch(`${BASE_URL}/user/change_password`, data, {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        dispatch(UsersPatchPassword(res.data));
      })
      .catch();
  };
};
