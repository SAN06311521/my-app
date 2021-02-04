import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './contact.style.css';
import Button from "react-bootstrap/Button";

const Contact = () => {
    return (
        <div id="contact">
            <h1 className="pt-3 text-center font-details-b pb-3">PING ME HERE!</h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a href="mailto:jainsanya.a@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-success" title="jainsanya.a@gmail.com">
                  <i className="fas fa-envelope-square"></i> Drop an Email!
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.linkedin.com/in/sanya-jain-25455017a" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Connect @ LinkenIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
            
            <div className="m-2">
              <a href="https://github.com/SAN06311521" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" title="See my work @ Github">
                  <i className="fab fa-github-square"></i> Github
                </Button>
              </a>
            </div>
            {/* <div className="m-2">
              <a href="" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-info" title="Tweets are welcomed!">
                  <i className="fab fa-twitter"></i> Twitter
                </Button>
              </a>
            </div> */}
            <div className="m-2">
              <a href="https://www.facebook.com/people/Sanya-Jain/100004873817270" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-info" title="Waiting for your hello!">
                  <i className="fab fa-facebook-square"></i> Facebook
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://instagram.com/mystic_scribbler?igshid=1wsb6mz5tv547" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" title="Let's share stuffs together">
                  <i className="fa fa-instagram"></i> Instagram
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
        </div>
    );
}

export default Contact;