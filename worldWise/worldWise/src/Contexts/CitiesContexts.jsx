import { createContext, useContext, useEffect, useState } from "react";

const CitiesContexts = createContext();
const URL = "http://localhost:9000/cities";
function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(URL);
        if (!res.ok) {
          throw new Error("Failed to fetch cities");
        }
        const data = await res.json();
        console.log(data);
        setCities(data);
      } catch (error) {
        alert("Error occurred: " + error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  
    async function fetchCurrentCities(id) {
      try {
        setIsLoading(true);
        const res = await fetch(`http://localhost:9000/cities/${id}`);
        if (!res.ok) {
          throw new Error("failed to fetch cuurrent cuntry");
        }
        const data = await res.json();
        setCurrentCity(data);
      } catch (error) {
        alert("error occured");
      }
      finally{
        setIsLoading(false);
      }
    }
  

  function deleteCity(id) {
    const newCities = cities.filter((city) => city.id !== id);
    setCities(newCities);
  }

  return (
    <CitiesContexts.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        fetchCurrentCities,
        deleteCity,
      }}
    >
      {children}
    </CitiesContexts.Provider>
  );
}
//baar baar hme useContext(citiesContext) na likhna pade es lea hm ek hooks bna denege or baar baar esko call kar lenge...
function useCities() {
  const context = useContext(CitiesContexts);
  if (context === undefined) {
    throw new Error("context accessing outside the scope");
  }
  return context;
}

export { CitiesProvider, useCities , };

//contexts are nothing but it is used to deals with the problem of props drilling
//we just put all the states and required data in thr context function and accept a children props...
//us children me saare components render honge jisko v us states or data ki jarurat hogi..
//edhar contexts se context wala function return kar denge or us me app.jsx ke saare components ko wrap kar denge or saare gajah data ka access mil jaaega
//in this case CitiesProvider is function and we have export it or jo v eske components eske child honge saare components k paas CitiesProvider ka data Access hogaa...
//context ka name hai CitiesContext and function ka name hai CitiesProvider...
