import { Col, Container, Row } from "react-bootstrap";
import whyusdata from "../../data/whyus.json"
import Image from "next/image";




export default function Whyus() {
    return (
        <Container className="mt-3">
            <h2 className="fse-4 fw-4 text-center pb-5">WHY US</h2>
            <Row className="mt-5 mb-5 pb-3">
                {whyusdata.map((data) => (
                    <Col key={data.id}>
                        <div className="whyus-div p-2 border-border">
                            <div className="whyus-circle bg-grey"> <Image src={`/public/${data.image}`} width={40} height={40} alt="reason" className="d-block m-auto" /></div>
                            <h2 className="fse-5 fw-4 text-center mt-5">{data.head}</h2>
                            <p className="fse-7 text-center mt-3 text-grey2">{data.tagline}</p>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}