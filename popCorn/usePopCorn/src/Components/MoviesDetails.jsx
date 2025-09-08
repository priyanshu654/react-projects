import { useEffect, useRef, useState } from "react";
import Loader from "./Loader";
import StarRating from "./StarRating";
const KEY = "f84fc31d";
export default function MoviesDetails({
  selectedId,
  setSelectedId,
  watched,
  HandleAddMovies,
}) {
  const [movies, setMovies] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState(0);
  useEffect(
    function () {
      async function getMovies() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        const data = await res.json();
        //console.log(data);
        setMovies(data);
        setIsLoading(false);
      }
      getMovies();
    },
    [selectedId]
  );

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movies;

  //hma yha par ek object bna k data bhej rhe hai taaki watched section update ho jaae..
  function AddWatchedMovies() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      userRating,
      runtime: Number(runtime.split(" ").at(0)),
      countRating:countRef.current,
    };
    HandleAddMovies(newWatchedMovie);
    setSelectedId(null);
  }
 
  const isWatched = watched.map((movies) => movies.imdbID).includes(selectedId);
  const watchedRating = watched.find(
    (movies) => movies.imdbID == selectedId
  )?.userRating;

  useEffect(
    function () {
      if (!title) return;
      document.title = `movie | ${title} `;

      return function () {
        document.title = "usePopCorn";
        console.log(`title was ${title}`);
        //if this function return after the component is destroyed with all its states then how it remember the tilte
        //itis by important concept in javascript which is "closure";
      };
    },
    [title]
  );

  useEffect(
    function () {
      function callback(e) {
        if (e.code === "Escape") {
          setSelectedId(null);
        }
      }

      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [selectedId]
  );

  const countRef=useRef(0);

  useEffect(function(){
    if(userRating)countRef.current=countRef.current=1;
  },[userRating])

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={() => setSelectedId(null)}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${movies} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐️</span>
                {imdbRating} IMDb rating
              </p>
            </div>
          </header>
          <section>
            {!isWatched ? (
              <div className="rating">
                <StarRating
                  maxStars={10}
                  color="yellow"
                  size={30}
                  setUserRating={setUserRating}
                />
                {userRating > 0 && (
                  <button className="btn-add" onClick={AddWatchedMovies}>
                    + Add to list
                  </button>
                )}
              </div>
            ) : (
              <div className="rating">
                <p>
                  You rated this movie {watchedRating}
                  <span>⭐️</span>
                </p>
              </div>
            )}

            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}
