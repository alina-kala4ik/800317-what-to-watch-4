import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {promotionTitle, promotionGenre, promotionReleaseDate} = props;

  return <Main
    promotionTitle={promotionTitle}
    promotionGenre={promotionGenre}
    promotionReleaseDate={promotionReleaseDate}
  />;
};

export default App;
