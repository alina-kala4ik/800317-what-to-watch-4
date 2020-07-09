import React from "react";
import PropTypes from 'prop-types';
import TabsComponent from "./../tabs/tabs.jsx";
import TabOverview from "./../tab-overview/tab-overview.jsx";
import TabDetails from "./../tab-details/tab-details.jsx";
import TabReviews from "./../tab-reviews/tab-reviews.jsx";
import {Tabs} from "./../../utils.js";

const AboutFilm = (props) => {
  const {activeItem: activeTab, setActiveItem: onTabClick, film} = props;
  const listTabs = Object.values(Tabs);

  return <div className="movie-card__desc">
    <nav className="movie-nav movie-card__nav">
      <TabsComponent
        activeTab={activeTab}
        listTabs={listTabs}
        onTabClick={onTabClick}
      />
    </nav>

    {activeTab === Tabs.OVERVIEW &&
    <TabOverview film={film}/>
    }

    {activeTab === Tabs.DETAILS &&
    <TabDetails film={film} />
    }

    {activeTab === Tabs.REVIEWS &&
    <TabReviews />
    }

  </div>;
};

AboutFilm.propTypes = {
  activeItem: PropTypes.string.isRequired,
  setActiveItem: PropTypes.func.isRequired,
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    screenshotSrc: PropTypes.string.isRequired,
    posterSrc: PropTypes.string.isRequired,
    movieCoverSrc: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    yearRelease: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    numberVotes: PropTypes.number.isRequired,
    producer: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string).isRequired,
    runTime: PropTypes.number.isRequired,
  }).isRequired,
};

export default AboutFilm;
