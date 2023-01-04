import React from "react";
import Col from 'react-bootstrap/esm/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import DashPage from "../components/DashPage";

const Dashboard = () => {
    return (
        <>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content className="showtab">
              <Tab.Pane eventKey="first">
                <DashPage/>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                =
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
        </>
    );
};

export default Dashboard;