import React, { Component } from "react";
import axios from "axios";
// import Spinner from "../common/Spinner";

class Notifications extends Component {
    state = {
        notifications: []
      }

      componentDidMount() {
        console.log('Getting notifications');
    
        axios.get(`/api/notification/all`)
          .then(res => {
            console.log("Working",res.data);
            const notifications =  res.data;
            this.setState({ notifications:notifications });
          })
      }

      render() {
        return (
          <ul>
            { this.state.notifications.map((notification, key) => <li key={key}>{ notification.type_of_notification }</li>)}
          </ul>
          // <h1>hello</h1>
        )
      }
    

}

export default Notifications;