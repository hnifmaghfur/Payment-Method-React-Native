import Axios from 'axios';
import {BASE_URL} from '../../components/utils';

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
const TransferError = (error) => {
  return {
    type: 'TRANSFER_ERROR',
    payload: error,
  };
};

export const GetTransfer = (token) => {
  return (dispatch) => {
    dispatch(TransferRequest());
    return Axios({
      method: 'GET',
      // url: `${BASE_URL}/user`,
      url: `${BASE_URL}/user`,
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        const data = res.data.data[0];
        console.log(data, 'action user');
        dispatch(TransferSuccess(data));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(TransferError(message));
      });
  };
};
