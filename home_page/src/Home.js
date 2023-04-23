
import React, { useRef } from "react"; 
import { Container, Row, Col,ListGroup, ListGroupItem } from "reactstrap";
// import { Container } from "reactstrap"; 
import HomeCSS from './Home.module.css';

import heroImg from "./assests/images/success.svg";

import aboutImg from "./assests/images/about_us11.svg";import CountUp from "react-countup";

import chooseImg from "./assests/images/choose_us12.svg";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser} from '@fortawesome/free-solid-svg-icons'
import arrowImg from "./assests/images/down.svg";
// import { icon } from "@fortawesome/fontawesome-svg-core";

const navLinks = [ 
  { 
    display: "Home", 
    url: "#", 
  }, 
  { 
    display: "About", 
    url: "#", 
  }, 
 
  { 
    display: "Courses", 
    url: "#", 
  }, 
  { 
    display: "Pages", 
    url: "#", 
  }, 
  { 
    display: "Blog", 
    url: "#", 
  }, 
]; 
const FeatureData = [  {
    title: "Aadhar Card",    desc: "Bank Passbook",  },
  {
    title: "10th Marks Card",    desc: "12th Marks Card",
    icon: "faHeart",  },
  {
    title: "Cast and Income Certificate",    desc: "BE Marks Card",
    icon: "faPhone",  },
];
const footerQuickLinks = [  {
    display: "Home",    url: "#",
  },  {
    display: "About US",    url: "#",
  },
  {    display: "Courses",
    url: "#",  },
  {
    display: "Blog",    url: "#",
  },];
const footerInfoLinks = [
  {
    display: "Privacy Policy",    url: "#",
  },  {
    display: "Membership",    url: "#",
  },
  {    display: "Purchases Guide",
    url: "#",  },
  {
    display: "Terms of Service",    url: "#",
  },];

