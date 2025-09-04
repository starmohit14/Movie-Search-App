import React, { useState, useEffect } from "react";

const MovieCard = ({ movie }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div
        className="bg-white/10 backdrop-blur-md text-white rounded-xl shadow-lg overflow-hidden w-56 cursor-pointer transform hover:scale-105 transition-all duration-300"
        onClick={() => setShowDetails(true)}
      >
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x300"}
          alt={movie.Title}
          className="w-full h-80 object-cover rounded-t-xl"
        />
        <div className="p-4 text-center">
          <h3 className="font-bold text-lg">{movie.Title}</h3>
          <p className="text-gray-300">{movie.Year}</p>
        </div>
      </div>

      {/* Modal */}
      {showDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-xl w-full max-w-lg p-6 relative text-white shadow-2xl animate-fadeIn">
            <button
              className="absolute top-3 right-4 text-3xl font-bold hover:text-pink-500 transition"
              onClick={() => setShowDetails(false)}
            >
              &times;
            </button>
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x300"}
              alt={movie.Title}
              className="w-full h-96 object-cover rounded-lg mb-4"
            />
            <h2 className="font-bold text-2xl mb-2">{movie.Title}</h2>
            <p className="text-gray-300">Year: {movie.Year}</p>
            <p className="text-gray-300">Type: {movie.Type}</p>
            <p className="text-gray-300">IMDB ID: {movie.imdbID}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieCard;
