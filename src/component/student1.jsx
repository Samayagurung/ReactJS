import React from 'react'
import Table from 'react-bootstrap/Table';

const Student1=({studentX})=> {
  const tableHeader = Object.keys(studentX[0])
  const displayObjectData=(data)=>{
    return (
      <Table bordered>
        <tbody>
          {Object.keys(data).map((item,index)=>{
            return(
              <tr key={index}>
                <td>{item}</td>
                <td>
                  {typeof data[item] === "object" ? displayObjectData(data[item]): data [item]}
                </td>
              </tr>
            )
          })}
        </tbody>

      </Table>
    )
  }

  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        {tableHeader.map((header)=>{
          return <th key={header}>{header.toUpperCase()}</th>
        })}
      </tr>
    </thead>
    <tbody>
      {studentX.map((student,index)=>{
        return(
          <tr key={student.id}>
            {Object.values(studentX[index]).map((value)=>{
              return (
                <td key={value}>
                  {typeof value === "object" ? displayObjectData(value): value}
                </td>
              )
            })}
          </tr>
        )
      })}

      </tbody>
      </Table>
  )
}

export default Student1;