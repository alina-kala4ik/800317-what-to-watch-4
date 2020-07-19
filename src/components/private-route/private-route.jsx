import React from "react";
import {connect} from "react-redux";
import {getAuthorizationStatus} from "./../../reducer/user/selector.js";
import {AuthorizationStatus} from "./../../reducer/user/user.js";
import {Route, Redirect} from "react-router-dom";
import {Pages} from "./../../utils.js";
import PropTypes from "prop-types";

const PrivateRoute = (props) => {
  const {render, path, exact, authorizationStatus} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render()
            : <Redirect to={Pages.LOGIN} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
