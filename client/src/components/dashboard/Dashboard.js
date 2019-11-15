import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";
import Spinner from "../common/Spinner";
import { Link } from "react-router-dom";
import ProfileActions from "./ProfileActions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    const { userData } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;
    if (profile === null || loading) {
      dashboardContent = (
        <h4>
          <Spinner></Spinner>
        </h4>
      );
    } else {
      // dashboardContent = <h1>hello </h1>;

      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div>
            <p>
              Welcome{" "}
              <Link to={`/profile/${profile.handle}`}> {userData.name}</Link>{" "}
            </p>
            <ProfileActions></ProfileActions>
          </div>
        );
      } else {
        //user logged in but has no profile
        dashboardContent = (
          <div>
            <p>Welcome {userData.name}</p>
            <p>you have not yet setup a profile , add profile data</p>
            <Link to="/create-profile">Create Profile </Link>
          </div>
        );
      }
    }

    return (
      <div>
        <h1>Dashboard</h1>
        <div>{dashboardContent}</div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.registration
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
