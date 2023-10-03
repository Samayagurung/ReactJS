import React from "react";
import Table from "react-bootstrap/Table";

function Student({ students }) {
  const tableHeader = Object.keys(students[0]);
  return (
    <>
      <div className="container" style={{ overflowX: "auto" }}>
        Students
        <Table striped bordered hover>
          <thead>
            <tr>
              {tableHeader.map((header) => {
                return <th key={header}>{header.toUpperCase()}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {students.map((data, i) => {
              return (
                <tr key="i">
                  <td>{data.id}</td>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>{data.maidenName}</td>
                  <td>{data.age}</td>
                  <td>{data.gender}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>{data.username}</td>
                  <td>{data.password}</td>
                  <td>{data.birthDate}</td>
                  <td>{data.image}</td>
                  <td>{data.bloodGroup}</td>
                  <td>{data.height}</td>
                  <td>{data.weight}</td>
                  <td>{data.eyeColor}</td>
                  <td>{data.eyeColor}</td>
                  <td>{data.domain}</td>
                  <td>{data.ip}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Student;
