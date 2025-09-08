import { useContext } from "react";
import Cities from "./Cities";
import styles from "./Countries.module.css";
import CountryItem from "./CountryItem";
import { useCities } from "../Contexts/CitiesContexts";
export default function Countries(){

    const{cities}=useCities();

    const countries = cities.reduce((arr, city) => {
        if (!arr.map((el) => el.country).includes(city.country))
          return [...arr, { country: city.country, emoji: city.emoji }];
        else return arr;
      }, []);
    
    return (
        <div className={styles.countryList}>
            {countries.map((country)=>(
                <CountryItem country={country} key={country.country}/>
            ))}

        </div>
    )
}