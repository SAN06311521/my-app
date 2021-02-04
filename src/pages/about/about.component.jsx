import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Profile from '../../assets/img/profile/sanya.jpg';
import './about.style.css';

const About = () => {
    return (
        <div id="about">
            <div className="about">
                <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
                <Container>
                    <Row classNAme="pt-3 pb-3 align-items-center">
                        <Col xs={12} md={6}>
                            <Row className="justify-content-centermb-2 mr-2">
                                <Image className="profile justify-content-end" alt="profile"  src={Profile} roundedCircle fluid />
                            </Row>                    
                        </Col>
                        <Col xs={12} md={6}>
                            <Row className=" align-items-start p-2 my-details rounded">
                            <strong>I'm an enthusiast passionate hardworking web developer and content writer</strong><br /> 
                            I always seek for opportunities to learn every day. <br/> 
                            I wanna become a part of a team where I can grab some experience, work hard by giving 100% of mine and uplift the
                            organisation in which I get a chance to learn.<br /> 
                            And I'm on track to learn more.<br />
                            I love writing on tech stuffs and also have contributed my work in various projects in organizations.<br />
                            I have sharpen my skills by working on various projects.<br />
                            Let's collab and bring the best ideas into existance! <br />
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center flex-wrap">
                                    <div>
                                        <a href="#contact">
                                            <Button className="m-2" variant="outline-success">Ping me up!</Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://github.com/SAN06311521" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-secondary">
                                                Github
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-warning">
                                                My Resume
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://linkedin.com/in/sanya-jain-25455017a" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-primary">
                                                LinkedIn
                                            </Button>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default About;