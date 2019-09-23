import React, { useEffect, useState } from "react";
import axios from 'axios';

import EpisodeCard from "./EpisodeCard"

export default function EpisodeList() {
  // TODO: Add useState to track data from useEffect
  const[episodes, updateEpisodes] = useState ([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get("https://rickandmortyapi.com/api/episode/")
      .then(res => updateEpisodes(res.data.results))
      .catch(err => console.log(err))
  }, []);

  return (
    <section className="episode-list grid-view">
      
      {episodes.map(epi => (
        <EpisodeCard key={epi.id} epi={epi} />
      ))}
    </section>
  );
}
