import React from "react";
import { connect } from "react-redux";
import { deleteTour } from "../actions/toursActions";

import { Glyphicon } from 'react-bootstrap';
import { Grid, Row, Col, Button } from 'react-bootstrap';

@connect((store) => {
  return {};
})
export default class Tour extends React.Component {
  handleDelete(id) {
    this.props.dispatch(deleteTour(id))
  }
  render() {
    const { _id, title, description, images } = this.props.tour;
    let thImage;
    if (images) thImage = 'http://localhost:3000/' + images[0];
    return (
      <div class="col-sm-6 col-md-8">
        <div class="thumbnail">
          <h3><a>{title}</a></h3>                       
            <img src={thImage} alt="242x200"/>
            <div class="caption">
              <p>{description}</p>              
               <p>
                <Button bsStyle="primary"><Glyphicon glyph="glyphicon glyphicon-thumbs-up" /> Like</Button>&nbsp;
                <Button bsStyle="default" onClick={this.handleDelete.bind(this, _id)}>Delete</Button>
              </p>
            </div>
          </div>
      </div>
    );
  }
}
