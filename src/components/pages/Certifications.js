import React from "react";
import { Table } from "reactstrap";

export default function Certifications(props) {
  return (
    <div>
      <Table bordered striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Provider</th>
            <th>URL</th>
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
                  <td>{item.url}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}
