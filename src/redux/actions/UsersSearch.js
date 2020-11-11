import Axios from "axios";

const UsersSearchRequest = () => {
  return {
    type: "USERS_SEARCH_REQUEST",
  };
};

const UsersSearchSuccess = (data) => {
  return {
    type: "USERS_SEARCH_SUCCESS",
    payload: data,
  };
};
const UsersSearchError = (error) => {
  return {
    type: "USERS_SEARCH_ERROR",
    payload: error,
  };
};

export const GetSearchUsers = (token, query) => {
  return (dispatch) => {
    console.log(token, "aw");
    dispatch(UsersSearchRequest());
    return Axios({
      method: "GET",
      url: `http://localhost:8000/api/v1/users/search?q=${
        !query ? "" : `${query}`
      }`,
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        const data = res.data;
        console.log(data, "bbb");
        dispatch(UsersSearchSuccess(data));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(UsersSearchError(message));
      });
  };
};
