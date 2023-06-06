import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
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
      const response = await fetch('https://movie-http-21f07-default-rtdb.firebaseio.com/movies.json');
      if(!response.ok) {
        throw new Error('Something went wrong!');
      }
    
      const data = await response.json();
      const loadedMovies = [];

      for(const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate
        });
      }
      setMovies(loadedMovies);
      setNoMovies(loadedMovies.length === 0);
    } catch(e) {
      setError(e.message)
    }
      setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler])

  const addMovieHandler = async (movie) => {
    try {
        const response = await fetch('https://movie-http-21f07-default-rtdb.firebaseio.com/movies.json',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(movie)
      });  
      if(!response.ok) {
        throw new Error('Something went wrong!');
      } 
      const data = await response.json();
    } catch(e) {
      setError(e.message)
    }
    
  }

  let content;

  if(isLoading) { 
    content = <div className='loader'>{isLoading && loader}</div>;
  }

  if(!isLoading) { 
    content = <div><MoviesList movies={movies} /></div>
  }

  if(!isLoading && !error && noMovies) {
    content = <div>No movies found!</div>
  }

  if(!isLoading && error) {
    content = <div>{error}</div>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler}/>
      <section/>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
