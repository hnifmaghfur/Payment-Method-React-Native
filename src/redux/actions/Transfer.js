import Axios from 'axios';
import {BASE_URL} from '../../components/utils';
import {GetHistory} from './History';
import {GetUsers} from './Users';

const TransferRequest = () => {
  return {
    type: 'TRANSFER_REQUEST',
  };
};

const TransferSuccess = (data) => {
  return {
    type: 'TRANSFER_SUCCESS',
    payload: data,
  };
};
const PreTransfer = (data) => {
  return {
    type: 'PRE_TRANSFER_SUCCESS',
    payload: data,
  };
};
const TransferError = (error) => {
  return {
    type: 'TRANSFER_ERROR',
    payload: error,
  };
};

export const PreCreateTransfer = (data) => {
  console.log(data);
  console.log('data from pre transfer');
  return (dispatch) => {
    dispatch(PreTransfer(data));
  };
};

export const CreateTransfer = (token, data) => {
  return (dispatch) => {
    console.log(data);
    console.log('data createTransfer redux');
    dispatch(TransferRequest());
    return Axios({
      method: 'POST',
      // url: `${BASE_URL}/user`,
      url: `${BASE_URL}/transaction/`,
      data: data,
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        const data = res.data.data;
        console.log(res);
        console.log('data action transfer');
        dispatch(TransferSuccess(data));
        dispatch(GetHistory(token, 5));
        dispatch(GetUsers(token));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(TransferError(message));
      });
  };
};
