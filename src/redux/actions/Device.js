import Axios from 'axios';
import {BASE_URL} from '../../components/utils';

const DeviceRequest = () => {
  return {
    type: 'DEVICE_REQUEST',
  };
};

const DeviceSuccess = (token) => {
  return {
    type: 'DEVICE_SUCCESS',
    payload: token,
  };
};
const DeviceError = (error) => {
  return {
    type: 'DEVICE_ERROR',
    payload: error,
  };
};

export const Device = (devices_token) => {
  return (dispatch) => {
    dispatch(DeviceRequest());
    dispatch(DeviceSuccess(devices_token));
  };
};
