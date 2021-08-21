import React from "react";
import { Button } from "reactstrap";
import "./Paginator.css";

const paginator = (props) => (
  <div className="paginator" id="style-4">
    {props.children}
    <div className="paginator__controls">
      {props.currentPage > 1 && (
        <Button
          className="paginator__control"
          outline
          color="primary"
          onClick={props.onPrevious}
        >
          Previous
        </Button>
      )}
      {props.currentPage < props.lastPage && (
        <Button
          className="paginator__control"
          outline
          color="primary"
          onClick={props.onNext}
        >
          Next
        </Button>
      )}
    </div>
  </div>
);

export default paginator;
