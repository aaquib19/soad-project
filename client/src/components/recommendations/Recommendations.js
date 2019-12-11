import React, { Component } from "react";
import axios from "axios";
import Navbar from "../layout/Navbar";
import FolderList from "../layout/Timeline/lists";
// import Spinner from "../common/Spinner";

class RecommendedPersonList extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    console.log('working');

    axios.get("/api/recommendations/")
      .then(res => {
        console.log("Working-------", res);
        const persons = res.data;
        this.setState({ persons:persons });
      })
  }

  render() { 
    
    return (
      <React.Fragment>
        <Navbar />
        <br />
        <br />

        <div className="row" style={{ backgroundColor: "#e9ebee" }}>
          <div className="col-lg-2">
            <div className="position-fixed">
              <div style={{ width: "14%", marginTop: "3rem", position: "fixed",
                  backgroundColor: "transparent"
              }}>
                <FolderList />
              </div>
            </div>
          </div>
          <div className="col-5" style={{ backgroundColor: "#e9ebee" }}>
            <div>
              
              {this.state.persons.map((person, key) => (
                
                <React.Fragment>
                  <div className="card" key={key} style={{ boxShadow: "3px 3px 3px #fff" }}>
                
                  { person.name }
                  {/* {person.avator} */}

                  </div>
                  <br />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RecommendedPersonList;