const initialState = {
  data: {
    name: '',
    email: '',
    password: '',
    pin: '',
  },
  loading: false,
  isSuccess: false,
  message: '',
};

export default Register = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        loading: false,
        isSuccess: true,
        message: action.payload,
      };
    case 'REGISTER_FAILED':
      return {
        ...state,
        loading: false,
        isSuccess: false,
        message: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
