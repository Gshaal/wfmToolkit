import React, { Component, Suspense } from "react";
import CustomInput from '../../Components/UI/Input';
import { Button, Card, CardBody, Col, Container, Form, Row} from "reactstrap";
import './style.css';
import { connect } from "react-redux";
import * as actions from "../../Store/actions/index";
import { toast } from "react-toastify";


 class Login extends Component {
  state = {
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your Email",
          icon: "fa fa-user",
        },
        value: "",
        validation: {
          required: true,
          minLen: 5,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Enter Password",
          icon: "fa fa-unlock-alt",
        },
        value: "",
        validation: {
          required: true,
          minLen: 8,
        },
        valid: false,
        touched: false,
      },
    },
  };

  componentDidUpdate() {
    if (this.props.error) {
      toast.error(this.props.error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onOpen: () => this.props.reset(),
      });
    }
  }

  formChange(e, element) {
    let cloneFormData = {
      ...this.state.controls,
      [element]: {
        ...this.state.controls[element],
        value: e.target.value,
        valid: this.formVlidation(
          e.target.value,
          this.state.controls[element].validation
        ),
        touched: true,
      },
    };

    this.setState({
      controls: cloneFormData,
    });
  }

  formVlidation = (val, rules) => {
    let isValid = true;

    if (rules.required) {
      isValid = val.trim() !== "" && isValid;
    }

    if (rules.minLen) {
      isValid = val.length >= rules.minLen && isValid;
    }

    if (rules.maxLen) {
      isValid = val.length <= rules.maxLen && isValid;
    }

    return isValid;
  };


  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  handleLogin = (e) => {
    e.preventDefault();
    this.props.login(
      this.state.controls.email.value,
      this.state.controls.password.value
    );
  };
  render() {
    const isInValid =
      this.state.controls.email.value === "" ||
      this.state.controls.password.value === "";

    let formDataArray = [];
    for (let key in this.state.controls) {
      formDataArray.push({
        id: key,
        config: this.state.controls[key],
      });
    }

    let form = formDataArray.map((item, index) => {
      return (
        <CustomInput
          keyup={this.handleEnterKey}
          changed={(e) => this.formChange(e, item.id)}
          triggired={item.config.touched}
          invalid={!item.config.valid}
          shouldValidate={item.config.validation}
          key={item.id}
          elementType={item.config.elementType}
          elementConfig={item.config.elementConfig}
          value={item.config.value}
        />
      );
    });
    console.log(this.props);
    return (
      <Suspense fallback={this.loading()}>
        <div className="form-page flex-row align-items-center">
          <Container>
            <Row className="justify-content-center">
              <Col md="6">
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      {form}
                      <Row  className="text-center">
                        <Col xs="12">
                          <Button
                            onClick={this.handleLogin}
                            disabled={isInValid}
                            className="px-4 btn-global"
                          >
                            Login
                          </Button>
                        </Col>
                      </Row>
                      <Row  className="text-center" >
                        <Col xs="6" >
                          <Button
                            color="link"
                            onClick={(e) => {
                              this.props.history.push("/register");
                            }}
                            className="px-0"
                            active
                            tabIndex={-1}
                          >
                             No Password yet?
                          </Button>
                        </Col>
                        <Col
                          xs="6"
                          //onKeyUp={this.handleEnterKey}
                        >
                          <Button
                            color="link"
                            onClick={(e) => {
                              this.props.history.push("/reset");
                            }}
                            active
                            tabIndex={-1}
                            className="px-0"
                          >
                            Forgot password?
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </Suspense>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    msg: state.auth.message,
    redirect: state.auth.redirect,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(actions.login(email, password)),
    reset: () => dispatch(actions.resetState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
