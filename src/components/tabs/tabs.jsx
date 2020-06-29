import React from "react";
import PropTypes from "prop-types";

const Tabs = (props) => {
  const {activeTab, listTabs, onTabClick} = props;

  return <ul className="movie-nav__list">
    {listTabs.map((tab) => {
      const activeClass = (tab === activeTab ? `movie-nav__item--active` : ``);

      return <li key={tab} className={`movie-nav__item ${activeClass}`}>
        <a
          href="#"
          className="movie-nav__link"
          onClick={()=>{
            onTabClick(tab);
          }}
        >
          {tab}
        </a>
      </li>;
    })}
  </ul>;
};

Tabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  listTabs: PropTypes.arrayOf(
      PropTypes.string
  ).isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export default Tabs;
