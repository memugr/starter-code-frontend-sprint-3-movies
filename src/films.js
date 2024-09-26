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
  let scoreDirector = result.reduce((total, movie) => (total + (movie.score || 0), 0))

  // Average score
  let averageScore
  if (result.length > 0) {
    averageScore = scoreDirector / result.length
  } else {
    averageScore = 0
  }

  console.log(`Exercice 3 - Average films of ${director}: `, averageScore.toFixed(2))
  return averageScore.toFixed(2)
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  let result = movies.map(movie => movie.title)
  result.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
  let order = result.slice(0, 20)
  
  console.log(`Exercice 4`, order)
  return order
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

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
