import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/NavBar";
import NavMenu from "../components/layout/NavMenu";


export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };

    return (
      <div>
        <NavBar location={location} />
        <div class="container" style={containerStyle}>
          <div class="row row-offcanvas row-offcanvas-left">
            <div class="col-xs-6 col-sm-3 sidebar-offcanvas">
              <NavMenu />
            </div>
            <div class="col-xs-12 col-sm-9">
              <h1>CIO TRANSPORT</h1>
              {this.props.children}
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}
