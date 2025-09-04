import React, { useState } from "react";
import axios from "axios";
import MovieList from "./components/MovieList";

const App = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;
    setLoading(true);
    try {
      const res = await axios.get(`https://www.omdbapi.com/?apikey=d319cee5&s=${query}`);
      setMovies(res.data.Search || []);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white p-6">
      <h1 className="text-5xl font-extrabold mb-8 text-center tracking-wide">🎬 Movie Explorer</h1>

      <form onSubmit={handleSearch} className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search for movies..."
          className="w-96 p-4 rounded-l-full text-black outline-none focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50 transition"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="bg-pink-500 hover:bg-pink-600 px-6 rounded-r-full font-bold transition transform hover:scale-105">
          Search
        </button>
      </form>

      {loading ? (
        <p className="text-center text-xl animate-pulse">Loading...</p>
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
};

export default App;
