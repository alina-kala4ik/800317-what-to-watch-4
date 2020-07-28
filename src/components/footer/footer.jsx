import React from "react";
import {Link} from "react-router-dom";
import {Pages} from "./../../utils.js";
import PropTypes from "prop-types";

const Footer = (props) => {
  const {isActiveLogoLink} = props;

  const logo = <React.Fragment>
    <span className="logo__letter logo__letter--1">W</span>
    <span className="logo__letter logo__letter--2">T</span>
    <span className="logo__letter logo__letter--3">W</span>
  </React.Fragment>;

  const logoLink = isActiveLogoLink ?
    <Link
      className="logo__link logo__link--light"
      to={Pages.ROOT}
    >
      {logo}
    </Link> :
    <a className="logo__link logo__link--light">
      {logo}
    </a>;

  return <footer className="page-footer">
    <div className="logo">
      {logoLink}
    </div>

    <div className="copyright">
      <p>© 2019 What to watch Ltd.</p>
    </div>
  </footer>;
};

Footer.propTypes = {
  isActiveLogoLink: PropTypes.bool.isRequired,
};

export default Footer;

