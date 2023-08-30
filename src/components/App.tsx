'use client'
import React, { useEffect, useState } from 'react';
import './script.css'
import Favorite from './Favorite';

export default function Home() {
  const [books, setBooks] = useState([]);
  const [count, setcount] = useState(0);
  const [input, setinput] = useState("hound");
  const [fvrt, setfvrt] = useState(false);
  const [list,setlist] = useState([]);
  
  const handleinput= event =>{
    setinput(event.target.value);
  };
  function submit(){
    apicall();
  }
  function flist(fav){
     setfvrt(!fvrt);
     setlist([...list,fav]);
     console.log(list);
  }
// https://dog.ceo/api/breed/hound/images
  async function apicall() {
    try {
      const response = await fetch(`https://dog.ceo/api/breed/${input}/images`);
      const data = await response.json();
      setBooks(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    apicall();
  }, []);

  return (
    <main>
      <div className='nav-head'>
      <h1>Dogs breed</h1>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#E21818" className="w-6 h-6">
  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
</svg>
</div>
<div className='search-bar'>
  <input placeholder='          Search breed here' onChange={handleinput} value={input}></input>
  <button onClick={submit}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
Search</button>

</div>
      <div className='dog-box'>
        {/* Check if books.data exists before accessing it */}
        
        {books.message  && books.message.slice(0,10).map((book,index) =>
        {
           return (  
         <>
           <div className='dog-img'>  
            <img src={book}/>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 24 24" strokeWidth={1.5} stroke="FFFFFF" className="w-6 h-6" onClick={() => flist(book)}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg> 
             
      
          </div>
          </>
        )
          
        })}
      </div>
      <hr className='hr'></hr>
      <Favorite props={list}/>
    </main>
    
  );
}
