import React, { useState } from "react";

export default function SearchForm({ onSearch }) {

  const[search, updateSearch] = useState ([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
      .then(res => updateCharacters(res.data.results))
      .catch(err => console.log(err))
  }, []);
  return (
    <section className="search-form">
      <form onSubmit={() => onSearch(name)}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={name}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
