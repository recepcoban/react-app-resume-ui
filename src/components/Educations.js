import React from "react";
import { Table } from "reactstrap";

const Educations = (props) => {
  return (
    <div>
      <Table bordered striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Start</th>
            <th>End</th>
            <th>School</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {props.data &&
            props.data.length > 0 &&
            props.data.map((item) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.startYear}</td>
                  <td>{item.endYear}</td>
                  <td>{item.schoolName}</td>
                  <td>{item.departmentName}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default Educations;
