import React, { useState } from 'react';

const Country = ({country,handleVisitedCountries,handleVisitedFlag}) => {
    

    const[visited,setVisited]=useState(false);

    const handleVisited=()=>{
        // console.log("Button Visited")
        if(visited){
            setVisited(false);
        }
        else{
            setVisited(true);
        }

        handleVisitedCountries(country);
    }

    return (
        <div className={`country ${visited && 'country-visited' }`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name : {country.name.common} </h3>
            <p>Population : {country.population.population}</p>
            <p>Region : {country.region.region}</p>
            <p>Capital : {country.capital.capital}</p>
            <p>Continents : {country.continents.continents[0]}</p>
            <p>Area : {country.area.area}  {country.area.area > 30000 ? "Big Country" : "Small Country"}</p>
            <p>Languages : {country.languages.languages.eng}</p>
            <p>Languages : {country.languages.languages.jam}</p>
            <button onClick={handleVisited}>
                {
                    visited ? "Visited" : "Not Visited"
                }
            </button>
            <button onClick={()=>{handleVisitedFlag}}>Add Visited Flag</button>
        </div>
    );
};

export default Country;