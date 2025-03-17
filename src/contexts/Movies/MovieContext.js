import { createContext, useContext } from "react";

export const MovieContext = createContext({
    movies: [
        {
          id: 1,
          movie: "Chennai Express",
          genre: "Action, Comedy",
          watched: false
        }
    ],
    addMovie: (movie) => {},
    deleteMovie: (id) => {},
    updateMovie: (id, movie) => {},
    toggleMovie: (id) => {},
})

export const MovieProvider = MovieContext.Provider


export const useMovie = () => {
    return useContext(MovieContext)
}