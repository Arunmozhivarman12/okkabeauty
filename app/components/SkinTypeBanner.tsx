'use client'

import { Col, Container, Row } from "react-bootstrap";
import banner from "./../../data/skintypeBanner.json"
import Image from "next/image";



export default function SkinType(){
    return(
        <>
        <Container className="mt-4 pt-1 ">
        <h2 className="fse-4 fw-4 text-center">YOUR SKIN TYPE</h2>
      <Row className="mt-3">
        
      {banner.map(type => (
        <Col lg={6} key={type.id} className="p-3">
        <div className="skintype-col"><Image src={type.url} alt="product-price" width={581} height={581} className="under-price "/></div>
        <p className="fst-italic fw-4 fse-5 mt-3 ">{type.content}</p>
        </Col>
      ))}
    
      </Row>
        </Container>
        </>
    )
}