import Axios from 'axios';
import {BASE_URL} from '../../components/utils';
import {GetUsers} from './Users';

const HistoryAllRequest = () => {
  return {
    type: 'HISTORY_ALL_REQUEST',
  };
};

const HistoryAllSuccess = (data) => {
  return {
    type: 'HISTORY_ALL_SUCCESS',
    payload: data,
  };
};
const HistoryAllError = (error) => {
  return {
    type: 'HISTORY_ALL_ERROR',
    payload: error,
  };
};

export const GetHistoryAll = (token, limit, limitWeek) => {
  return (dispatch) => {
    console.log(limit);
    console.log('data GetHistoryAll redux');
    dispatch(HistoryAllRequest());
    return Axios({
      method: 'GET',
      // url: `${BASE_URL}/user`,
      url: `${BASE_URL}/transaction/history?limit=${limit}&limitWeek=${limitWeek}`,
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        const data = res.data.data;
        console.log(res);
        console.log('data action HistoryAll');
        dispatch(HistoryAllSuccess(data));
        dispatch(GetUsers(token));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(HistoryAllError(message));
      });
  };
};
