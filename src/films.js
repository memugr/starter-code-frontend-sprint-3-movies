// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result = movies.map(movie => movie.director);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  let result = movies.filter(movie => movie.director === director)
  return result
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  // Filter movies from given director and calculate total score
  let result = getMoviesFromDirector(movies, director)
  let scoreDirector = result.reduce((total, movie) => total + movie.score, 0)

  // Average score
  let averageScore = result.length > 0 ? scoreDirector / result.length : 0
  return parseFloat(averageScore.toFixed(2))
}

// Exercise 4: Alphabetic order by title 
function orderAlphabetically(movies) {
  let result = movies.map(movie => movie.title)
    .sort() // sorting alphabetically
    .slice(0, 20) // returns the top 20
  return result
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  let result = [...movies] // A copy of the array

  result.sort((a, b) => {
    if (a.year === b.year) {
      // Sorting the titles alphabetically if the years of movies are the same
      return a.title.localeCompare(b.title)
    }
    return a.year - b.year
  });

  return result
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
  // Filter movies that match the specified genre and have a valid score
  let movieGenre = movies.filter(movie => movie.genre.includes(genre) && typeof movie.score === 'number');

  // Calculate total score & average score
  let totalScore = movieGenre.reduce((total, movie) => total + movie.score, 0);
  let averageScore = movieGenre.length > 0 ? totalScore / movieGenre.length : 0;

  // Return the average score rounded to 2 decimal places
  return parseFloat(averageScore.toFixed(2));
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  let movieDuration = movies.map(movie => {
    
    // Initial validation of duration
    if (!movie.duration || movie.duration.trim() === "") {
      movie.duration = "0min"
    }

    // Seperate hours and minutes of duration
    let durationSection = movie.duration.split(" ")

    // Start the minute counting as 0
    let totalMinutes = 0

    // Loop throught every part and increment 
    for (const part of durationSection) {
      switch (true) {
        case part.includes("h"):
          totalMinutes += parseInt(part) * 60
          break;
        case part.includes("min"):
          totalMinutes += parseInt(part)
          break;
      }
    }

   // Return the updated movie object with the converted duration in minutes
    return {
      ...movie,
      duration: totalMinutes
    }
  })

  // Return the array with all movies with durations converted
  return movieDuration
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  // Filter movies by specified year & sorting in descending order
  let yearsMovies = movies.filter(movie => movie.year === year)
    .sort((a, b) => b.score - a.score)
  
  // Get highest score and return the movies with the highest score
  let highestScore = yearsMovies.length > 0 ? yearsMovies[0].score : null
  return yearsMovies.filter(movie => movie.score === highestScore)
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}