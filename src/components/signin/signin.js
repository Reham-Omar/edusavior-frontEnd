import React from 'react';
import { useState, useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon } from 'mdbreact';
import './signin.scss';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { Button, Form, Col, Row } from "react-bootstrap";
import Show from "../show/index"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Footer from '../footer/footer'
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import { Player } from 'video-react';


const Login = (props) => {

  const [user, setuser] = useState({});
  const [date, setDate] = useState(new Date());

  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.login(user.username, user.password);
    props.history.push('/')
  };
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
      />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" integrity="sha384-3AB7yXWz4OeoZcPbieVW64vVXEwADiYyAEhwilzWsLw+9FgqpyjjStpPnpBO8o8S" crossOrigin="anonymous"></link>

      <Navbar fixed="top" className="black" >

        <Nav className="mr-auto">

          <i class='fas fa-graduation-cap fa-pull-left fa-3x'></i>
          <p className="headeeer" className="animate__animated animate__pulse animate__infinite">EDUSAVIOR</p>

        </Nav>

        <Button className="vanbttn" variant="outline-info"><Link to="/signup" className="applya" >Apply Now</Link></Button>

      </Navbar>


      <div className="total">

        <img
          className="signpage"
          src="http://keenitsolutions.com/products/html/edulearn/edulearn-demo/images/slider/home3/slide1.jpg"
          alt="First slide"
        />
        <div className="divreg">
          <p className="get50">GET 50+ COURSES FREE ACCESS</p>
          <p className="now">REGISTERS NOW</p>
          <p className="animate__animated animate__fadeIn noow animate__infinite  ">Welcome to EDUSAVIOR</p>
        </div>
        {/* <div className="divclock">
          <h2 className="h2clock">It is {date.toLocaleTimeString()}.</h2>
        </div> */}
        <Form className="animate__animated animate__zoomIn signform " onSubmit={handleSubmit}>
          <span className="labeel">Sign in</span>
          <hr className="hrsign"></hr>

          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label className="signlabel" column sm={2}>
              Username
            </Form.Label>
            <Col className="signusername" sm={10}>
              <Form.Control type="text" placeholder="Username" name="username" onChange={handleChange} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label className="signlabel" column sm={2}>
              Password
            </Form.Label>
            <Col className="signpass" sm={10}>
              <Form.Control type="password" placeholder="Password" name="password"  onChange={handleChange} />
            </Col>

          </Form.Group>
          <Show condition={props.user === 'wrong password' || props.user === 'user not found'}>
            <span className="errorsign">* {props.user}</span>
          </Show>

          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button className="signlsubmit" type="submit">Sign in</Button>
            </Col>
          </Form.Group>
          <p className="account8">OR </p>

          <p className="account8">Sign In Using </p>
         
            <Col  className="vvv" sm={{ span: 10, offset: 2 }}>
              <Button className="signlsubmiiit" type="submit">Google</Button>
              <Button className="signlsubmiiit vvs" type="submit">Linked In</Button>
            </Col>
           
          <span className="account">don't have an account! <Link to="/signup">signup</Link></span>
        </Form>
      </div>

      <Container className="cont1">
        <img
          className="signsection"
          src="      http://keenitsolutions.com/products/html/edulearn/edulearn-demo/images/about/home7.jpg"
          alt="First slide"
        />
        <section className="int">

          <h5 className="intro1" >About Us</h5>
          <h2 className="intro2">WELCOME TO EDUSAVIOR</h2>
          <p className="intro3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eius to mod tempor incididunt ut labore et dolore magna aliqua. Ut enims ad minim veniam. Aenean massa. Cum sociis natoque penatibus et magnis dis partu rient to montes.Aene an massa. Cum sociis natoque penatibus. Ut enims ad minim veniam. Aenean massa. Aenean massa cum sociis natoque penatibus sed do eiusmod tempor.</p>
          <ul className="pb-400">
            <li className="pb-488">Trending Courses</li>
            <li className="pb-488">Certified Teaches</li>
            <li className="pb-488">Books & Libraries</li>
            <li className="pb-488">Online Course</li>
            <li className="pb-488">Students Portal</li>
            <li className="pb-488">Lab Facilities</li>
          </ul>
        </section>
      </Container>
      <div className="introoooo">

      <h2 className="intro4">EDUSAVIOR DEMO</h2>
      <hr className="hrsigggn"></hr>

      <Player
        playsInline
        poster="/assets/poster.png"
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        fluid={false}
        width={1100}
        height={500}      />
      </div>


        
      <ScrollUpButton />
      <Footer />
    </>

  );

}

export default withRouter(Login);
