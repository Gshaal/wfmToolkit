import React, { Component , Suspense } from 'react';
import CustomInput from '../../Components/UI/Input';
import { Button, Card, CardBody, Col, Container, Form, Row} from "reactstrap";
import './style.css';
import { connect } from "react-redux";
import * as actions from "../../Store/actions/index";
import { toast } from "react-toastify";
 class Register extends Component {
    state = {
        controls: {
          name: {
            elementType: "input",
            elementConfig: {
              type: "text",
              placeholder: "Full Name",
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
          email: {
            elementType: "input",
            elementConfig: {
              type: "text",
              placeholder: "Your Email",
              icon: "fa fa-envelope",
            },
            value: "",
            validation: {
              required: true,
            },
            valid: false,
            touched: false,
          },
          password: {
            elementType: "input",
            elementConfig: {
              type: "password",
              placeholder: "New Password",
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
          confirmPassword: {
            elementType: "input",
            elementConfig: {
              type: "password",
              placeholder: "Confirm Password",
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

      
      componentDidUpdate(prevProps, prevState) {
        if (this.props.redirect) {
          toast.success(this.props.msg, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            onOpen: () => this.props.reset(),
          });

          setTimeout(() =>this.props.history.push("/login"), 2000)
        }
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
      

      loading = () => (
        <div className="animated fadeIn pt-1 text-center">Loading...</div>
      );

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


      handleSignup = (e) =>{
        e.preventDefault();
        this.props.signup(
          this.state.controls.name.value,
          this.state.controls.email.value,
          this.state.controls.password.value,
          this.state.controls.confirmPassword.value
        );
      }
    
    
    render() {
      console.log(this.props);
        const isInValid =
        this.state.controls.name.value === "" ||
        this.state.controls.email.value === "" ||
        this.state.controls.password.value === "" ||
        this.state.controls.confirmPassword.value === "";
  
      let formDataArray = [];
      for (let key in this.state.controls) {
        formDataArray.push({
          id: key,
          config: this.state.controls[key],
        });
      }
  
      let form = formDataArray.map((item) => {
        return (
          <CustomInput
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
        return (
        <Suspense fallback={this.loading()}>
        <div className="form-page flex-row align-items-center">
          <Container>
            <Row className="justify-content-center">
              <Col md="6">
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Register</h1>
                      <p className="text-muted">Create your account</p>
                      {form}
                      <Row  className="text-center">
                        <Col xs="12">
                          <Button
                            onClick={this.handleSignup}
                            disabled={isInValid}
                            className="px-4 btn-global"
                          >
                            Signup
                          </Button>
                        </Col>
                      </Row>
                      <Row  className="text-center" >
                        <Col xs="6" >
                          <Button
                            color="link"
                            onClick={(e) => {
                              this.props.history.push("/login");
                            }}
                            className="px-0"
                            active
                            tabIndex={-1}
                          >
                            Login
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
        )
    }
}

let mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    redirect: state.auth.redirect,
    msg: state.auth.message,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    signup: (eid, code, password, confirmPassword) =>
      dispatch(actions.sighUp(eid, code, password, confirmPassword)),
    reset: () => dispatch(actions.resetState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
