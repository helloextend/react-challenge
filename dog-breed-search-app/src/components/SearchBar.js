import { useState } from 'react';
import '../index.css'
import {FcSearch} from 'react-icons/fc'


export const SearchBar = ({onSearch}) => {
    const [breed, setBreed] = useState('');
    const handleSearch = () => {
        onSearch(breed);
      };

    return (
        <>
            <div className="seach-div" > 
                <input type="text" className="seach-bar" style={{height:'36px', width:'560px'}} placeholder="Enter Breed Name" value ={breed} onChange={(e)=>setBreed(e.target.value)} />
                <button type="submit" className="seach-btn" style={{width:'105px', height:'40px', backgroundColor:'#0794E3', color:'white', fontSize:'14px', textAlign:'center'}} onClick={handleSearch}> <FcSearch style={{alignContent:'center'}}/> Search</button>
            </div>
            {breed.length === 0 &&(
                <p>Enter the breed please </p>
            )}
        </>

    )
}