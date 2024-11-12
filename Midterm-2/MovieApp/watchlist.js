document.addEventListener('DOMContentLoaded', () => {
    const watchlistItems = JSON.parse(localStorage.getItem('watchlist')) || [];
    const watchlistContainer = document.getElementById('watchlist-items');
  
    if (watchlistItems.length === 0) {
      watchlistContainer.innerHTML = '<p>Your watchlist is empty.</p>';
    } else {
      watchlistItems.forEach((item, index) => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('watchlist-item');
        movieElement.innerHTML = `
          <img src="${item.poster}" alt="${item.title}" />
          <h3>${item.title}</h3>
          <p>${item.overview}</p>
          <button class="remove-btn" data-index="${index}">X</button>
        `;
  
        // Add the movie element to the watchlist container
        watchlistContainer.appendChild(movieElement);
  
        // Add event listener for the remove button
        const removeBtn = movieElement.querySelector('.remove-btn');
        removeBtn.addEventListener('click', () => {
          removeMovieFromWatchlist(index);
        });
      });
    }
  });
  
  // Function to remove a movie from the watchlist
  function removeMovieFromWatchlist(index) {
    // Get the current watchlist from localStorage
    let watchlistItems = JSON.parse(localStorage.getItem('watchlist')) || [];
  
    // Remove the movie at the specified index
    watchlistItems.splice(index, 1);
  
    // Update the watchlist in localStorage
    localStorage.setItem('watchlist', JSON.stringify(watchlistItems));
  
    // Reload the page to update the UI
    location.reload();
  }
  