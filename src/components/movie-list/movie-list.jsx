import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import MovieCard from "./../movie-card/movie-card.jsx";

class MovieList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {films} = this.props;

    return films.map((film) =>
      <MovieCard
        key={film.id}
        film={film}
        onCardActive={(id)=>{
          this.setState({activeCard: id});
        }}
        onFilmTitleClick={()=>{}}
      />);
  }
}

MovieList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  })).isRequired
};

export default MovieList;
