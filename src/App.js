// Import Dependencies
import React, { useState, useEffect } from "react";
import {Route } from 'react-router-dom';


//Import Components
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList"
import EpisodeList from "./components/EpisodeList"





function App() {




  return (
    <main>
      <Header />
      <Route path="/" component={TabNav} />
      <Route exact path="/characters" component={CharacterList}/>
      <Route exact path="/locations" component={LocationsList} />
      <Route exact path="/episodes" component={EpisodeList} />
   
      
    </main>
  );
}

export default App
