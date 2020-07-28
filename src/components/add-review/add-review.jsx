import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Operation, ActionCreator} from "./../../reducer/data/data.js";
import {getFlagCommentSendingError, getFilmById} from "./../../reducer/data/selector.js";
import {Link} from "react-router-dom";
import {Pages} from "./../../utils.js";
import Header from "./../header/header.jsx";

const minCommentLength = 50;
const maxCommentLength = 400;

class AddReview extends PureComponent {
  constructor(props) {
    super(props);

    this.formRef = createRef();
    this.commentRef = createRef();
    this.submitRef = createRef();
    this.formFieldset = createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidUpdate() {
    const {isCommentSendingError} = this.props;

    if (isCommentSendingError) {
      const formFieldset = this.formFieldset.current;
      formFieldset.removeAttribute(`disabled`);
    }
  }

  handleSubmit(evt) {
    const {onSubmit} = this.props;
    const form = this.formRef.current;
    const formData = new FormData(form);
    const formFieldset = this.formFieldset.current;

    formFieldset.setAttribute(`disabled`, `disabled`);

    evt.preventDefault();
    onSubmit({
      rating: formData.get(`rating`),
      comment: formData.get(`review-text`)
    });
  }

  handleInput() {
    const commentInput = this.commentRef.current;
    const submitButton = this.submitRef.current;
    const commentInputValidity = commentInput.checkValidity();

    if (commentInputValidity) {
      submitButton.removeAttribute(`disabled`);
    } else {
      submitButton.setAttribute(`disabled`, `disabled`);
    }
  }

  render() {
    const {isCommentSendingError, film} = this.props;

    if (!film) {
      return null;
    }

    const {movieCoverSrc, title, posterSrc, backgroundColor, id} = film;

    return <section
      className="movie-card movie-card--full"
      style={{backgroundColor: `${backgroundColor}`}}
    >
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={posterSrc} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header isActiveLogoLink>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link
                  to={Pages.FILM.replace(`:id`, id)}
                  className="breadcrumbs__link"
                >
                  {title}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
        </Header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={movieCoverSrc} alt={title} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <fieldset ref={this.formFieldset}>
          <form
            action="#"
            className="add-review__form"
            onSubmit={this.handleSubmit}
            ref={this.formRef}
          >
            <div className="rating">
              <div className="rating__stars">
                <input
                  className="rating__input"
                  id="star-1"
                  type="radio"
                  name="rating"
                  value="1"
                />
                <label className="rating__label" htmlFor="star-1">Rating 1</label>

                <input
                  className="rating__input"
                  id="star-2"
                  type="radio"
                  name="rating"
                  value="2"
                />
                <label className="rating__label" htmlFor="star-2">Rating 2</label>

                <input
                  className="rating__input"
                  id="star-3"
                  type="radio"
                  name="rating"
                  value="3"
                  defaultChecked
                />
                <label className="rating__label" htmlFor="star-3">Rating 3</label>

                <input
                  className="rating__input"
                  id="star-4"
                  type="radio"
                  name="rating"
                  value="4"
                />
                <label className="rating__label" htmlFor="star-4">Rating 4</label>

                <input
                  className="rating__input"
                  id="star-5"
                  type="radio"
                  name="rating"
                  value="5"
                />
                <label className="rating__label" htmlFor="star-5">Rating 5</label>
              </div>
            </div>

            <div className="add-review__text">
              <textarea
                className="add-review__textarea"
                name="review-text"
                id="review-text"
                placeholder="Review text"
                minLength={minCommentLength}
                maxLength={maxCommentLength}
                onInput={this.handleInput}
                ref={this.commentRef}
              >
              </textarea>
              <div className="add-review__submit">
                <button
                  className="add-review__btn"
                  type="submit"
                  disabled="disabled"
                  ref={this.submitRef}
                >
                  Post
                </button>
              </div>

            </div>
            {isCommentSendingError &&
              <div style={{color: `red`}}>Ошибка отправки отзыва</div>
            }

          </form>
        </fieldset>
      </div>

    </section>;
  }

}

AddReview.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isCommentSendingError: PropTypes.bool.isRequired,
  historyProps: PropTypes.object.isRequired,
  film: PropTypes.shape({
    movieCoverSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    posterSrc: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    backgroundColor: PropTypes.string.isRequired,
  })
};

const mapStateToProps = (state, props) => {
  const {historyProps} = props;
  const id = historyProps.match.params.id;

  return {
    isCommentSendingError: getFlagCommentSendingError(state),
    film: getFilmById(state, id),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(commentData) {
    dispatch(Operation.commentPost(1, commentData));
    dispatch(ActionCreator.changeFlagCommentSendingError(false));
  }
});

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
