
import './App.css';
import View from './components/View';
import Home from './components/Home';
import Logout from './components/Logout';
import Order from './components/Order';
import Add from './components/Add';
import Header from './components/Header';
import React from "react";
import { Navbar, Nav, Container, Row, Col, Card } from "reactstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";



function App() {

  
  return (
    <BrowserRouter>
    
    <div class="main">
    </div>
      <div>
        <>
        <Card>
        <div><Header/></div>
        </Card>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="logo">FROZENCUP |</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  HOME
                </Nav.Link>
                <Nav.Link as={Link} to="/add">
                  ADDPRODUCT
                </Nav.Link>
                <Nav.Link as={Link} to="/view">
                  VIEWPRODUCT
                </Nav.Link>
                <Nav.Link as={Link} to="/order">
                  ORDERS
                </Nav.Link>
                
                
              </Nav>
              <Nav.Link href="/logout">LOGOUT</Nav.Link>
            </Container>
            
          </Navbar>
        </>
        <div>
        
        <Container>
        <Row>
        <Col md={12}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/order" element={<Order />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/view" element={<View />} />
          </Routes>
        </Col>
        </Row>
        
        </Container>
        
        </div>
        <div>
          
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
