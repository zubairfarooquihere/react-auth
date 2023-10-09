import React, { useState, useEffect, useCallback } from 'react';

import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/AuthDetails';
import { useSelector } from 'react-redux';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie'

function App() {
  const userSign = useSelector((state) => state.userLogin);
  console.log(userSign);

  const [movies, setMovies] = useState([]);

  const fetchMoviesHandler = useCallback(async () => {
    try {
      const url = 'https://react-http-c6acd-default-rtdb.firebaseio.com/' + userSign.uid + '.json';
      console.log(url);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedMovies);
    } catch (error) {

    }
  }, [userSign.uid]);

  async function addMovieHandler(movie) {
    const url = 'https://react-http-c6acd-default-rtdb.firebaseio.com/' + userSign.uid + '.json';
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  return (  
    <div style={{margin: '0 auto', textAlign: 'center'}}>
      {!userSign.login && <SignIn />}
      {!userSign.login && <SignUp />}
      <AuthDetails />
      {userSign.login && <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>}
      {userSign.login && <section>{content}</section>}
    </div>
  );
}

export default App;

//
//npm install firebase
//youtube video below
//https://www.youtube.com/watch?v=Vv_Oi7zPPTw