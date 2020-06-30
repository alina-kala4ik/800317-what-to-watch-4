import React, {Component} from "react";
import PropTypes from 'prop-types';
import Tabs from "./../tabs/tabs.jsx";
import MovieList from "./../movie-list/movie-list.jsx";

const getRatingLevel = (rating) => {
  const formattedRating = parseFloat(rating.replace(`,`, `.`));

  if (formattedRating === 0 || formattedRating < 3) {
    return `Bad`;
  }
  if (formattedRating >= 3 || formattedRating < 5) {
    return `Normal`;
  }
  if (formattedRating >= 5 || formattedRating < 8) {
    return `Good`;
  }
  if (formattedRating >= 8 || formattedRating < 10) {
    return `Very good`;
  }
  if (formattedRating >= 10) {
    return `Awesome`;
  }
  return null;
};

const TABS = {
  overview: `Overview`,
  details: `Details`,
  reviews: `Reviews`,
};

class MoviePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: TABS.overview
    };

    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(tab) {
    this.setState({
      activeTab: tab
    });
  }

  render() {
    const {film, onFilmTitleClick, onFilmImgClick} = this.props;
    const {title, posterSrc, movieCoverSrc, genre, yearRelease, description, rating, numberVotes, producer, actors, runTime} = film;
    const ratingLevel = getRatingLevel(rating);
    const listTabs = Object.values(TABS);
    const {activeTab} = this.state;

    return <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={posterSrc} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{yearRelease}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={movieCoverSrc} alt={title} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <Tabs
                  activeTab={activeTab}
                  listTabs={listTabs}
                  onTabClick={this.handleTabClick}
                />
              </nav>

              {activeTab === TABS.overview &&
              <React.Fragment>
                <div className="movie-rating">
                  <div className="movie-rating__score">{rating}</div>
                  <p className="movie-rating__meta">
                    <span className="movie-rating__level">{ratingLevel}</span>
                    <span className="movie-rating__count">{numberVotes} ratings</span>
                  </p>
                </div>
                <div className="movie-card__text">
                  <p>{description}</p>

                  <p className="movie-card__director"><strong>Director: {producer}</strong></p>

                  <p className="movie-card__starring"><strong>Starring: {actors.join(`, `)}</strong></p>
                </div>
              </React.Fragment>}

              {activeTab === TABS.details &&
                <div className="movie-card__text movie-card__row">
                  <div className="movie-card__text-col">
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Director</strong>
                      <span className="movie-card__details-value">{producer}</span>
                    </p>
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Starring</strong>
                      <span className="movie-card__details-value">
                        {actors.map((actor, i, arr)=>{
                          return <React.Fragment
                            key={actor}>
                            {actor}{i === arr.length - 1 ? `` : `,`} <br />
                          </React.Fragment>;
                        })}
                      </span>
                    </p>
                  </div>

                  <div className="movie-card__text-col">
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Run Time</strong>
                      <span className="movie-card__details-value">{runTime}</span>
                    </p>
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Genre</strong>
                      <span className="movie-card__details-value">{genre}</span>
                    </p>
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Released</strong>
                      <span className="movie-card__details-value">{yearRelease}</span>
                    </p>
                  </div>
                </div>}

              {activeTab === TABS.reviews &&
                <div className="movie-card__reviews movie-card__row">
                  <div className="movie-card__reviews-col">
                    <div className="review">
                      <blockquote className="review__quote">
                        <p className="review__text">Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.</p>

                        <footer className="review__details">
                          <cite className="review__author">Kate Muir</cite>
                          <time className="review__date" dateTime="2016-12-24">December 24, 2016</time>
                        </footer>
                      </blockquote>

                      <div className="review__rating">8,9</div>
                    </div>

                    <div className="review">
                      <blockquote className="review__quote">
                        <p className="review__text">Anderson&apos;s films are too precious for some, but for those of us willing to lose ourselves in them, they&apos;re a delight. &quot;The Grand Budapest Hotel&quot; is no different, except that he has added a hint of gravitas to the mix, improving the recipe.</p>

                        <footer className="review__details">
                          <cite className="review__author">Bill Goodykoontz</cite>
                          <time className="review__date" dateTime="2015-11-18">November 18, 2015</time>
                        </footer>
                      </blockquote>

                      <div className="review__rating">8,0</div>
                    </div>

                    <div className="review">
                      <blockquote className="review__quote">
                        <p className="review__text">I didn&apos;t find it amusing, and while I can appreciate the creativity, it&apos;s an hour and 40 minutes I wish I could take back.</p>

                        <footer className="review__details">
                          <cite className="review__author">Amanda Greever</cite>
                          <time className="review__date" dateTime="2015-11-18">November 18, 2015</time>
                        </footer>
                      </blockquote>

                      <div className="review__rating">8,0</div>
                    </div>
                  </div>
                  <div className="movie-card__reviews-col">
                    <div className="review">
                      <blockquote className="review__quote">
                        <p className="review__text">The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.</p>

                        <footer className="review__details">
                          <cite className="review__author">Matthew Lickona</cite>
                          <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
                        </footer>
                      </blockquote>

                      <div className="review__rating">7,2</div>
                    </div>

                  </div>
                </div>
              }

            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__movies-list">
            <MovieList
              onFilmTitleClick={onFilmTitleClick}
              onFilmImgClick={onFilmImgClick}
              genre={genre}
            />
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>;
  }
}

MoviePage.propTypes = {
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
    runTime: PropTypes.string.isRequired,
  }).isRequired,
  onFilmTitleClick: PropTypes.func.isRequired,
  onFilmImgClick: PropTypes.func.isRequired,
};

export default MoviePage;

