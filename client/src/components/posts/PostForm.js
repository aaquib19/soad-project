import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/postActions";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import BasicTextFields from "./../common/textField";
import TextField from "@material-ui/core/TextField";
import { ImageUploader } from "react-images-upload";
import ImageUpload from "./../common/imageUploader";
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
      name: userData.name,
      avatar: userData.avatar
    };
    console.log(newPost);
    this.props.addPost(newPost);
    this.setState({ text: " " });
  }

  onChange(e) {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { errors } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmit} enctype="multipart/form-data">
          <div className="form-group">
            <BasicTextFields
              placeholder="Create a post"
              name="text"
              label="Write Something"
              value={this.state.text}
              onChange={this.onChange}
              // error={errors.text}
            />
          </div>
          <ImageUpload></ImageUpload>
          <button type="submit" className="btn btn-secondary btn-lg btn-block">
            <i class="fa fa-upload"> Post</i>
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
