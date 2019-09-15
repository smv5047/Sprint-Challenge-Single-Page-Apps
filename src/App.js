import React, { useState, useEffect } from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import axios from 'axios';








function App() {

  // useEffect(() => {
  //   // TODO: Add API Request here - must run in `useEffect`
  //   //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  //   axios.get("https://rickandmortyapi.com/api/character/")
  //     .then(res => console.log(res.data.results))
  //     .catch(err => console.log(err))
  // }, []);



  return (
    <main>
      <Header />
      {/* <TabNav /> */}
      <CharacterList/>
    </main>
  );
}

export default App