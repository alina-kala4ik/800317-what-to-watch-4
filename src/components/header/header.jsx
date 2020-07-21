import React from "react";
import {Link} from "react-router-dom";
import {Pages} from "./../../utils.js";
import {connect} from "react-redux";
import {getAuthorizationStatus, getAvatar} from "./../../reducer/user/selector.js";
import {AuthorizationStatus} from "./../../reducer/user/user.js";
import PropTypes from "prop-types";

const Header = (props) => {
  const {authorizationStatus, avatar, children, uniqueClasses = ``, isActiveLogoLink} = props;

  const logo = <React.Fragment>
    <span className="logo__letter logo__letter--1">W</span>
    <span className="logo__letter logo__letter--2">T</span>
    <span className="logo__letter logo__letter--3">W</span>
  </React.Fragment>;

  const logoLink = isActiveLogoLink ?
    <Link
      className="logo__link"
      to={Pages.ROOT}
    >
      {logo}
    </Link> :
    <a className="logo__link">
      {logo}
    </a>;

  const userBlock = authorizationStatus === AuthorizationStatus.AUTH ?
    <Link
      className="user-block__avatar"
      to={Pages.MY_LIST}>
      <img src={avatar} alt="User avatar" width="63" height="63"/>
    </Link> :
    <Link
      to={Pages.LOGIN}
      className="user-block__link">
      Sign in
    </Link>;

  return <header className={`page-header ${uniqueClasses}`}>
    <div className="logo">
      {logoLink}
    </div>

    {children}

    <div className="user-block">
      {userBlock}
    </div>
  </header>;
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  avatar: getAvatar(state),
});

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  children: PropTypes.node,
  uniqueClasses: PropTypes.string,
  isActiveLogoLink: PropTypes.bool.isRequired,
};

export {Header};
export default connect(mapStateToProps)(Header);

