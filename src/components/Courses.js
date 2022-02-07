import React from "react";
import { Table } from "reactstrap";

const Courses = (props) => {
  return (
    <div>
      <Table bordered striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Provider</th>
          </tr>
        </thead>
        <tbody>
          {props.data &&
            props.data.length > 0 &&
            props.data.map((item) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.provider}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default Courses;
