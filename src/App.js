// Import Dependencies
import React, { useState, useEffect } from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";



//Import Components
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList"
import EpisodeList from "./components/EpisodeList"





function App() {




  return (
    <main>
      <Header />
      {/* <TabNav /> */}
      {/* <CharacterList/> */}
      {/* <LocationsList/> */}
      <EpisodeList/>
    </main>
  );
}

export default App