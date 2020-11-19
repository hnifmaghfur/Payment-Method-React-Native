const initialState = {
  data: [],
  loading: false,
  isChange: false,
};

export const Users = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'USERS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'USERS_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case 'USERS_PATCH':
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case 'USERS_ERROR':
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    case 'USERS_PATCH_PASSWORD':
      return {
        ...state,
        loading: false,
        isChange: true,
        data: action.payload,
      };
    case 'USERS_ERROR_PASSWORD':
      return {
        ...state,
        loading: false,
        isChange: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default Users;
