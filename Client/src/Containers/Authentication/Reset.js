import React, { Component, Suspense } from "react";
import CustomInput from "../../Components/UI/Input";
import { Button, Card, CardBody, Col, Container, Form, Row } from "reactstrap";
import "./style.css";
import Axios from '../../hoc/Axios'
import { toast } from "react-toastify";
export default class Reset extends Component {
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
    loading:false,
    error:false,
    message:null
  };

  componentDidUpdate(){
    if(this.state.error && this.state.message != null){
      toast.error(this.state.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onOpen: () => this.setState(prevStat=> {return {...prevStat,error:false,message:null}})
        });
    }
  
    if(!this.state.error && this.state.message != null){
      toast.success(this.state.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onOpen: () => this.setState(prevStat=> {return {...prevStat,error:false,message:null}})
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

  handleReset = (e)=> {
    e.preventDefault()
    let payload = {
      email:this.state.controls.email.value,
      password:this.state.controls.password.value,
      confirmPassword:this.state.controls.confirmPassword.value
    }

  Axios.post('/auth/reset/',payload).then(res=>{
    if(res.status === 200){
      this.setState(prevStat=>{
        return{
          ...prevStat,
          message:res.data.message
        }
      })
    }
    this.props.history.push('/login')
  }).catch(err=>{
    this.setState(prevStat=>{
      return{
        ...prevStat,
        error:true,
        message:err.response.data.message
      }
    })
  })
  }

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  render() {
    const isInValid =
      this.state.controls.email.value === "" ||
      this.state.controls.password.value === "" || this.state.controls.confirmPassword.value === "";

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
                      <h1>Password Reset</h1>
                      <p className="text-muted">Sign In to your account</p>
                      {form}
                      <Row className="text-center">
                        <Col xs="12">
                          <Button
                           onClick={this.handleReset}
                            disabled={isInValid}
                            className="px-4 btn-global"
                          >
                            Reset
                          </Button>
                        </Col>
                      </Row>
                      <Row className="text-center">
                        <Col xs="6">
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
                              this.props.history.push("/login");
                            }}
                            active
                            tabIndex={-1}
                            className="px-0"
                          >
                           Login
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
