import React from 'react'
import {Card, CardBody, CardHeader, CardImg, CardFooter} from "react-bootstrap"


const Product=(props)=>{
  return (
    <>
     {props.products.map((product)=>{
      return(
        <Card key={product.id}>
        <CardHeader>
          <h2>{product.title}</h2>
        </CardHeader>
        </Card>
      )
     })}
    </>
  )
}

export default Product;