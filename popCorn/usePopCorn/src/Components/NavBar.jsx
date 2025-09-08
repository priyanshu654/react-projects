import { useEffect, useRef } from "react";

export default function NavBar({query,setQuery,movies,setMovies,originalMovies}) {

  const inputRef=useRef(null);
  useEffect(function(){
    console.log(inputRef.current);
    function callBack(e){
      if(document.activeElement===inputRef.current) return

      if(e.code==="Enter"){
        inputRef.current.focus();
        setQuery("");
      }
    }

    document.addEventListener("keydown",callBack);

    return function(){
      document.removeEventListener("keydown",callBack);
    }
    
  },[])
  
  return (
    <>
      <nav className="nav-bar">
        <div className="logo">
          <span role="img">🍿</span>
          <h1>usePopcorn</h1>
        </div>
        <input
          className="search"
          type="text"
          placeholder="Search movies..."
          value={query}
          ref={inputRef}
          onChange={(e) => {
            const value = e.target.value;
            setQuery(value);
            
            {
              setMovies((prevMovies) =>
                prevMovies.filter((movie) =>
                  movie.Title.toLowerCase().includes(value.toLowerCase())
                )
              );
            }
            
          }}
        />
        <p className="num-results">
          Found <strong>{movies.length}</strong> results
        </p>
      </nav>
    </>
  );
}
