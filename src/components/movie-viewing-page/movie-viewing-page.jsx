import React from "react";

const MovieViewingPage = () => {

  return <div className="player">
    <video
      src="http://data01-cdn.datalock.ru/fi2lm/a72af25b64b3af2131ec43ec89adf5e4/7f_Altered.Carbon.S01E01.720p.WEB.rus.LostFilm.TV.a1.06.02.18.mp4"
      className="player__video"
      poster="img/player-poster.jpg"
      autoPlay={true}
    >
    </video>

    <button type="button" className="player__exit">Exit</button>

    <div className="player__controls">
      <div className="player__controls-row">
        <div className="player__time">
          <progress className="player__progress" value="30" max="100"></progress>
          <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
        </div>
        <div className="player__time-value">1:30:29</div>
      </div>

      <div className="player__controls-row">
        <button type="button" className="player__play">
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </button>
        <div className="player__name">Transpotting</div>

        <button type="button" className="player__full-screen">
          <svg viewBox="0 0 27 27" width="27" height="27">
            <use xlinkHref="#full-screen"></use>
          </svg>
          <span>Full screen</span>
        </button>
      </div>
    </div>
  </div>;
};

export default MovieViewingPage;

