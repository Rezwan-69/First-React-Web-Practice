import React from 'react'
import "./banner.css";
import {Container ,Row,Col } from 'react-bootstrap';
import p1 from "../../assets/1.jpg"
import p2 from "../../assets/2.jpg"
import p3 from "../../assets/3.jpg"

const Banner = () => {
  return (
    <div className='Banner'>
      <Container>
        <Row>
          <Col lg={4}>
          <div className="Box">
            <img src={p1} alt="" />
          </div>
          </Col>
          <Col lg={4}>
          <div className="Box">
          <img src={p2} alt="" />
          </div>
          </Col>
          <Col lg={4}>
          <div className="Box">
          <img src={p3} alt="" />
          </div>
          </Col>
          
        </Row>
      </Container>
      
    </div>
  )
}

export default Banner