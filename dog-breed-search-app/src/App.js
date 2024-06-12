import { useEffect, useState } from 'react';
import { FavImage } from './components/FavImage';
import { SearchBar } from './components/SearchBar';
import { SearchResults } from './components/SearchResult';
import { FetchData } from './components/FetchData';

const getLocalItems =() => {
  let fav = localStorage.getItem('fav');
  if(fav) {
    return JSON.parse(localStorage.getItem('fav'));
  } else {
    return []
  }
}

function App() {
  const [search,setSearch] = useState([])
  const [fav, setFav] = useState(getLocalItems())

  useEffect(() => {
    localStorage.setItem('fav' , JSON.stringify(fav));
  }, [fav]);

  const searchResults = async (breed)=>{
      const newResults = await FetchData(breed)
      if(Array.isArray(newResults)){
        setSearch(newResults)
      }
  }

  const handleFavorite = (imageUrl) => {
    if (!fav.includes(imageUrl)) {
      setFav([...fav, imageUrl]);
    }
  };

  const handleUnfavorite = (imageUrl) => {
    const newFavorites = fav.filter((url) => url !== imageUrl);
    setFav(newFavorites);
  };
  return (
    <div className="App">
      <div className='main'>
        <header className='app-header'>
          <h1>Dog Breeds</h1>
        </header>
        <SearchBar onSearch ={searchResults} />
        <SearchResults search= {search} onFavorite={handleFavorite}/>
        
        <FavImage fav={fav} onUnfavorite={handleUnfavorite}/>
      </div>
    </div>
  );
}

export default App;