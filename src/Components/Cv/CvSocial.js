import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { socialActions } from "../../Actions";

class CvSocial extends Component {
  componentDidMount() {
    this.props.socialActions();
  }

  renderSocial = () => {
    return this.props.social.map(item => {
      return (
        <div className="cv-header">
        <h4>
          <i class="fab fa-creative-commons-nd" /> Follow Me
        </h4>
        <ul class="list">
          <li class="list-item" key={item.id}>
            <NavLink to={item.url}>{item.social_name}</NavLink>
          </li>
        </ul>
      </div>
      );
    });
  };

  render() {
    return this.renderSocial();
  }
}

const mapStateToProps = state => {
  return { social: Object.values(state.social) };
};

export default connect(
  mapStateToProps,
  { socialActions }
)(CvSocial);
