import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import VideoPlayer from "./../video-player/video-player.jsx";
import {connect} from "react-redux";
import {ActionCreator} from "./../../reducer/data/data.js";
import {Pages} from "./../../utils.js";
import {Link} from "react-router-dom";

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.handleImgOrTitleClick = this.handleImgOrTitleClick.bind(this);
  }

  handleImgOrTitleClick() {
    const {setGenreForFilter, film} = this.props;
    const {genre} = film;

    setGenreForFilter(genre);
  }

  render() {
    const {film, isPlaying, onMouseEnter, onMouseLeave} = this.props;
    const {title, screenshotSrc, previewVideoLink, id} = film;

    return <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link
        className="small-movie-card__image"
        onClick={this.handleImgOrTitleClick}
        to={Pages.FILM.replace(`:id?`, id)}
      >
        <VideoPlayer
          src={previewVideoLink}
          poster={screenshotSrc}
          isPlaying={isPlaying}
        />
      </Link>
      <h3 className="small-movie-card__title">
        <Link
          to={Pages.FILM.replace(`:id?`, id)}
          onClick={this.handleImgOrTitleClick}
          className="small-movie-card__link"
        >
          {title}
        </Link>
      </h3>
    </article>;
  }
}

MovieCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    screenshotSrc: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  setGenreForFilter: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setGenreForFilter(genre) {
    dispatch(ActionCreator.setGenreForFilter(genre));
  }
});

export {MovieCard};
export default connect(null, mapDispatchToProps)(MovieCard);
