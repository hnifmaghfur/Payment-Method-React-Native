const initialState = {
  dataSearch: [],
  loading: false,
};

export const UsersSearch = (state = initialState, action = {}) => {
  // console.log(action.payload);
  // console.log('ini reducer usersSearch');
  switch (action.type) {
    case 'SEARCH_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'SEARCH_SUCCESS':
      return {
        ...state,
        loading: false,
        dataSearch: action.payload,
      };
    case 'SEARCH_ERROR':
      return {
        ...state,
        loading: false,
        isLogin: false,
        dataSearch: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default UsersSearch;
