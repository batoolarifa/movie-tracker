// MovieItem.js
import React from 'react';
import { useMovie } from '../../contexts';
import { useState } from 'react';

function MovieItem ({ movie}) {

   
    const [isMovieEditable , setIsMovieEditable]  = useState(false)
    const { deleteMovie, updateMovie, toggleMovie } = useMovie()
    const [movieMsg , setMovieMsg] = useState( movie.movie)
    
    //console.log("Movie message in MovieItem", movieMsg)

    const editMovie = () => {
        updateMovie(movie.id, {...movie, movie: movieMsg})
        setIsMovieEditable(false)
    }

    const toggleCompleted = () => {
        toggleMovie(movie.id)
    }


  return (
    <div className="bg-gray-800 p-3 rounded-lg shadow-lg mb-4 flex items-center justify-between overflow-hidden">
    {/* Left side: Movie details */}
    <div className="flex flex-col space-y-2">
      {/* Title or Edit input */}
      {isMovieEditable ? (
        <input
          type="text"
          value={movieMsg}
          onChange={(e) => setMovieMsg(e.target.value)}
          readOnly={!isMovieEditable}
          
          className="px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      ) : (
        <h3
            className={`text-xl ${
              movie.watched ? 'line-through text-gray-400' : 'text-purple-300'
            }`}> {movie.movie}</h3>
      )}

      {/* Genre */}
      <p  className={`text-sm italic ${
          movie.watched ? 'opacity-50 text-gray-400' : 'text-purple-400'
        }`}>{movie.genre}</p>

      {/* Watched Status */}
      <p  className={`text-sm ${movie.watched ? 'text-green-500' : 'text-gray-400'}`}>
        
        {movie.watched ? 'Watch' : 'Unwatched'}
        

      </p>
    </div>

    {/* Right side: Actions */}
    <div className="flex space-x-2">
      {/* Toggle watched status */}
      <button
        onClick={toggleCompleted}
        className={`px-4 py-2  rounded text-white ${movie.watched ? 'bg-green-600' : 'bg-yellow-600'} hover:bg-opacity-75`}
      >
        {movie.watched ? 'Unwatch' : 'Watch'}
        
      </button>

      {/* Edit button */}
      
      <button
        onClick={() => 
        {
            if (isMovieEditable.watched) return;

            if(isMovieEditable){
                editMovie();

            }
            else  setIsMovieEditable((prev) => !prev)
        }}
        className="ml-3 px-4 py-2 rounded sm:w-auto text-white bg-blue-600 hover:bg-blue-700"
      >
        {isMovieEditable ? 'Save' : 'Edit'}
       
      </button>

      {/* Delete button */}
      <button
        onClick={() => deleteMovie(movie.id)}
        className="px-4 py-2 rounded text-white bg-red-600 hover:bg-red-700"
      >
        Delete
      </button>
    </div>
  </div>
);  
}

export default MovieItem;


