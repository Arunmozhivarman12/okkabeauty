'use client'

import { Col, Container, Row } from "react-bootstrap";
import brands from "./../../data/brands-banner.json"
import Image from "next/image";



export default function Trending(){
    return(
        <>
        <Container className="mt-4 pt-1 ">
      <h2 className="fse-4 fw-4 text-center">TRENDING BRANDS</h2>
      <Row className="mt-3">
        
      {brands.map(brand => (
        <Col lg={6} key={brand.id} className="p-1">
        <Image src={brand.url} alt="trending-brands" width={625} height={300} className="trending-brands"/>
        </Col>
      ))}
    
      </Row>
        </Container>
        </>
    )
}