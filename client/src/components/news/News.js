import React, { Component } from "react";
import axios from "axios";
import Spinner from "../common/Spinner";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null, loading: "true" };
  }
  async getNews() {
    // this.setState({ loading: true });
    const res = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=in&category=health",
      {
        headers: { "x-api-key": "f60f409e37364b1ab7f990a73fea2c2e" }
      }
    );
    //   .then(res => {
    //     console.log(res.data);
    //   });
    const data = await res;
    console.log("in function", data.data.articles);
    return data.data.articles;
  }

  componentDidMount() {
    const data = this.getNews();
    // console.log(data);
    this.setState({ data: data, loading: false });
  }
  componentWillReceiveProps(nextprops) {
    console.log(nextprops);
  }
  render() {
    const { loading, data } = this.state;
    let displayElement;
    if (loading) {
      displayElement = <Spinner></Spinner>;
    } else {
      displayElement = <h1>news</h1>;
    }
    console.log(loading);
    return <div>{displayElement}</div>;
  }
}
export default News;
