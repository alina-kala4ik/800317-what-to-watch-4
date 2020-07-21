import React from "react";
import PropTypes from 'prop-types';
import MovieCard from "./../movie-card/movie-card.jsx";
import withPlayingCard from "./../../hocs/with-playing-card/with-playing-card.jsx";

const MovieCardWrapped = withPlayingCard(MovieCard);

const MovieList = (props) => {
  const {films} = props;

  if (!films) {
    return null;
  }

  return films.map((film) =>
    <MovieCardWrapped
      key={film.title}
      film={film}
    />);
};

MovieList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default MovieList;
