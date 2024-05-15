import React from 'react'
import Sidebar from '../../components/Sidebar'
import { Col, Container, Row } from 'react-bootstrap'
import Navigationbar from '../../components/Navbar'

const Admindashboard = () => {
  return (
    <>
      <Container fluid>
        <Row>
           
          <center> <h1>ADMIN DASHBOARD</h1></center>
           <hr></hr>
        </Row>
        <Row>
          <Col sx={12} md={2}>
            {/* <Sidebar /> */}
          </Col>
          <Col sx={12} md={10}>
  
          </Col>
        </Row>
      </Container>
      {/* <Sidebar/> */}
    </>
  )
}

export default Admindashboard
