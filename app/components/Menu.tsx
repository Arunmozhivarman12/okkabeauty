'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { Col, Container, Row, Nav, Navbar, NavDropdown } from "react-bootstrap";



export default function Menu({ menudata, Branddata }: any) {

  const [showChild, setShowChild] = useState(false)


  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }

  const Allparent = menudata.filter((menu: any) => menu.parent === 0);
  const primaryMenu = Allparent.filter((menu: any) => menu.title.rendered !== "BRANDS");

  const Brands = Allparent.filter((menu: any) => menu.title.rendered === "BRANDS")

  const isDropdown = (menu: any) => {
    return menudata.some((obj: any) => obj.parent === menu.id)

  }

  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {primaryMenu.map((menu: any) => (
                <NavDropdown title={`${menu.title.rendered}`} id="basic-nav-dropdown" key={menu.id} className="ms-4 me-4 dropdown-1 fse-6 fw-3" renderMenuOnMount={true}>
                  {menudata.filter((fmenu: any) => fmenu.parent === menu.id).map((menu2: any) => (<div  key={menu2.id} className="ditem-1 text-black fse-6 fw-2">
                    {isDropdown(menu2) ? (
                      <NavDropdown title={`${menu2.title.rendered}`} id="basic-nav-dropdown" renderMenuOnMount={true} className="dropdown-2 fse-6 ps-3 pt-1 pb-1">
                        {menudata.filter((fmenu: any) => fmenu.parent === menu2.id).map((menu3: any) => (
                          <NavDropdown.Item href="/" key={menu3.id} className="fse-6">{menu3.title.rendered}</NavDropdown.Item>
                        ))}
                      </NavDropdown>
                   ) : (<NavDropdown.Item href="/">{menu2.title.rendered}</NavDropdown.Item>)}
                  </div>))}
                </NavDropdown>
              ))}
              {Brands.map((Brand: any) => (
                <NavDropdown title={Brand.title.rendered} key={Brand.id} id="basic-nav-dropdown" className="ms-4 me-4 dropdown-1 brand-dropdown fse-6 fw-3" renderMenuOnMount={true}>
                  <Row>
                    {menudata.filter((menu: any) => menu.parent === Brand.id).map((submenu: any) => (
                      <Col lg={2} className="mb-3" key={submenu.id}>
                        <h6 className="fse-6 text-left ms-4">{submenu.title.rendered}</h6>
                        {menudata.filter((fmenu: any) => fmenu.parent === submenu.id).map((menu3: any) => (
                          <div key={menu3.id}><NavDropdown.Item href="/" className="fse-8">{menu3.title.rendered}</NavDropdown.Item></div>
                        ))}
                      </Col>
                    ))}
                    {Branddata.filter((menu: any) => menu.parent === Brand.id).map((submenu: any) => (
                      <Col lg={2} className="mb-3" key={submenu.id}>
                        <h6 className="fse-6 text-left ms-4">{submenu.title.rendered}</h6>
                        {Branddata.filter((fmenu: any) => fmenu.parent === submenu.id).map((menu3: any) => (
                          <div key={menu3.id}><NavDropdown.Item href="/" className="fse-8">{menu3.title.rendered}</NavDropdown.Item></div>
                        ))}
                      </Col>
                    ))}
                  </Row>
                </NavDropdown>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}