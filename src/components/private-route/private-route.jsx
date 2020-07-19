import React from "react";
import {connect} from "react-redux";
import {getAuthorizationStatus, getFlagIsFetchingAuthStatus} from "./../../reducer/user/selector.js";
import {AuthorizationStatus} from "./../../reducer/user/user.js";
import {Route, Redirect} from "react-router-dom";
import {Pages} from "./../../utils.js";
import PropTypes from "prop-types";

const PrivateRoute = (props) => {
  const {render, path, exact, authorizationStatus, isFetchingAuthStatus} = props;

  if (isFetchingAuthStatus) {
    return null;
  }

  return (
    <Route
      path={path}
      exact={exact}
      render={(historyProps) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render(historyProps)
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
  isFetchingAuthStatus: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  isFetchingAuthStatus: getFlagIsFetchingAuthStatus(state),
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
