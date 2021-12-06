import React from 'react'
import Filter from '../Filter/Filter.js';
import {Navbar , Container , Nav } from 'react-bootstrap';



const Navbarr = ({title, setTitle , rate , setRate}) => {
 


  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Movie App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Movies Kids</Nav.Link>
              <Nav.Link href="#action2">Movies Action</Nav.Link>
              <Nav.Link href="#action1">Movies Comdey</Nav.Link>
              <Nav.Link href="#action2">Movies Adventure</Nav.Link>
            </Nav>
            <Filter title={title} setTitle={setTitle} rate={rate} setRate={setRate} />
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}

export default Navbarr
