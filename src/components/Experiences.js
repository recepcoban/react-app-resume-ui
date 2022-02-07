import React from "react";
import { Table } from "reactstrap";

const Experiences = (props) => {
  return (
    <div>
      <Table bordered striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Start</th>
            <th>End</th>
            <th>Employer</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {props.data &&
            props.data.length > 0 &&
            props.data.map((item) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.startDate}</td>
                  <td>{item.endDate}</td>
                  <td>{item.employer}</td>
                  <td>{item.position}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default Experiences;
