import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState("")
  const [movies, setMovies] = useState([])

  async function getMovieData(query){
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=7d524e1ffde1725b4b0130c5f81b7c6b&language=en-US&query=${query}&page=1&include_adult=false`)
  
    if(response.status !== 200){
      throw new Error("Somthing went wrong")
    }
    const data = await response.json()
    return data.results;
  }

  function handleSearch(event){
    setValue(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault(); //Disables default behavior in browser
    getMovieData(value).then((data) => setMovies(data))
  }

  return (
    <div className="App">
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor='Search'>
          Search:
        </label>
        <input type="text" id="search" value={value} onChange={handleSearch}/>
        <button>Find</button>
      </form>

      {movies.map((movie) => (
        <div style={{'border': '1px solid lightcoral', 'borderRadius': '4px', 'padding': '10px', 'margin': '10px'}} key={movie.id}>
          <h2>{movie.title}</h2>
          
          {movie.poster_path ? (
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`poster of ${movie.original_title}`}/>
          ) : (
            <h2>No poster</h2>
          )}
          
        </div>
      ))}
    </div>
  );
}

export default App;
