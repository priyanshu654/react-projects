import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import MoviesList from "./Components/MoviesList";
import WatchedList from "./Components/WatchedList";
import Loader from "./Components/Loader";
import ErrorMessage from "./Components/ErrorMessage";
import MoviesDetails from "./Components/MoviesDetails";
import Box from "./Components/Box";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
const KEY = "f84fc31d";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [originalMovies] = useState(tempMovieData);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  // fetch( `http://www.omdbapi.com/?apikey=${KEY}&s=interstellar`)
  // .then((res)=>res.json())
  // .then((data)=>setMovies(data.Search)); //aise direct fetch karne par multiple fetch call hoga ... useEffect use karna hoga

  useEffect(() => {
    const controller=new AbortController();
    async function fetchMovies() {
      
      try {
        setError("");
        setIsLoading(true); // Start loading
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        if (!data.Search) {
          setMovies([]);
          setError("Movies Not Found");
          return;
        }
        setMovies(data.Search); // Handle if no movies are found
        setError("");
      } catch (error) {
        if(error.name!="AbortError"){
          console.error("Failed to fetch movies:", error);
          setError(error.message);
        }
        
      } finally {
        setIsLoading(false); // End loading
      }
    }
    if (query.length < 3) {
      setError("");
      setMovies([]);
      return;
    }
    fetchMovies();
    //cleanup function

    return function(){
      controller.abort();
    }
  }, [query]);

  // useEffect(() => {
  //   async function fetchMovies() {
  //     try {
  //       setError(""); // Clear any previous errors
  //       setIsLoading(true); // Start loading

  //       const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`);

  //       // Handle non-OK HTTP status
  //       if (!res.ok) {
  //         throw new Error(`Error ${res.status}: ${res.statusText}`);
  //       }

  //       const data = await res.json();

  //       // Handle case when movies are not found
  //       if (!data.Search) {
  //         setMovies([]);
  //         setError("No movies found for your query.");
  //         return;
  //       }

  //       setMovies(data.Search); // Update movies
  //     } catch (error) {
  //       console.error("Failed to fetch movies:", error);
  //       setError(error.message); // Update error message
  //     } finally {
  //       setIsLoading(false); // End loading
  //     }
  //   }

  //   if (query.length < 3) {
  //     setError("");
  //     setMovies([]);
  //     return;
  //   }

  //   fetchMovies();
  // }, [query]);

  console.log(selectedId);

  function HandleAddMovies(movie){
    setWatched((watched)=>[...watched,movie]);
  }
  function handleDeleteWatched(id){
    setWatched((watched)=>watched.filter((movies)=>movies.imdbID!=id));
  }

  return (
    <>
      <NavBar
        query={query}
        setQuery={setQuery}
        movies={movies}
        setMovies={setMovies}
        originalMovies={originalMovies}
      />

      <main className="main">
        {/* {isLoading ? <Loader /> : <MoviesList movies={movies} />} */}
        <Box>
          {isLoading && !error && <Loader />}
          {!isLoading && !error && (
            <MoviesList
              movies={movies}
              setSelectedId={setSelectedId}
              selectedId={selectedId}
            />
          )}
          {error && !isLoading && <ErrorMessage message={error} />}
          {isLoading && error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          {selectedId ? (
            <MoviesDetails
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              watched={watched}
              HandleAddMovies={HandleAddMovies}
            />
          ) : (
            <WatchedList watched={watched} onDeleteWatched={handleDeleteWatched}/>
          )}
        </Box>
      </main>
    </>
  );
}
