// Import Dependencies
import React, { useState, useEffect } from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import axios from 'axios';


//Import Components
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList"





function App() {




  return (
    <main>
      <Header />
      {/* <TabNav /> */}
      {/* <CharacterList/> */}
      <LocationsList/>
    </main>
  );
}

export default App