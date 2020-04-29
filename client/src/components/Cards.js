import React from "react";
import { Card, CardGroup, Accordion, Button } from "react-bootstrap";
import PoliceStation from "../components/Maps/PoliceStation";
import FireStation from "../components/Maps/FireStation";
import Libraries from "../components/Maps/Libraries";
import RecCenter from "../components/Maps/RecCenter";

// Replace Lorem words with facts and imfo about each services
const Cards = () => {
  return (
    <div>
      <Card className="text-center" border="light">
        <Card.Header>
          <h4>
            <strong>Public Services Avaliable to PG County</strong>
          </h4>
        </Card.Header>
        <br />
        <CardGroup>
          <Card border="light">
            <div className="card-image">
              {/* <Card.Img variant="top" src={design} alt="design image" />  */}
            </div>
            <Card.Body>
              <Card.Title className="title">Police Station</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                suscipit ab labore, pariatur animi, laudantium, repudiandae
                ipsam quaerat libero nemo amet accusantium. Expedita deleniti a
                tempora repellat omnis ex cumque?
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="light">
            <div className="card-image">
              {/* <Card.Img variant="top" src={design} alt="design image" /> */}
            </div>
            <Card.Body>
              <Card.Title className="title">Fire Station</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis dolore eius, laborum est sequi deleniti ea vitae
                tempora laudantium, quasi, amet dolorum aperiam! Tenetur
                laboriosam qui est maxime labore ipsa.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
          <br />
          <br />
          <Card border="light">
            <div className="card-image">
              {/* <Card.Img variant="top" src={build} alt="build image" /> */}
            </div>
            <Card.Body>
              <Card.Title className="title">Libraries</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                cupiditate veritatis iste nostrum ducimus dolor repudiandae
                officia. Suscipit, itaque error reiciendis ad, adipisci
                doloribus numquam natus ex veniam quod quos.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="light">
            <div className="card-image">
              {/* <Card.Img variant="top" src={launch} alt="Launch image" /> */}
            </div>
            <Card.Body>
              <Card.Title className="title">Rec Centers</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                similique nam veritatis dolor maxime, ullam architecto incidunt
                laudantium sint quibusdam molestias ea corporis numquam
                voluptates iste, optio, earum debitis pariatur.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Card>
      <br />
      <br />
      <Card>
        <Card.Body>
          <h1>Talk about what we want. </h1> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. At, praesentium repudiandae, beatae quia
          consequuntur ratione debitis sequi quam dicta cumque iste asperiores
          officia. Magni aliquid repellat sed id praesentium vel. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Quod eligendi ipsa
          consequuntur sed excepturi dolor,
        </Card.Body>
      </Card>
      <br />
      <br />
      <div>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Police Station
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <PoliceStation />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Fire Station
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <h1>Hello</h1>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                Libraries
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <Libraries />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
                Rec Centers
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <RecCenter />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
};

export default Cards;