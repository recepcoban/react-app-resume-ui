import React from "react";
import { Spinner } from "reactstrap";

export default function Spinners() {
  const spin = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "dark",
  ];

  return (
    <div className="text-center">
      {spin.map((s) => {
        return (
          <Spinner key={s} color={s} type="grow">
            {" "}
          </Spinner>
        );
      })}
    </div>
  );
}
