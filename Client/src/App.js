import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import { Route, Switch, Redirect } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./Containers/Layout/DefaultLayout";
import { connect } from "react-redux";
import * as actions from "./Store/actions/index";
import "./App.css";

const Login = React.lazy(() => import("./Containers/Authentication/Login"));
const Register = React.lazy(() =>import("./Containers/Authentication/Register"));
const Reset =  React.lazy(() =>import("./Containers/Authentication/Reset"))
const Home = React.lazy(()=> import('./Containers/Home/index'))

class App extends Component {
  state = {
    redirect: false,
  };

  componentDidMount() {
    this.props.checkSession();
    if (this.props.isAuthintacted !== true) {
      this.props.setPath(
        this.props.location.pathname + this.props.location.search
      );
      this.setState({
        redirect: true,
      });
    }
  }

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );
  render() {
    return (
      <React.Suspense fallback={this.loading()}>
        <ToastContainer />
        {this.props.isAuthintacted === true ? (
          <Route
            path="/"
            name="Home"
            render={(props) => {
              return <Layout {...props} />;
            }}
          />
        ) : (
          <Switch>
             <Route
              exact
              path="/home"
              name="Home Page"
              render={(props) => <Home {...props} />}
            />
            <Route
              exact
              path="/login"
              name="Login Page"
              render={(props) => <Login {...props} />}
            />
            <Route
              exact
              path="/register"
              name="Register Page"
              render={(props) => <Register {...props} />}
            />
            <Route
              exact
              path="/reset"
              name="Reset Page"
              render={(props) => <Reset {...props} />}
            />
            {this.state.redirect === true ? <Redirect to="/home" /> : null}
          </Switch>
        )}
      </React.Suspense>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    isAuthintacted: state.auth.token != null,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    checkSession: () => dispatch(actions.authCheckState()),
    setPath: (path) => dispatch(actions.setReirectRoute(path)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
