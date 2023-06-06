import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import  { Bars } from 'react-loader-spinner';

import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [noMovies, setNoMovies] = useState(false);
  const [error, setError] = useState(null);

  const loader = <Bars
                    height="50"
                    width="50"
                    color="#230052"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass="wrapper-class"
                    visible={true}
                />
  
  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
  
    try {
      const response = await fetch('https://swapi.dev/api/films/');
      if(!response.ok) {
        throw new Error('Something went wrong!');
      }
    
      const data = await response.json();
      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        }
      });
        setMovies(transformedMovies);
        setNoMovies(transformedMovies.length === 0);
    } catch(e) {
      setError(e.message)
    }
      setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler])

  let content;

  if(isLoading) { 
    content = <p className='loader'>{isLoading && loader}</p>;
  }

  if(!isLoading) { 
    content = <p><MoviesList movies={movies} /></p>
  }

  if(!isLoading && !error && noMovies) {
    content = <p>No movies found!</p>
  }

  if(!isLoading && error) {
    content = <p>{error}</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
