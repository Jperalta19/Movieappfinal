import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LastPost from './components/lastPost';
import AllMovies from './components/AllMovies';


const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
      try {
        const url = 'http://www.omdbapi.com/?s=avengers&apikey=a02eb59c';
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.Search);
       // console.log (movies);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setLoading(false);
      }
    };

  useEffect(() => {  
    fetchMovies();
  },[]);

  if (loading) {
    return <div className="text-center mt-5">Loading...</div>;
  }


  return (
    <div className="container mt-2">
      <h1 className="mb-4">Movie Showcase</h1>

      <section className="mb-5">
        <LastPost movies={movies}/>
      </section>

      <section style={{ width: '22rem' }}>
        <AllMovies movies={movies}/>
      </section>
    </div>
  );
};

export default App;

