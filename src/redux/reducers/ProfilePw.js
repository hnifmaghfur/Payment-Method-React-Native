const initialState = {
  data: [],
  loading: false,
};

export const ProfilePw = (state = initialState, action = {}) => {
  switch (action.type) {
    case "PROFILEPW_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "PROFILEPW_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "PROFILEPW_ERROR":
      return {
        ...state,
        loading: false,
        isLogin: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default ProfilePw;
