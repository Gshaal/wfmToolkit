import React from "react";
import { Input, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";
import moment from "moment";

const CustomInput = (props) => {
  let inputElement = null;

  switch (props.elementType) {
    case "input":
      inputElement = (
        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              {!props.icon ? (
                <i className={props.elementConfig.icon} style={{height:"100%"}}></i>
              ) : (
                props.elementConfig.icon
              )}
            </InputGroupText>
          </InputGroupAddon>
          <Input
            onKeyDown={props.keyup}
            {...props.elementConfig}
            onChange={props.changed}
            autoComplete="on"
            value={props.value}
            required
            invalid={
              props.invalid && props.shouldValidate && props.triggired
                ? true
                : false
            }
            valid={!props.invalid && props.triggired ? true : false}
          />
        </InputGroup>
      );
      break;
    case "date":
      inputElement = (
        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              {!props.icon ? (
                <i className={props.elementConfig.icon}></i>
              ) : (
                props.elementConfig.icon
              )}
            </InputGroupText>
          </InputGroupAddon>
          <Input
            onKeyDown={props.keyup}
            {...props.elementConfig}
            onChange={props.changed}
            autoComplete="on"
            value={props.value ? moment(props.value).format("YYYY-MM-DD") : ""}
            required
            invalid={
              props.invalid && props.shouldValidate && props.triggired
                ? true
                : false
            }
            valid={!props.invalid && props.triggired ? true : false}
          />
        </InputGroup>
      );
      break;

    case "dropdown":
      inputElement = (
        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              {!props.icon ? (
                <i className={props.elementConfig.icon}></i>
              ) : (
                props.elementConfig.icon
              )}
            </InputGroupText>
          </InputGroupAddon>
          <Input
            {...props.elementConfig}
            value={props.value}
            type="select"
            onChange={props.changed}
          >
            <option></option>
            {props.data ? (
              props.data.map((item) => (
                <option key={item.key} value={item.text}>
                  {item.text}
                </option>
              ))
            ) : (
              <option></option>
            )}
          </Input>
        </InputGroup>
      );
      break;

    default:
      inputElement = (
        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              {!props.icon ? (
                <i className={props.elementConfig.icon}></i>
              ) : (
                props.elementConfig.icon
              )}
            </InputGroupText>
          </InputGroupAddon>
          <Input
            onKeyDown={props.keyup}
            {...props.elementConfig}
            onChange={props.changed}
            autoComplete="on"
            value={props.value}
            required
            invalid={
              props.invalid && props.shouldValidate && props.triggired
                ? true
                : false
            }
            valid={!props.invalid && props.triggired ? true : false}
          />
        </InputGroup>
      );
  }

  return inputElement;
};
//https://reactdatepicker.com/
export default CustomInput;
