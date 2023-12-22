import React from 'react'
import { Container, Nav, NavDropdown } from 'react-bootstrap'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Notebooks</Nav.Link>
            <Nav.Link href="#pricing">Monitores</Nav.Link>
          </Nav>
          {/*<Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
        </Nav>*/}
        <Nav>
            <CartWidget/>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbar