import React from "react";
import { connect } from "react-redux";
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { Grid, Row, Col, Button } from 'react-bootstrap';

import Tour from "../components/Tour";
import { fetchTours, addTour } from "../actions/toursActions";

@connect((store) => {
  return {
    tours: store.tours.tours
  };
})
export default class Tours extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchTours());
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.fileInput.files[0]);
    this.props.dispatch(addTour(this.titleInput.value,
                                this.descriptionInput.value,
                                this.fileInput.files));
    this.titleInput.value = 'Excursie' + Date.now();
    this.descriptionInput.value = 'Descriere' + Date.now();    
    this.fileInput.files = null;
  }
  render() {
    const Tours = this.props.tours.map(
      (tour, i) => <Tour key={i} tour={tour} /> );

    return (
        <Row>
          <Col xs={12} md={4}>
            <form>
              <FormGroup controlId="titleInput">
                <ControlLabel>Title</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="Enter text"
                  inputRef={ref => { this.titleInput = ref; }}                  
                />
              </FormGroup>
              <FormGroup controlId="descriptionInput">
                <ControlLabel>Description</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="Enter text"
                  inputRef={ref => { this.descriptionInput = ref; }}                  
                />
              </FormGroup>
              <FormGroup controlId="fileInput">
                <ControlLabel>Image</ControlLabel>
                <FormControl
                  type="file"
                  inputRef={ref => { this.fileInput = ref; }}                  
                />
              </FormGroup>
              <Button type="submit" onClick={this.handleSubmit.bind(this)}>
                Submit
              </Button>
            </form>
          </Col>
          <Col xs={12} md={12}>
            {Tours}
          </Col>          
        </Row>
    );
  }
}
