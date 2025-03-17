import { useState, useEffect } from 'react'
import { MovieProvider } from './contexts'
import { MovieForm, MovieItem} from './components'


function App() {

  const [movies, setMovies] = useState([])

  
  
  const addMovie = (movie) => {
    //console.log(movie)
    setMovies((prevMovies) => [ {id:Date.now(), ...movie},...prevMovies])
  }

  const updateMovie = (id, movie) => {
    //console.log(movie)
    setMovies((prevMovies) => prevMovies.map((eachMovie) => (eachMovie.id === id ? movie : eachMovie)))

  }
  
 

  const deleteMovie = (id) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id))
  }

  const toggleMovie = (id) => {
    setMovies((prevMovies) => prevMovies.map((eachMovie) => eachMovie.id === id ? { ...eachMovie , watched: !eachMovie.watched} : eachMovie))
  }

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem("movies"))
    console.log("Retrieved movies from local storage:", movies);


    if (movies && movies.length > 0) {
      setMovies(movies)
    }
   
  }, [])

  useEffect(() => {
    console.log("Saving movies to local storage:", movies);

    localStorage.setItem("movies", JSON.stringify(movies))
  }, [movies])
  


  return (
    <MovieProvider value={{ movies, addMovie, deleteMovie, updateMovie, toggleMovie }}>
  <div className="bg-gray-900 text-white font-sans min-h-screen flex flex-col">
    {/* Header */}
    <header className="bg-gray-800 py-4 shadow-lg">
      <div className="w-full max-w-3xl mx-auto text-center px-4 sm:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-purple-400">Movie Tracker</h1>
        <p className="text-sm text-gray-400">Keep track of your favorite movies!</p>
      </div>
    </header>

    {/* Main Content */}
    <main className="flex-grow w-full max-w-4xl mx-auto px-4 sm:px-8 py-8">
      {/* Add Movie Section */}
      <MovieForm />

      <div className="my-8"></div>

      {/* Movies List - Responsive Grid */}
      <div >
        {movies.map((movie) => (
          <div key={movie.id} className="w-full">
            <MovieItem movie={movie} />
          </div>
        ))}
      </div>
    </main>

    {/* Footer */}
    <footer className="bg-gray-800 py-4 text-center text-gray-400">
      © 2024 Movie Tracker. All rights reserved.
    </footer>
  </div>
</MovieProvider>

)
}  

export default App
