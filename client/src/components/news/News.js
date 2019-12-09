import React, { Component } from "react";
import axios from "axios";
import Spinner from "../common/Spinner";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null, loading: "true" };
    this.getCategory = this.getCategory.bind(this);
  }

  getCategory() {
    console.log("hello");
    Promise.resolve(this.getNews("1")).then(data => {
      this.setState({ data: data, loading: false });
    });
  }

  async getNews(value) {
    // this.setState({ loading: true });

    const url = "https://newsapi.org/v2/top-headlines?";

    const category = "country=in&category=health";
    const source = "sources=bbc-news";
    let endpoint = "";
    if (value === "1") {
      endpoint = url + category;
    } else {
      endpoint = url + source;
    }

    const res = await axios.get(endpoint, {
      headers: { "x-api-key": "f60f409e37364b1ab7f990a73fea2c2e" }
    });

    const data = await res;
    return data.data.articles;
  }

  componentDidMount() {
    Promise.resolve(this.getNews("2")).then(data => {
      this.setState({ data: data, loading: false });
    });
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
      console.log(data);
      const articleData = data.map((item, key) => (
        <div key={key}>
          {item.source.name}
          <div>
            <h6>{item.title}></h6>
            <div>{item.content}</div>
            <hr></hr>
          </div>
        </div>
      ));
      const name = data[0].source.name;
      displayElement = (
        <div>
          <h1>news</h1>
          {articleData}
        </div>
      );
    }
    // console.log(loading);
    return (
      <div>
        <button
          onClick={() => {
            this.getCategory();
          }}
        >
          Health
        </button>
        {/* <button onClick={this.getCategory()}>Health</button> */}

        <div>{displayElement}</div>
      </div>
    );
  }
}
export default News;
