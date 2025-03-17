// MovieForm.js
import React, { useState } from 'react';
import { useMovie } from '../../contexts';


function MovieForm () {



  const [movie, setMovie] = useState("")
  const [genre, setGenre] = useState("");

 

  const {addMovie} = useMovie()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!movie || !genre) return
    
    addMovie({movie, genre, watched: false})
    setMovie("")
    setGenre("")
}
  
return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-purple-300">Add a Movie</h2>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        {/* Title Input */}
        <div>
          <input
            type="text"
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
            placeholder="Movie"
            className="w-full px-4 py-2 bg-gray-700 text-white placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />

          

        </div>

        {/* Genre Input */}
        <div>
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            placeholder="Genre"
            className="w-full px-4 py-2 bg-gray-700 text-white placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-6 py-2 bg-purple-500 text-white font-medium rounded hover:bg-purple-600 transition"
        >
          Add Movie
        </button>
      </form>
    </div>
  );
}
 

export default MovieForm;
