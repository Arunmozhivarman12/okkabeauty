import { Col, Container, Row,Nav,Navbar,NavDropdown } from "react-bootstrap";
import { RiFacebookFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { BiLogoPinterest, BiLogoLinkedin } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";


import Image from "next/image";
import Menu from "./Menu";





async function fetchMenu() {
    const siteUrl = process.env.WORDPRESS_SITE_URL;
    const username = process.env.REST_API_USERNAME;
    const password = process.env.REST_API_PASSWORD;

    const res = await fetch(`${siteUrl}/wp-json/wp/v2/menu-items?menus=1213&_fields=title,id,parent`, {
        cache: 'no-store',
        headers: {
            Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`
        }

    })
    const data = await res.json();
    return data;
}

async function fetchBrand() {
    const siteUrl = process.env.WORDPRESS_SITE_URL;
    const username = process.env.REST_API_USERNAME;
    const password = process.env.REST_API_PASSWORD;

    const res = await fetch(`${siteUrl}/wp-json/wp/v2/menu-items?menus=1213&page=2&_fields=title,id,parent`, {
        cache: 'no-store',
        headers: {
            Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`
        }

    })
    const data = await res.json();
    return data;
}



export default async function Header() {

    const MenuDataPromise =  fetchMenu();
    const BrandDataPromise =  fetchBrand();

    const [MenuData,BrandData] = await Promise.all([MenuDataPromise,BrandDataPromise])
    

    return (
        <>
            <Container fluid className="bg-Primary">
                <Container >
                    <Row className="align-center pt-1 pb-1">
                        <Col lg={5} className="fse-7 p-0">
                            Free shipping on orders AED200+ | Regular shipping fee AED20+ UAE Only.
                        </Col>
                        <Col lg={4} className="search-form">
                            <IoSearchOutline className="search-icon fse-4 text-secondary" />
                            <input placeholder="Search for products" className="fse-7 p-2 border-white pe-3 " />
                        </Col>
                        <Col lg={3} className="justify-content-end d-flex align-center ps-0 pe-0">
                            <RiFacebookFill className="me-2" /><IoLogoInstagram className="me-2" /><BiLogoPinterest className="me-2" /><BiLogoLinkedin className="me-4" />
                            <select className="fse-7 p-2 border-gre1 bg-transparent pe-5">
                                <option>English</option>
                                <option>Arabic</option>
                            </select>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container className="pt-2 pb-2 ps-0 pe-0">
                <Row className="justify-content-center align-center">
                    <Col lg={2}>
                        <Image src={"https://www.okkabeauty.com/wp-content/uploads/2022/04/Black.svg"} alt={"logo"} width={160} height={80} className="logo" priority />
                    </Col>
                    <Col className="ps-0 pe-0 d-flex justify-content-center align-center" lg={7}>
                    <Menu menudata={MenuData} Branddata={BrandData}/>
                    
                    </Col>
                    <Col className="ps-0 pe-0 d-flex justify-content-end align-center" lg={3}>
                    <span className="text-black fse-7">LOGIN / REGISTER</span>
                    <IoMdHeartEmpty className="ms-3 fse-m text-black"/>
                    <HiOutlineShoppingBag className="ms-3 fse-m text-black"/>
                    <span className="ms-3 fse-6 text-black fw-3">0.00 AED</span>
                    </Col>
                </Row>
            </Container>
        </>
    )
}