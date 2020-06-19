import React from "react";
import Main from "../main/main.jsx";
import PropTypes from 'prop-types';

const App = (props) => {
  const {promotionTitle, promotionGenre, promotionReleaseDate, films} = props;

  return <Main
    promotionTitle={promotionTitle}
    promotionGenre={promotionGenre}
    promotionReleaseDate={promotionReleaseDate}
    films={films}
    onFilmTitleClick={()=>{}}
  />;
};

App.propTypes = {
  promotionTitle: PropTypes.string.isRequired,
  promotionGenre: PropTypes.string.isRequired,
  promotionReleaseDate: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  })).isRequired,
};

export default App;
