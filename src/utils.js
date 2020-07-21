const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const Genres = {
  ALL: `All genres`,
  COMEDIES: `Comedies`,
  CRIME: `Crime`,
  DOCUMENTARY: `Documentary`,
  DRAMA: `Drama`,
  HORROR: `Horror`,
  KIDS_FAMILY: `Kids & Family`,
  ROMANCE: `Romance`,
  SCI_FI: `Sci-Fi`,
  THRILLERS: `Thrillers`,
};

const Tabs = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

const Pages = {
  ROOT: `/`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  FILM: `/films/:id?`,
  REVIEW: `/films/:id?/review`,
  PLAYER: `/films/:id?/player`,
};

export {extend, Genres, Tabs, Pages};
