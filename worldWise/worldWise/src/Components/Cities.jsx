import { useContext } from "react"
import styles from "./Cities.module.css"
import CityItem from "./CityItem"
import { useCities } from "../Contexts/CitiesContexts"
export default function Cities(){

    const{cities,deleteCity}=useCities();
    return(
        <div className={styles.city}>
            {cities.map((city)=>(
                <CityItem city={city} deleteCity={deleteCity} key={city.id}/>
            ))}
        </div>
    )
}