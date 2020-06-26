import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import VideoPlayer from "./../video-player/video-player.jsx";

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false
    };

    this.handleCardMouseEnter = this.handleCardMouseEnter.bind(this);
    this.handleCardMouseLeave = this.handleCardMouseLeave.bind(this);
  }

  handleCardMouseEnter() {
    this.setState({
      isPlaying: true
    });
  }

  handleCardMouseLeave() {
    this.setState({
      isPlaying: false
    });
  }

  render() {
    const {film, onMouseEnter, onFilmTitleClick, onFilmImgClick} = this.props;
    const {title, screenshotSrc, videoSrc} = film;
    const {isPlaying} = this.state;

    return <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={()=>{
        onMouseEnter(title);
        this.handleCardMouseEnter();
      }}
      onMouseLeave={this.handleCardMouseLeave}
    >
      <div
        className="small-movie-card__image"
        onClick={()=>{
          onFilmImgClick(film);
        }}
      >
        <VideoPlayer
          src={videoSrc}
          poster={screenshotSrc}
          isPlaying={isPlaying}
        />
      </div>
      <h3 className="small-movie-card__title">
        <a
          onClick={(evt)=>{
            evt.preventDefault();
            onFilmTitleClick(film);
          }}
          className="small-movie-card__link"
          href="movie-page.html"
        >{title}</a>
      </h3>
    </article>;
  }
}

MovieCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    screenshotSrc: PropTypes.string.isRequired,
    posterSrc: PropTypes.string.isRequired,
    movieCoverSrc: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    yearRelease: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    numberVotes: PropTypes.string.isRequired,
    producer: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string).isRequired,
    videoSrc: PropTypes.string.isRequired
  }).isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onFilmTitleClick: PropTypes.func.isRequired,
  onFilmImgClick: PropTypes.func.isRequired,
};

export default MovieCard;
