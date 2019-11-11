import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { deletePost, addLike, removeLike } from "../../actions/postActions";

class PostItem extends Component {
  onDeleteClick(id) {
    console.log(id);
  }

  render() {
    // console.log(this.props);
    const { post, auth, showActions } = this.props;

    return (
      <div>
        <div className="row">
          <div className="col-md-2">
            <a href="profile.html">
              <img src={post.avatar} alt="" />
            </a>
            <br />
            <p className="text-center">{post.name}</p>
          </div>
          <div className="col-md-10">
            <p className="lead">{post.text}</p>
            <button type="button">
              like
              <span>{post.likes.length}</span>
            </button>
            <button type="button">
              <i />
            </button>
            <Link to={`/post/${post._id}`}>comments</Link>
            {post.user === auth.userData.id ? (
              <button
                onClick={this.onDeleteClick.bind(this, post._id)}
                type="button"
              >
                delete post
              </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  // deletePost: PropTypes.func.isRequired,
  // addLike: PropTypes.func.isRequired,
  // removeLike: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.registration
});

export default connect(
  mapStateToProps,
  { deletePost, addLike, removeLike }
)(PostItem);
