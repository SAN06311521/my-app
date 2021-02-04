import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Tilt from 'react-tilt';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './experience.style.css';

const Experience = () => {
    return (
        <div id="experience">
            <h1 className="pt-3 text-center font-details-b pb-3">Experience</h1>
            <Jumbotron className="jumbo-style">
                <Tilt options={{ max: 30}}>
                    <Card>
                        <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                            <Card.Title className="text-center">Cofiato</Card.Title>
                        </Card.Header>
                        <Card.Body className="d-flex justify-content-center flex-column">
                            <div>
                                <Card.Text className="text-center style">
                                    <strong className="body-title-style ">Frontend Developer</strong>
                                    <br />
                                    <strong>Technology:</strong> React JS, React Native, JavaScript
                                    <br />
                                    <strong>Duration:</strong> Aug 2020 - Jan 2021
                                    <br/> 
                                    <strong> Description </strong>
                                    <ul className="text-left">
                                        <li>Learned to develop real-time android apps using React Native</li>
                                        <li>Also, worked as a BA and QA by managing projects and matching needs with sources provided.</li>
                                        <li>Worked with hosting platforms and developing UI websites live through React JS</li>
                                    </ul>
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </Tilt>
                <br />
                <br />
                <Tilt options={{ max: 25}}>
                    <Card>
                        <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                            <Card.Title className="text-center">Onit Digital Studio</Card.Title>
                        </Card.Header>
                        <Card.Body className="d-flex justify-content-center flex-column">
                            <div>
                                <Card.Text className="text-center style">
                                    <strong className="body-title-style ">Content Writer</strong>
                                    <br />
                                    <strong>Duration:</strong> Sept 2020 - Present
                                    <br/>
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </Tilt>
                <br />
                <br />
                <Tilt options={{ max: 25}}>
                    <Card>
                        <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                            <Card.Title className="text-center">Mobiru India Pvt Ltd</Card.Title>
                        </Card.Header>
                        <Card.Body className="d-flex justify-content-center flex-column">
                            <div>
                                <Card.Text className="text-center style">
                                    <strong className="body-title-style ">Technical Content Writer</strong>
                                    <br />
                                    <strong>Duration:</strong> Aug 2020 - Sept 2020
                                    <br/>
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </Tilt>
                <br />
                <br />
                <Tilt options={{ max: 25}}>
                    <Card>
                        <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                            <Card.Title className="text-center">NerdHerd Community</Card.Title>
                        </Card.Header>
                        <Card.Body className="d-flex justify-content-center flex-column">
                            <div>
                                <Card.Text className="text-center style">
                                    <strong className="body-title-style ">Lead</strong>
                                    <br />
                                    <strong>Duration:</strong> Aug 2019 - Present
                                    <br/>
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </Tilt>
            </Jumbotron>
        </div>
    )
}

export default Experience;