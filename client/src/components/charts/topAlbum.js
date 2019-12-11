import React, { Component } from "react";
import axios from "axios";
import Spinner from "../common/Spinner";
import { classnames } from "classnames";
import Navbar from "../layout/Navbar";
import FolderList from "../layout/Timeline/lists";
import Divider from "@material-ui/core/Divider";

class TopAlbum extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null, loading: "true" };
  }

  async getTopAlbum() {
    // this.setState({ loading: true });
    const url =
      "http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=rap&api_key=4bd1cce243708554bea3c36f4a43f88b&format=json";

    const res = await axios.get(url);

    const data = await res;
    console.log("helloo ", res.data.albums.album);
    return data.data.albums.album;
  }

  componentDidMount() {
    Promise.resolve(this.getTopAlbum()).then(data => {
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
          album = {item.name} <br></br>
          artist= {item.artist.name}
          <br></br>
          {/* {item.image[0]} */}
          <img src={item.image[3]["#text"]}></img>
          <a href={item.url}>Play {item.name}</a>
          <br></br>
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
export default TopAlbum;
