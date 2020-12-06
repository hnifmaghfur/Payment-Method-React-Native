import Axios from 'axios';
import {BASE_URL} from '../../components/utils';
import {GetUsers} from './Users';

const HistoryRequest = () => {
  return {
    type: 'HISTORY_REQUEST',
  };
};

const HistorySuccess = (data) => {
  return {
    type: 'HISTORY_SUCCESS',
    payload: data,
  };
};
const HistoryError = (error) => {
  return {
    type: 'HISTORY_ERROR',
    payload: error,
  };
};

export const GetHistory = (token, limit) => {
  return (dispatch) => {
    console.log(limit);
    console.log('data GetHistory redux');
    dispatch(HistoryRequest());
    return Axios({
      method: 'GET',
      // url: `${BASE_URL}/user`,
      url: `${BASE_URL}/transaction/detail?limit=${limit}`,
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        const data = res.data.data.data;
        console.log(res);
        console.log('data action History');
        dispatch(HistorySuccess(data));
        // dispatch(GetUsers(token));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(HistoryError(message));
      });
  };
};
