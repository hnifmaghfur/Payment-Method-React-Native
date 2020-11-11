import Axios from "axios";

const TopupRequest = () => {
  return {
    type: "TOPUP_REQUEST",
  };
};

const TopupSuccess = (data) => {
  return {
    type: "TOPUP_SUCCESS",
    payload: data,
  };
};
const TopupError = (error) => {
  return {
    type: "TOPUP_ERROR",
    payload: error,
  };
};

export const GetTopup = (token) => {
  return (dispatch) => {
    dispatch(TopupRequest());
    return Axios({
      method: "GET",
      url: `http://localhost:8000/api/v1/topup`,
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        const data = res.data.token;
        dispatch(TopupSuccess(data));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(TopupError(message));
      });
  };
};
