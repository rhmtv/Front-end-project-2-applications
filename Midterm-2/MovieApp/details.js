const apiKey = 'api_key=1cf50e6248dc270629e802686245c2c8';
const baseUrl = 'https://api.themoviedb.org/3';
const imgPath = 'https://image.tmdb.org/t/p/w500';

const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('movie_id');
const movieDetailsUrl = `${baseUrl}/movie/${movieId}?${apiKey}`;
const movieCreditsUrl = `${baseUrl}/movie/${movieId}/credits?${apiKey}`;
const movieVideosUrl = `${baseUrl}/movie/${movieId}/videos?${apiKey}`;

async function fetchMovieData() {
  try {
    const movieDetailsRes = await fetch(movieDetailsUrl);
    const movieDetails = await movieDetailsRes.json();

    const movieCreditsRes = await fetch(movieCreditsUrl);
    const movieCredits = await movieCreditsRes.json();

    const movieVideosRes = await fetch(movieVideosUrl);
    const movieVideos = await movieVideosRes.json();

    displayMovieDetails(movieDetails);
    displayCast(movieCredits.cast);
    displayVideos(movieVideos.results);
  } catch (error) {
    console.error('Error fetching movie data:', error);
  }
}

function displayMovieDetails(movie) {
  const movieTitle = document.getElementById('movie-title');
  const moviePoster = document.getElementById('poster');
  const movieRating = document.getElementById('movie-rating');
  const movieReleaseDate = document.getElementById('movie-release-date');
  const movieOverview = document.getElementById('movie-overview');
  const movieGenres = document.getElementById('movie-genres');

  movieTitle.textContent = movie.title;
  moviePoster.src = imgPath + movie.poster_path;
  movieRating.textContent = `Rating: ${movie.vote_average}`;
  movieReleaseDate.textContent = `Release Date: ${movie.release_date}`;
  movieOverview.textContent = movie.overview;

  movieGenres.innerHTML = movie.genres
    .map(genre => `<span class="genre">${genre.name}</span>`)
    .join('');
}

function displayCast(cast) {
  const castList = document.getElementById('cast-list');
  castList.innerHTML = cast
    .slice(0, 6)
    .map(actor => `
      <div class="cast-card">
        <img src="${imgPath + actor.profile_path}" alt="${actor.name}">
        <p>${actor.name}</p>
        <p>${actor.character}</p>
      </div>
    `)
    .join('');
}

function displayVideos(videos) {
  const videoContainer = document.getElementById('video-container');
  if (videos.length > 0) {
    videoContainer.innerHTML = videos
      .map(video => `
        <iframe src="https://www.youtube.com/embed/${video.key}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      `)
      .join('');
  } else {
    videoContainer.innerHTML = '<p>No videos available</p>';
  }
}

document.getElementById('save-btn').addEventListener('click', () => {
  addToWatchlist();
});

function addToWatchlist() {
  const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
  const movieTitle = document.getElementById('movie-title').textContent;
  const moviePoster = document.getElementById('poster').src;
  const movieOverview = document.getElementById('movie-overview').textContent;

  const movie = {
    title: movieTitle,
    poster: moviePoster,
    overview: movieOverview
  };

  if (!watchlist.some(item => item.title === movieTitle)) {
    watchlist.push(movie);
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
    alert(`${movieTitle} has been added to your watchlist!`);
  } else {
    alert(`${movieTitle} is already in your watchlist.`);
  }
}

fetchMovieData();
