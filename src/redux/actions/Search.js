import Axios from 'axios';
import {BASE_URL} from '../../components/utils';

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
    console.log(token);
    console.log(search);
    console.log(limit);
    console.log('ini dari get search redux');
    dispatch(SearchRequest());
    return Axios({
      method: 'GET',
      url: `${BASE_URL}/user/all?search=${search}&limit=${limit}`,
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        const data = res.data.data;
        // console.log(data);
        // console.log('ini search redux');
        dispatch(SearchSuccess(data));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(SearchError(message));
      });
  };
};
