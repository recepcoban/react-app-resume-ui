import React from "react";
import { Table } from "reactstrap";

export default function SocialMedias(props) {
  return (
    <div>
      <Table bordered striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Type</th>
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
                  <td>{item.type}</td>
                  <td>{item.url}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}
