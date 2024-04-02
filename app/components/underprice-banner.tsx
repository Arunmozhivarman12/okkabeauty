'use client'

import { Col, Container, Row } from "react-bootstrap";
import banner from "./../../data/products-under.json"
import Image from "next/image";



export default function Price(){
    return(
        <>
        <Container className="mt-4 pt-1 ">
      <Row className="mt-3">
        
      {banner.map(brand => (
        <Col lg={6} key={brand.id} className="p-1">
        <Image src={brand.url} alt="product-price" width={581} height={581} className="under-price p-2"/>
        </Col>
      ))}
    
      </Row>
        </Container>
        </>
    )
}