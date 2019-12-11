import React, { Component } from "react";
import axios from "axios";
// import Spinner from "../common/Spinner";

class RecommendedPersonList extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    console.log('working');

    axios.get(`/api/recommendations/recommendations`)
      .then(res => {
        console.log("Working", res.data);
        const persons = res.data;
        this.setState({ persons:persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map((person, key) => <li key={key}>{ person.name }</li>)}
      </ul>
    )
  }
}

export default RecommendedPersonList;