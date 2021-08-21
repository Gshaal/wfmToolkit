import * as actionTypes from "./actionTypes";
import Axios from "../../hoc/Axios";
import { toast } from "react-toastify";
export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSignupSuccess = (msg) => {
  return {
    type: actionTypes.AUTH_SIGINUP_SUCCESS,
    message: msg,
  };
};

export const authLoginSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_LOGIN_SUCCESS,
    token: token,
    userId: userId,
  };
};

export const setUserInfo = (user) => {
  return {
    type: actionTypes.CHECK_USER,
    user: user,
  };
};

export const authFailed = (err) => {
  return {
    type: actionTypes.AUTH_FAILED,
    error: err,
  };
};

export const resetState = () => {
  return {
    type: actionTypes.AUTH_RESET_STATE,
  };
};

export const sighUp = (name, email, password, confirmPassword) => {
  return (dispatch) => {
    let data = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };

    dispatch(authStart());
    Axios.post("/auth/signup", data)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          dispatch(authSignupSuccess(res.data.message));
        }
      })
      .catch((err) => {
        console.log(err.response.data);
        dispatch(authFailed(extractErrorMessage(err.response.data)[0]));
      });
  };
};

export const chekcTimeOut = (expirationTime) => {
  return (dispatch) => {
    let expire_time;
    clearTimeout(expire_time);
    expire_time = setTimeout(() => {
      toast.info("Your session has expired", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(LogOut());
    }, expirationTime);
  };
};

export const authLogout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const setPath = (path) => {
  return {
    type: actionTypes.SET_PATH,
    path: path,
  };
};

export const LogOut = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    localStorage.removeItem("expiryDate");
    localStorage.removeItem("userId");
    dispatch(authLogout());
    // dispatch(setPath(null))
  };
};

export const login = (email, password) => {
  return (dispatch) => {
    let data = {
      email: email,
      password: password,
    };
    dispatch(authStart());
    Axios.post("/auth/login", data)
      .then((res) => {
        // console.log(res)
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.userId);
        const remainingMilliseconds = 60 * 60 * 1000;
        const expiryDate = new Date(
          new Date().getTime() + remainingMilliseconds
        );
        // console.log(expiryDate)
        localStorage.setItem("expiryDate", expiryDate.toISOString());
        dispatch(authLoginSuccess(res.data.token, res.data.userId));
        dispatch(chekcTimeOut(remainingMilliseconds));
        toast.success("Loged in successfully 😊", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        console.log(err.response.data);
        dispatch(authFailed(extractErrorMessage(err.response.data)[0]));
      });
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    const expiryDate = localStorage.getItem("expiryDate");
    if (!token || !expiryDate) {
      return;
    }
    if (new Date(expiryDate) <= new Date()) {
      dispatch(LogOut());
      return;
    }
    const userId = localStorage.getItem("userId");
    const remainingMilliseconds =
      new Date(expiryDate).getTime() - new Date().getTime();
    dispatch(authLoginSuccess(token, userId));
    dispatch(chekcTimeOut(remainingMilliseconds));
  };
};

export const user = (token) => {
  return (dispatch) => {
    Axios.post("/Authintication/user-info", null, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        if (res.data.user.length <= 0) {
          dispatch(LogOut());
        }
        dispatch(setUserInfo(res.data.user[0]));
      })
      .catch((err) => dispatch(LogOut()));
  };
};

export const setReirectRoute = (path) => {
  const verifiy = path === "/login" ? null : path;
  return (dispatch) => {
    dispatch(setPath(verifiy));
  };
};

const extractErrorMessage = (err) => {
  return err.results.map((item) => item.msg);
};
