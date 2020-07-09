const adapter = (backendData) => {
  return backendData.map((film) => ({
    id: film.id,
    title: film.name,
    screenshotSrc: film.preview_image,
    posterSrc: film.background_image,
    movieCoverSrc: film.poster_image,
    genre: film.genre,
    yearRelease: film.released,
    description: film.description,
    rating: film.rating,
    numberVotes: film.scores_count,
    producer: film.director,
    actors: film.starring,
    runTime: film.run_time,
    videoSrc: film.video_link,
    previewVideoLink: film.preview_video_link,
    backgroundColor: film.background_color,
    isFavorite: film.is_favorite,
  }));
};

export {adapter};
