import React, { Component } from "react";
import axios from "axios";

class News extends Component {
  async getNews() {
    const res = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=in&category=health",
      {
        headers: { "x-api-key": "f60f409e37364b1ab7f990a73fea2c2e" }
      }
    );
    // console.log(res);
    // return await res;
    Promise.resolve(res);
  }
  constructor(props) {
    super(props);
    this.state = { data: null };
  }
  async componentDidMount() {
    // const data = this.getNews();
    // console.log(data);
    console.log(this.getNews());
  }

  render() {
    return <div></div>;
  }
}
export default News;
