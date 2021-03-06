import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Operation} from "../../reducer/data/data.js";
import PropTypes from "prop-types";

const REMOVE_FROM_MY_LIST = 0;
const ADD_TO_MY_LIST = 1;

class MyListButton extends PureComponent {
  constructor(props) {
    super(props);

    this.handleMyListClick = this.handleMyListClick.bind(this);
  }

  handleMyListClick() {
    const {isFavorite, id, onMyListClick, isPromoFilm} = this.props;

    const status = isFavorite ? REMOVE_FROM_MY_LIST : ADD_TO_MY_LIST;

    onMyListClick(id, status, isPromoFilm);
  }

  render() {
    const {isFavorite} = this.props;

    const myListIcon = isFavorite ?
      <svg viewBox="0 0 18 14" width="18" height="14"><use xlinkHref="#in-list"></use></svg> :
      <svg viewBox="0 0 19 20" width="19" height="20"><use xlinkHref="#add"/></svg>;

    return <button
      className="btn btn--list movie-card__button"
      type="button"
      onClick={this.handleMyListClick}
    >
      {myListIcon}
      <span>My list</span>
    </button>;
  }
}

MyListButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  onMyListClick: PropTypes.func.isRequired,
  isPromoFilm: PropTypes.bool
};

const mapDispatchToProps = (dispatch) => ({
  onMyListClick(filmId, status, isPromoFilm) {
    dispatch(Operation.changeFlagIsFavorite(filmId, status, isPromoFilm));
  }
});

export {MyListButton};
export default connect(null, mapDispatchToProps)(MyListButton);
