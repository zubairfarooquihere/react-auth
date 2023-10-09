import React, { useRef } from 'react';

import classes from './AddMovie.module.css';

function AddMovie(props) {
  const titleRef = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const movie = {
      title: titleRef.current.value,
    };

    props.onAddMovie(movie);
    
    titleRef.current.value = '';
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' ref={titleRef} />
      </div>
      <button>Add Movie</button>
    </form>
  );
}

export default AddMovie;