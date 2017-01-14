import React from "react";

import Tour from "../components/Tour";

export default class Tours extends React.Component {
  render() {
    const { query } = this.props.location;
    const { params } = this.props;
    const { tour } = params;
    const { date, filter } = query;

    const Tours = [
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Fake Article",
      "Partial Article",
      "American Article",
      "Mexican Article",
    ].map((title, i) => <Tour key={i} title={title}/> );

    return (
      <div>
        <h1>Excursii</h1>
        tour: {tour}, date: {date}, filter: {filter}
        <div class="row">{Tours}</div>
      </div>
    );
  }
}
