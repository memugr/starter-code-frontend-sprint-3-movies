// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result = movies.map(movie => movie.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  let result = movies.filter(movie => movie.director === director)
  console.log(`Exercice 2 - Films from ${director}: `, result)
  return result
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  // Filter movies from given director and calculate total score
  let result = movies.filter(movie => movie.director === director)
  let scoreDirector = result.reduce((total, movie) => total + movie.score, 0)

  // Average score
  let averageScore = result.length > 0 ? scoreDirector / result.length : 0
  console.log(`Exercice 3 `, averageScore.toFixed(2))
  return parseFloat(averageScore.toFixed(2))
}

// Exercise 4: Alphabetic order by title 
function orderAlphabetically(movies) {
  let result = movies.map(movie => movie.title)
  result.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
  let order = result.slice(0, 20)

  console.log(`Exercice 4`, order)
  return order
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

  console.log("Exercise 5", result)
  return result
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {
  // Filter all genres and calculate the score
  let movieGenre = movies.filter(movie => movie.genre.includes(genre))
  let totalScore = movieGenre.reduce((total, movie) => total + movie.genre, 0)

  // Average score
  let averageScore = movieGenre.length > 0 ? totalScore / movieGenre.length : 0
  return parseFloat(averageScore.toFixed(2))
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
  console.log("Exercise 7 - Duration in minutes", movieDuration)
  return movieDuration
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  let yearsMovies = movies.filter(movie => movie.year === year)
  yearsMovies.sort((a, b) => b.score - a.score)
  let highestScore = yearsMovies.length > 0 ? yearsMovies[0].score : null
  let bestFilms = yearsMovies.filter(movie => movie.score === highestScore)
  return bestFilms
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