const Home = () => { 
  const menuRef = useRef(); 
 
  const menuToggle = () => menuRef.current.classList.toggle("active__menu"); 

//   const CourseCard = (props) => {  const { imgUrl, title, lesson, students, rating } = props.item;
 
  return ( 
    <div>
    <header className={HomeCSS.header}> 
      <Container> 
        <div className="navigation d-flex align-items-center justify-content-between"> 
          <div className="logo"> 
            <h2 className=" d-flex align-items-center gap-1"> 
              <i class="ri-pantone-line"></i> GradPeny
            </h2> 
          </div> 
 
          <div className="nav d-flex align-items-center gap-5"> 
            <div className={HomeCSS.nav__menu} ref={menuRef} onClick={menuToggle}> 
              <ul className={HomeCSS.nav__list}> 
                {navLinks.map((item, index) => ( 
                  <li key={index} className={HomeCSS.nav__item}> 
                    <a href={item.url}>{item.display}</a> 
                  </li> 
                ))} 
              </ul> 
            </div> 
 
            <div className={HomeCSS.nav__right}> 
              <p className="mb-0 d-flex align-items-center gap-2"> 
                <i class="ri-phone-line"></i> 
              </p> 
            </div> 
          </div> 
 
          <div className={HomeCSS.mobile__menu}> 
            <span> 
              <i class="ri-menu-line" onClick={menuToggle}></i> 
            </span> 
          </div> 
        </div> 
      </Container> 
    </header>
    {/* <div className={HomeCSS.spacer}> */}
    <section className={HomeCSS.spacer}>
    <Container> 
        <Row> 
          <Col lg="6" md="6"> 
            <div className={HomeCSS.hero__content}> 
              <h1 className="mb-4 hero__title">Unlock your potential with <br/>GradPeny scholarship! 
 
              </h1> 
              <p className="mb-5"> 
              <h5>Apply for scholarships with ease on our website<br/></h5> where we provide you comprehensive information and guidance to make your application stand out.  
               quas officiis et repellat! 
              </p> 
            </div> 
            <div className={HomeCSS.search}> 
              
              <button className={HomeCSS.btn}>Apply Now</button> 
            </div> 
          </Col> 
 
          <Col lg="6" md="6"> 
            <img src={heroImg} alt="" className="w-100 h-75 hero__img" /> 
          </Col> 
        </Row> 
      </Container> 
    </section>
    {/* </div> */}
    {/* <section>
    <Container> 
        <Row> 
          <Col lg="2" md="3" sm="4" xs="6"> 
            <h3 className=" d-flex align-items-center gap-1"> 
              <i class="ri-vimeo-line"></i> Vimeo 
            </h3> 
          </Col> 
 
          <Col lg="2" md="3" sm="4" xs="6"> 
            <h3 className=" d-flex align-items-center gap-1"> 
              <i class="ri-pinterest-line"></i> Pinterest 
            </h3> 
          </Col> 
 
          <Col lg="2" md="3" sm="4" xs="6"> 
            <h3 className=" d-flex align-items-center gap-1"> 
              <i class="ri-dribbble-line"></i> Dribble 
            </h3> 
          </Col> 
 
          <Col lg="2" md="3" sm="4" xs="6"> 
            <h3 className=" d-flex align-items-center gap-1"> 
              {" "} 
              <i class="ri-apple-fill"></i> Apple 
            </h3> 
          </Col> 
 
          <Col lg="2" md="3" sm="4" xs="6"> 
            <h3 className=" d-flex align-items-center gap-1"> 
              {" "} 
              <i class="ri-finder-fill"></i> Finder 
            </h3> 
          </Col> 
 
          <Col lg="2" md="3" sm="4" xs="6"> 
            <h2 className=" d-flex align-items-center gap-1"> 
              {" "} 
              <i class="ri-google-fill"></i> Google 
            </h2> 
          </Col> 
        </Row> 
      </Container> 
    </section> */}
    {/* <div className={HomeCSS.spacer}> */}
    <section>
    <Container> 
        <Row> 
          <Col lg="6" md="6"> 
            <div className={HomeCSS.about__img}> 
              <img src={aboutImg} alt="" className="w-100" /> 
            </div> 
          </Col> 
 
          <Col lg="6" md="6"> 
            <div className={HomeCSS.about__content}> 
              <h1>About <span>GradPeny</span></h1> 
              <p> 
              RRSF identifies children who performed extraordinarily well in academics and who are bright and deserving yet came from a low-income home.  
              The scholarship is given and the student's journey starts when a facilitator confirms their financial necessity. 
              </p> 
 
              <div className={HomeCSS.about__counter}> 
                <div className=" d-flex gap-5 align-items-center"> 
                  <div className="single__counter"> 
                    <span className={HomeCSS.counter}> 
                      <CountUp start={0} end={25} duration={2} suffix="K" /> 
                    </span> 
 
                    <p className={HomeCSS.counter__title}>Number of Applicants</p> 
                  </div> 
 
                  <div className="single__counter"> 
                    <span className={HomeCSS.counter}> 
                      <CountUp start={0} end={12} duration={2} suffix="M" /> 
                    </span> 
 
                    <p className={HomeCSS.counter__title}>Benifited students</p> 
                  </div> 
                </div> 
 
                <div className=" d-flex gap-5 align-items-center"> 
                  <div className="single__counter"> 
                    <span className={HomeCSS.counter}> 
                      <CountUp start={0} end={95} duration={2} suffix="M" /> 
                    </span> 
 
                    <p className={HomeCSS.counter__title}>Foundation</p> 
                  </div> 
 
                  <div className="single__counter"> 
                    <span className={HomeCSS.counter}> 
                      <CountUp start={0} end={5} duration={2} suffix="K" /> 
                    </span> 
 
                    <p className={HomeCSS.counter__title}>District</p> 
                  </div> 
                </div> 
              </div> 
            </div> 
          </Col> 
        </Row> 
      </Container> 
    </section>
    {/* <div className="single__course__item"> 
      <div className="course__img"> 
        <img src={imgUrl} alt="" className="w-100" /> 
      </div> 
 
      <div className="course__details"> 
        <h6 className="course__title mb-4">{title}</h6> 
 
        <div className=" d-flex justify-content-between align-items-center"> 
          <p className="lesson d-flex align-items-center gap-1"> 
            <i class="ri-book-open-line"></i> {lesson} Lessons 
          </p> 
 
          <p className="students d-flex align-items-center gap-1"> 
            <i class="ri-user-line"></i> {students}K 
          </p> 
        </div> 
 
        <div className=" d-flex justify-content-between align-items-center"> 
          <p className="rating d-flex align-items-center gap-1"> 
            <i class="ri-star-fill"></i> {rating}K 
          </p> 
 
          <p className="enroll d-flex align-items-center gap-1"> 
            <a href="#"> Enroll Now</a> 
          </p> 
        </div>  course section is not added*/}
      {/* </div> 
    </div> */}
    {/* // </div>  */}
    <section> 
      <Container> 
        <Row> 
          <Col lg="6" md="6"> 
          <div>
            <div className={HomeCSS.choose__content}> 
              <h1>Why Choose Us</h1> 
              <p> 
              We are dedicated to providing financial assistance to students from
              backward classes who are pursuing their academic and career goals. 
              Our scholarship program aims to support students who may face 
              financial obstacles in achieving their dreams. Our application 
              process is simple and easy to follow. We provide comprehensive 
              information and guidance to help you make your application stand out.
              </p> 
              </div>
            </div> 
            </Col>
            <Col lg="6" md="6"> 
            <div className={HomeCSS.choose__img}> 
            <img src={chooseImg} alt="" className="w-100" />
            </div>
            </Col>
          </Row>
        </Container>
    </section>
    <section className={HomeCSS.spacer1}> 
      <Container> 
        <h1 className={HomeCSS.bold}>Documents Required</h1>
        <Row> 
          {FeatureData.map((item, index) => ( 
            <Col lg="4" md="6" key={index}> 
              <div className="single__feature text-center px-4"> 
                <h2 className="mb-3"> 
                  {/* <i class={item.icon}></i>  */}
                  <img src={arrowImg} alt="" className="w-25" /> 
                </h2> 
                <h4>{item.title}</h4> 
                <h4>{item.desc}</h4> 
              </div> 
            </Col> 
          ))} 
        </Row> 
      </Container> 
    </section>

    <MDBFooter className='bg-light text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
      gradpeny.com
        </a>
      </div>
    </MDBFooter>
    {/* <footer className={HomeCSS.footer}> 
      <Container> 
        <Row> 
          <Col lg="3" md="6" className="mb-4"> 
            <h2 className=" d-flex align-items-center gap-1"> 
              <i class="ri-pantone-line"></i> Learners. 
            </h2> 
 
            <div className={HomeCSS.follows}> 
              <p className="mb-0">Follow us on social media</p> 
              <span> 
                {" "} 
                <a href="facebook.com"> 
                  <i class="ri-facebook-line"></i> 
                </a> 
              </span> 
 
              <span> 
                {" "} 
                <a href="facebook.com"> 
                  <i class="ri-instagram-line"></i> 
                </a> 
              </span> 
 
              <span> 
                {" "} 
                <a href="facebook.com"> 
                  <i class="ri-linkedin-line"></i> 
                </a> 
              </span> 
 
              <span> 
                {" "} 
                <a href="facebook.com"> 
                  <i class="ri-twitter-line"></i> 
                </a> 
              </span> 
            </div> 
          </Col> 
 
          <Col lg="3" md="6" className="mb-4"> 
            <h6 className="fw-bold">Explore</h6> 
            <ListGroup className={HomeCSS.link__list}> 
              {footerQuickLinks.map((item, index) => ( 
                <ListGroupItem key={index} className="border-0 ps-0 link__item"> 
                  {" "} 
                  <a href={item.url}>{item.display}</a> 
                </ListGroupItem> 
              ))} 
            </ListGroup> 
          </Col> 
 
          <Col lg="3" md="6" className="mb-4"> 
            <h6 className="fw-bold">Information</h6> 
            <ListGroup className={HomeCSS.link__list}> 
              {footerInfoLinks.map((item, index) => ( 
                <ListGroupItem key={index} className="border-0 ps-0 link__item"> 
                  {" "} 
                  <a href={item.url}>{item.display}</a> 
                </ListGroupItem> 
              ))} 
            </ListGroup> 
          </Col> 
 
          <Col lg="3" md="6"> 
            <h6 className="fw-bold">Get in Touch</h6> 
 
            <p>Address: Sylhet, Bangladesh</p> 
            <p> Phone: +88 0123456789 </p> 
            <p>Email: example@gmail.com</p> 
          </Col> 
        </Row> 
      </Container> 
    </footer> */}

    </div>
 


  ); 
}; 
 
export default Home;
