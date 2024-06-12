import React, { useState } from 'react';

function SearchInput({ onSearch }) {
  const [breed, setBreed] = useState('');

  const handleSearch = () => {
    onSearch(breed);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter A Breed ?"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
      />
      <button onClick={handleSearch}>&#128269;Search</button>
    </div>
  );
}

export default SearchInput;