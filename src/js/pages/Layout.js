import React from "react";
import { IndexLink, Link } from "react-router";
import { connect } from "react-redux";
import { push } from 'react-router-redux';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Grid, Row, Col, Button } from 'react-bootstrap';

import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/NavBar";
import NavMenu from "../components/layout/NavMenu";

@connect((store) => {
  return {};
})
export default class Layout extends React.Component {

  linkTo(path) {
    this.props.dispatch(push(path));
  }

  render() {
    const { location } = this.props;
    console.log(location);
    let menuActiveKey = 1;
    if(location.pathname.includes('excursii')) {
      menuActiveKey = 2;
    }
    const Layout = (
      <Grid fluid={true}>
        <Row>
          <Navbar fluid={true}>
            <Navbar.Header>
              <Navbar.Brand>
                <IndexLink to="/">CIO TRANSPORT</IndexLink>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem eventKey={1} onClick={this.linkTo.bind(this, '/')}>Acasa</NavItem>
              <NavItem eventKey={2} href="/excursii">Excursii</NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar>
        </Row>
        <Row>
          <Col xs={12} md={2}>
            <Nav bsStyle="pills" stacked activeKey={menuActiveKey}>
              <NavItem eventKey={1} title="Acasa" href="/">Acasa</NavItem>
              <NavItem eventKey={2} title="Excursii" href="/excursii">Excursii</NavItem>
              <NavItem eventKey={3} title="Transport">Transport</NavItem>
            </Nav>
          </Col>
          <Col xs={6} md={10}>
            {this.props.children}
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <Footer/>
          </Col>
        </Row>
      </Grid>
    );

    return Layout;
  }
}
