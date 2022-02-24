import React from "react";

export default function Error(props) {
  return (
    <div
      className="alert alert-danger alert-dismissible fade show"
      role="alert"
    >
      {props.error.code + " - " + props.error.text}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}
