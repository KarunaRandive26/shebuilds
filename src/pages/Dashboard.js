import React from "react";
import Col from 'react-bootstrap/esm/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import BuisSetup from "../components/BuisSetup";
import DashPage from "../components/DashPage";

const Dashboard = () => {
    return (
        <>
        <Tab.Container defaultActiveKey="first">
        <Row>
          <Col className="sidebar">
            <Nav className="flex-column">
              <Nav.Item className="event mx-auto">
                <Nav.Link  eventKey="first">Profile</Nav.Link>
              </Nav.Item>
              <Nav.Item className="event mx-auto ">
                <Nav.Link eventKey="second">Business Setup</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10} className="col-xs-12">
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <DashPage/>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <BuisSetup/>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
        </>
    );
};

export default Dashboard;