import React, { Component } from "react";
import axios from "axios";
import Spinner from "../common/Spinner";
import { classnames } from "classnames";
import Navbar from "../layout/Navbar";
import FolderList from "../layout/Timeline/lists";
import Divider from "@material-ui/core/Divider";

class TopTracks extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null, loading: "true" };
  }

  async getTopTracks() {
    // this.setState({ loading: true });
    const url =
      "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=4bd1cce243708554bea3c36f4a43f88b&format=json";

    const res = await axios.get(url);

    const data = await res;
    console.log("helloo ", res.data.tracks.track);
    return data.data.tracks.track;
  }

  componentDidMount() {
    Promise.resolve(this.getTopTracks()).then(data => {
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
      console.log("inside render ", data);
      displayElement = data.map((item, key) => (
        <div key={key}>
          {item.name} <br></br>
          {item.playcount} <br></br>
          {item.listeners} <br></br>
          {item.url}
          <img src={item.image[3]["#text"]}></img>
          <hr></hr>
        </div>
      ));
    }
    // console.log(loading);
    return (
      <React.Fragment>
        <Navbar />
        {displayElement}
      </React.Fragment>
    );
  }
}
export default TopTracks;
