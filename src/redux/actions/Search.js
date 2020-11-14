import Axios from 'axios';

const SearchRequest = () => {
  return {
    type: 'SEARCH_REQUEST',
  };
};

const SearchSuccess = (data) => {
  return {
    type: 'SEARCH_SUCCESS',
    payload: data,
  };
};
const SearchError = (error) => {
  return {
    type: 'SEARCH_ERROR',
    payload: error,
  };
};

export const GetSearch = (token, search, limit) => {
  return (dispatch) => {
    dispatch(SearchRequest());
    return Axios({
      method: 'GET',
      url: `http://192.168.43.141:7000/zwallet/api/v1/user/all?search=${search}&limit=${limit}`,
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        const data = res.data.data;
        console.log(data);
        console.log('ini search redux');
        dispatch(SearchSuccess(data));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(SearchError(message));
      });
  };
};
