import React from "react";
import { connect } from "react-redux";

import Tour from "../components/Tour";
import { fetchTours } from "../actions/toursActions";


@connect((store) => {
  return {
    tours: store.tours.tours
  };
})
export default class Featured extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchTours());
  }
  render() {
    const Tours = this.props.tours.map(
            (tour, i) => <Tour key={i} tour={tour} /> );

    const adText = [
      "Ad spot #1",
      "Ad spot #2",
      "Ad spot #3",
      "Ad spot #4",
      "Ad spot #5",
    ];

    const randomAd = adText[Math.round( Math.random() * (adText.length-1) )];
    return (
      <div>
        <div class="row">
          <div class="col-lg-12">
            <div class="well text-center">
              {randomAd}
            </div>
          </div>
        </div>
        <div class="row">{Tours}</div>
      </div>
    );
  }
}
