import React from 'react';
import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent
} from '@merc/react-timeline';
import "./projects-timeline.style.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import apiReact from "../../assets/img/projects/apiReact.jpg";
import calculator from "../../assets/img/projects/calculator.jpg";
import movieSearchApp from "../../assets/img/projects/movieSearchApp.jpg";
import myLauncher from "../../assets/img/projects/myLauncher.jpg";
import Notes from "../../assets/img/projects/Notes.jpg";
import singlePlayerSnakeGame from "../../assets/img/projects/singlePlayerSnakeGame.jpg";
import ticTactToeApp from "../../assets/img/projects/ticTacToeApp.jpg";
import website from "../../assets/img/projects/website.jpg";

import L_REACT from "../../assets/img/skills/react.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import javaScript from "../../assets/img/skills/javascript.svg";

const Projects = () => {
    return (
        <div id="projects">
            <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
            <Timeline>
                <Events>
                <ImageEvent
                    date="10/09/2020"
                    className="text-center"
                    text="Tic Tac Toe App"
                    src={ticTactToeApp}
                    alt="React Tic-Tac-Toe App"
                >
                <div className="d-flex justify-content-between flex-column mt-1">
                    <div>
                        <Accordion>
                            <Card>
                            <Accordion.Toggle
                                as={Card.Header}
                                eventKey="0"
                                className="p-2 text-center accordian-main"
                            >
                            PROJECT DETAILS
                        </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Here is a Tic-Tac-Toe app which also displays the winner at the end and count the number of steps. Have an option to restart the game as well.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Two-player game</li>
                          <li>Powered by React</li>
                          <li>Responsive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REDUX}
                                alt="redux"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Redux
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/SAN06311521/ReactHooksPractice"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href=""
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          <ImageEvent
            date="19/07/2020"
            className="text-center"
            text="Basic Calculator"
            src={calculator}
            alt="calculator"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> It's a basic calculator that performs basic operations with all feaures working.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>All operation working.</li>
                          <li>Use of basic react properties.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={javaScript}
                                alt="js"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              JavaScript
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/SAN06311521/React-App"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href=""
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          <ImageEvent
                    date="31/12/2020"
                    className="text-center"
                    text="React App"
                    src={apiReact}
                    alt="React App"
                >
                <div className="d-flex justify-content-between flex-column mt-1">
                    <div>
                        <Accordion>
                            <Card>
                            <Accordion.Toggle
                                as={Card.Header}
                                eventKey="0"
                                className="p-2 text-center accordian-main"
                            >
                            PROJECT DETAILS
                        </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is smooth and pleasant looking search app which sorts out results on one type of letter. Also, it has api on call and flip effect to display the information.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>API calls</li>
                          <li>Powered by React</li>
                          <li>search by letter mechanism</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REDUX}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Redux
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/SAN06311521/React-Basic"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href=""
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          <ImageEvent
                    date="24/12/2020"
                    className="text-center"
                    text="My Launcher"
                    src={myLauncher}
                    alt="My-launcher"
                >
                <div className="d-flex justify-content-between flex-column mt-1">
                    <div>
                        <Accordion>
                            <Card>
                            <Accordion.Toggle
                                as={Card.Header}
                                eventKey="0"
                                className="p-2 text-center accordian-main"
                            >
                            PROJECT DETAILS
                        </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Google extension build-up having my social links.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Extension build-up</li>
                          <li>JavaScript application</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={javaScript}
                                alt="js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JavaScript
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/SAN06311521/My-launcher"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href=""
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          <ImageEvent
                    date="02/01/2021"
                    className="text-center"
                    text="Website Making"
                    src={website}
                    alt="website making"
                >
                <div className="d-flex justify-content-between flex-column mt-1">
                    <div>
                        <Accordion>
                            <Card>
                            <Accordion.Toggle
                                as={Card.Header}
                                eventKey="0"
                                className="p-2 text-center accordian-main"
                            >
                            PROJECT DETAILS
                        </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is build-up of fully responsive website in javaScript. I have made many e-commerce website in react and js as well. This one is one among them.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Unique designs</li>
                          <li>Powered by React</li>
                          <li>Responsive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="bootStrap"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              bootStrap
                            </span>
                          </li>
                            <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={javaScript}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JavaScript
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/SAN06311521/Responsive-website"
                  target="_blank"
                >
                  SOURCE CODE-I
                </UrlButton>
                <UrlButton
                  href="https://github.com/SAN06311521/Shop-Website"
                  target="_blank"
                >
                  SOURCE CODE-II
                </UrlButton>
                <UrlButton
                  href="https://github.com/SAN06311521/My-Blog"
                  target="_blank"
                >
                  SOURCE CODE-III
                </UrlButton>
                <UrlButton
                  href=""
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          <ImageEvent
                    date="30/05/2020"
                    className="text-center"
                    text="Snake Game"
                    src={singlePlayerSnakeGame}
                    alt="Snake Game"
                >
                <div className="d-flex justify-content-between flex-column mt-1">
                    <div>
                        <Accordion>
                            <Card>
                            <Accordion.Toggle
                                as={Card.Header}
                                eventKey="0"
                                className="p-2 text-center accordian-main"
                            >
                            PROJECT DETAILS
                        </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is single-player snake game build in JavaScript and have restart, lose and win options as well.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Single-player phaser game</li>
                          <li>Build-up in JavaScript</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={javaScript}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JavaScript
                            </span>
                          </li>              
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/SAN06311521/MyFirstGame"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href=""
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          <ImageEvent
                    date="10/11/2020"
                    className="text-center"
                    text="Movie Search App"
                    src={movieSearchApp}
                    alt="Movie Search App"
                >
                <div className="d-flex justify-content-between flex-column mt-1">
                    <div>
                        <Accordion>
                            <Card>
                            <Accordion.Toggle
                                as={Card.Header}
                                eventKey="0"
                                className="p-2 text-center accordian-main"
                            >
                            PROJECT DETAILS
                        </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> With the use of APIs and searching algorithm in React, I have created this movie search app which gives the result on entering the name of the movies.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>API Calls</li>
                          <li>Powered by React</li>
                          <li>Responsive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/SAN06311521/Basic-React-API"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href=""
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          <ImageEvent
                    date="26/11/2020"
                    className="text-center"
                    text="Notes App"
                    src={Notes}
                    alt="Notes App"
                >
                <div className="d-flex justify-content-between flex-column mt-1">
                    <div>
                        <Accordion>
                            <Card>
                            <Accordion.Toggle
                                as={Card.Header}
                                eventKey="0"
                                className="p-2 text-center accordian-main"
                            >
                            PROJECT DETAILS
                        </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> I have build an notes app with the help of React Native, via this app, you can create, delete, and edit the notes in you phone. 
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Redux</li>
                          <li>Powered by React Native</li>
                          <li>Android Development</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React Native
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REDUX}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Redux
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/SAN06311521/Note-App"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href=""
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
                </Events>
            </Timeline>
        </div>
    )
}

export default Projects;