import React from 'react';
import { useEffect, useState } from 'react';
import Show from '../show/index'
import cookie from 'react-cookies';
import useCoursses from '../../hooks/coursses/coursses';

// import cookie from 'react-cookies';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Row, Toast } from 'react-bootstrap';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Image from 'react-bootstrap/Image';
import { Link, NavLink  ,withRouter} from 'react-router-dom';
import Popover from 'react-bootstrap/Popover';

import '../../components/classes/classes.scss';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';


const Classes = (props) => {
  const [allcourses, getCoursses, addCourses, addToDashboard, getCoursesFromDashboard, dashboardCourses, delteCourse, toggleShow, deleteCourseFromCourses] = useCoursses(props.token);
  const user = cookie.load('user');


    useEffect(getCoursses, []);
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    const handleAddCourse = (id) =>{
      addToDashboard(id);
      props.history.push('/dashboard');
    }




  return (

    <>

      <div className="classes">

        <div className="buttonclasses">
          <h3 className="CLASSES">
            OUR CLASSES
      </h3>
          <Show className="showClasses" condition={props.user.role === 'instructor'}>
            <NavLink className="navLinkClasses" to="/addcourse">Add Course </NavLink>

          </Show>
        </div>
        <hr className="hrrrdash"></hr>
        <Container className="dash">

          {allcourses.map(item => {
            return (
              <Card className="imageclasses" style={{ width: '18rem' }} key={item._id}>
                <Card.Img variant="top" src={item.img_url} />
                <Card.Body>
                  <section id="classheight">
                    <Show condition={user.username === item.instructor}>

                      <button className="deleteclass" onClick={() => deleteCourseFromCourses(item._id)}><i class="fas fa-trash-alt"></i></button>
                    </Show>
                    <Card.Text className="subj1">
                      {item.subject}
                    </Card.Text>
                    <Card.Title className="couresclasses" ><span>{item.course_name}</span>
                    </Card.Title>
                  </section>
                  <Card.Text >
                    <span className="spanpar">Course duration: </span>  {item.literature_time}
                  </Card.Text>
                  <Card.Text >
                    <span className="spanpar"> Instructor name:</span> {item.instructor}
                  </Card.Text>
                  {/* <Collapse className="textclasses" in={item.show}>
                    <div className={`show-${item.show.toString()}`} id="example-collapse-text">
                      {item.description}
                    </div>

                  </Collapse> */}
                  <p className="textclasses1"><span className="spanpar">Course description:</span><br></br> <span className="des1">{item.description} </span></p>
                <Button className="adtodashbtn" onClick={()=> handleAddCourse(item._id) }>Enroll Now</Button>
          <br></br>

                </Card.Body>

               </Card>
            )
          })}

        </Container>
      </div>
      <div>
        <ScrollUpButton />

      </div>

      </>
      
    );
    };
    
    
export default withRouter(Classes);

