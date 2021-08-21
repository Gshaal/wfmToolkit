import * as actions from "../actions/actionTypes";

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  redirect: false,
  message: null,
  userInfo: null,
  pathCallback:null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.AUTH_START:
      return {
        ...state,
        error: null,
        loading: true,
        redirect: false,
      };
    case actions.AUTH_FAILED:
      return {
        ...state,
        error: action.error,
        loading: false,
        redirect: false,
      };
    case actions.AUTH_RESET_STATE:
      return {
        ...state,
        error: null,
        loading: false,
        redirect: false,
        message: null,
      };
    case actions.AUTH_SIGINUP_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        redirect: true,
        message: action.message,
      };
    case actions.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        token: action.token,
        userid: action.userId,
      };
    case actions.AUTH_LOGOUT:
      return {
        ...state,
        token: null,
        userId: null,
      };
    case actions.CHECK_USER:
      return {
        ...state,
        userInfo: action.user,
      };
    case actions.SET_PATH:
      return {
        ...state,
        pathCallback: action.path,
      };
    default:
      return state;
  }
};

export default reducer;
