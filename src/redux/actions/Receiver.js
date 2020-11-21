import Axios from 'axios';
import {BASE_URL} from '../../components/utils';

const ReceiverRequest = () => {
  return {
    type: 'RECEIVER_REQUEST',
  };
};

const ReceiverSuccess = (data) => {
  return {
    type: 'RECEIVER_SUCCESS',
    payload: data,
  };
};
const ReceiverError = (error) => {
  return {
    type: 'RECEIVER_ERROR',
    payload: error,
  };
};

export const GetReceiver = (token, id) => {
  return (dispatch) => {
    // console.log(data);
    dispatch(ReceiverRequest());
    return Axios({
      method: 'GET',
      // url: `${BASE_URL}/user`,
      url: `${BASE_URL}/user/get_user?id=${id}`,
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        const data = res.data.data[0];
        console.log(data, 'action Receiver');
        dispatch(ReceiverSuccess(data));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(ReceiverError(message));
      });
  };
};
