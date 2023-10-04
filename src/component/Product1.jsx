import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Product1 = ({ productX }) => {
  return (
    <>
    <div className="card-container d-flex flex-wrap gap-2 justify-content-center">
    {productX.map((item, index) => {
        return (
          <Card key={index} style={{ width: "18rem" ,height:"25rem"}}>
            <Card.Img variant="top" src={item.thumbnail} style={{height:"10rem"}} />
            <Card.Body>
              <Card.Title>{item.title.length > 10? item.title.slice(0,9)+"...":item.title}</Card.Title>
              <Card.Text>
                {item.description.length > 50? item.description.slice(0,49)+"...": item.description}
              </Card.Text>
              <Button variant="primary">View</Button>
              <Button variant="success">Edit</Button>
              <Button variant="danger">Delete</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
      
    </>
  );
};

export default Product1;
