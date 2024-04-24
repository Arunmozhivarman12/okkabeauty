import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { BiSolidNavigation } from "react-icons/bi";
import { FaMobileAlt } from "react-icons/fa";






export default function Footer() {
    return (
        <>
        <Container fluid className="footer pt-4 pb-5">
            <Container className="mt-2">
                <Row>
                    <Col>
                        <Image src={"https://www.okkabeauty.com/wp-content/uploads/2022/04/Black.svg"} alt={"logo"} width={160} height={80} className="logo" priority />
                        <p className="fse-7 mt-3 text-theme">Okka Beauty Trading Co. LLC</p>
                        <ul className="fse-7 mt-3 text-theme ms-0 ps-0 lh-3">
                            <li><BiSolidNavigation className="me-1 fse-6" />
                                Office #12, 17th Floor, Bayswater Tower, Marasi Drive, Business Bay, Dubai, UAE</li>
                            <li><FaMobileAlt className="me-1 fse-6" />
                                Phone:+971 4328 2338</li>
                        </ul>
                    </Col>
                    <Col>
                        <Image src={"https://www.okkabeauty.com/wp-content/uploads/2021/06/VOGUE-LOGO-BLACK.png"} alt={"logo"} width={160} height={80} className="logo d-block m-auto" priority />
                        <h3 className="fse-5 fw-4 lh-4 mt-3">SIGN UP FOR NEWSLETTER AND GET 10% DISCOUNT</h3>
                        <form>
                            <label className="mt-3 fse-7">Name (required)</label><br />
                            <input type="text" required className="border-border p-2 w-100" /><br />
                            <label className="mt-4 fse-7">Phone (required)</label><br />
                            <input type="tel" required className="border-border p-2 w-100" /><br />
                            <label className="mt-4 fse-7">Email (required)</label><br />
                            <input type="email" required className="border-border p-2 w-100" /><br />
                            <button className="form-btn border-transparent fse-7 fw-3 mt-4 mb-3">SIGNUP</button><br />

                        </form>
                    </Col>
                    <Col lg={2}>
                        <h3 className="fse-5 lh-4">CATEGORIES</h3>
                        <ul className="fse-6 mt-3 text-theme ms-0 ps-0 lh-2">
                            <li><Link href="#" className="text-theme">BEAUTY</Link></li>
                            <li><Link href="#" className="text-theme">CLOTHING</Link></li>
                            <li><Link href="#" className="text-theme">ACCESORIES</Link></li>
                            <li><Link href="#" className="text-theme">BAGS</Link></li>
                            <li><Link href="#" className="text-theme">SHOES</Link></li>
                        </ul>
                    </Col>
                    <Col lg={2}>
                        <h3 className="fse-5 lh-4">USEFUL LINKS</h3>
                        <ul className="fse-6 mt-3 text-theme ms-0 ps-0 lh-2">
                            <li><Link href="#" className="text-theme">About Us</Link></li>
                            <li><Link href="#" className="text-theme">Contact Us</Link></li>
                            <li><Link href="#" className="text-theme">Okka Magazine</Link></li>
                            <li><Link href="#" className="text-theme">Okka Journal</Link></li>
                        </ul>

                    </Col>
                    <Col lg={2}>
                        <h3 className="fse-5 lh-4">TERMS & POLICY</h3>
                        <ul className="fse-6 mt-3 text-theme ms-0 ps-0 lh-2">
                            <li><Link href="#" className="text-theme">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-theme">Cookie Policy</Link></li>
                            <li><Link href="#" className="text-theme">Refunds & Return Policy</Link></li>
                            <li><Link href="#" className="text-theme">Shipping Policy</Link></li>
                            <li><Link href="#" className="text-theme">Terms and Conditions</Link></li>
                            <li><Link href="#" className="text-theme">Disclaimer</Link></li>
                        </ul>

                    </Col>
                </Row>
            </Container>
        </Container>
        <Container fluid className="pt-4 pb-2 bt-border footer"><p className="text-theme fse-6 pb-0 text-center">All Rights Reserved Okka Beauty Trading Co. LLC 2020</p></Container>
        </>
    )
}