import React from "react";
import PropTypes from "prop-types"
import {Genres} from "./../../utils.js";
import {connect} from "react-redux";
import {ActionCreator} from "./../../reducer.js";

const GenresList = (props) => {
  const {genre, onClick} = props;
  const genres = Object.values(Genres);

  return <ul className="catalog__genres-list">
    {genres.map((item) => {
      const activeClass = genre === item ? `catalog__genres-item--active` : ``;

      return <li
        key={item}
        className={`catalog__genres-item ${activeClass}`}
        onClick={()=>{
          onClick(item);
        }}
      >
        <a href="#" className="catalog__genres-link">{item}</a>
      </li>;
    })}
  </ul>;
};

GenresList.propTypes = {
  genre: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  genre: state.genre,
});

const mapDispatchToProps = (dispatch) => ({
  onClick(genre) {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.filteredFilms());
  }
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);

