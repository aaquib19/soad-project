import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/postActions";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("submit");

    const { userData } = this.props.auth;
    console.log(userData);
    const newPost = {
      text: this.state.text,
      name: userData.firstName,
      avatar: userData.avatar
    };
    console.log(newPost);
    this.props.addPost(newPost);
    this.setState({ text: " " });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { errors } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <TextAreaFieldGroup
              placeholder="Create a post"
              name="text"
              value={this.state.text}
              onChange={this.onChange}
              error={errors.text}
            />
          </div>
          {errors.text}
          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </form>{" "}
      </div>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.registration,
  errors: state.errors
});

export default connect(mapStateToProps, { addPost })(PostForm);
