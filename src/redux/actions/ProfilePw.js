import Axios from "axios";

const ProfilePwRequest = () => {
  return {
    type: "PROFILEPW_REQUEST",
  };
};

const ProfilePwSuccess = (data) => {
  return {
    type: "PROFILEPW_SUCCESS",
    payload: data,
  };
};
const ProfilePwError = (error) => {
  return {
    type: "PROFILEPW_ERROR",
    payload: error,
  };
};

export const GetProfilePw = (token, currentPw, updatePw) => {
  return (dispatch) => {
    dispatch(ProfilePwRequest());
    return Axios({
      method: "PATCH",
      url: `http://localhost:8000/api/v1/users`,
      data: { password: updatePw },
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        const data = res.data.token[0];
        console.log(data, "aaa");
        dispatch(ProfilePwSuccess(data));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(ProfilePwError(message));
      });
  };
};
