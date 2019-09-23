import React, { useEffect, useState } from "react";
import axios from 'axios';

import LocationCard from "./LocationCard";

export default function LocationsList() {

const[locations, updateLocations] = useState ([]);

useEffect(()=> {
    axios.get("https://rickandmortyapi.com/api/location/")
        .then(res =>updateLocations(res.data.results))
        .catch(err => console.log(err))
}, [])

return(
    <section className="location-list grid-view">

        {locations.map(loc => (
            <LocationCard key={loc.id} loc={loc} />
        ))}

    </section>

    );


}
