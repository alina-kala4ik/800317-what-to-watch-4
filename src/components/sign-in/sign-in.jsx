import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Operation} from "./../../reducer/user/user.js";
import Footer from "./../footer/footer.jsx";

class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this.loginRef = createRef();
    this.passwordRef = createRef();

    this.handleSignInClick = this.handleSignInClick.bind(this);
  }

  handleSignInClick(evt) {
    const {onSignInClick} = this.props;

    evt.preventDefault();

    onSignInClick({
      email: this.loginRef.current.value,
      password: this.passwordRef.current.value
    });
  }

  render() {
    return <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email" placeholder="Email address"
                name="user-email" id="user-email"
                ref={this.loginRef}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password" placeholder="Password"
                name="user-password"
                id="user-password"
                ref={this.passwordRef}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button
              className="sign-in__btn"
              type="submit"
              onClick={this.handleSignInClick}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>

      <Footer isActiveLogoLink />

    </div>;
  }

}

SignIn.propTypes = {
  onSignInClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSignInClick(authData) {
    dispatch(Operation.login(authData));
  }
});

export {SignIn};
export default connect(null, mapDispatchToProps)(SignIn);
