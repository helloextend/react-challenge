import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { icons } from '../assets'
import {WhiteHeart} from './Heart'
import Heart from './Heart'
import {add, remove} from '../redux/favSlice.js'
import regeneratorRuntime from "regenerator-runtime"
import './Home.module.css'
function Home() {
    const [breed,setBreed]=useState('affenpinscher') ;
    const [breedName,setBreedName]=useState('affenpinscher')
    const [dogImageArray,setDogImageArray]=useState([]) ;
    const favs=useSelector((state)=>state.fav.fav) 
    const dispatch=useDispatch() ;
    useEffect(()=>{
        (async function getRes(){
            try{
            const res=await fetch(`https://dog.ceo/api/breed/${breed.toLowerCase()}/images`);
            const prod=await res.json() ;
            const dogs=prod.message ;
            const tenImages=dogs.filter((obj,idx)=>idx<10) ;
            console.log()
            setDogImageArray(tenImages) ;
            }
            catch(err){
                console.log(err)
            }
        }())
        },[breed])
        const handleAddtoFav=(obj)=>{
            if(favs.includes(obj)){
                dispatch(remove(obj)) ;
            }
            else dispatch(add(obj))
        }
    if(dogImageArray.length===0) return(
        <h1>Loading...</h1>
    )
  return (
    <>
        <div style={{height:'36px', padding:'0px', display:'flex', alignItems:'center',margin:'10px'}} className='input_par' >
        <input style={{background: '#F7F7F7',borderRadius:'3px',height:'36px',width:'560px', border:'none'}} onChange={(e)=>{setBreedName(e.target.value)}}></input>
        <div onClick={()=>{setBreed(breedName)}} style={{margin:'0px',padding:'0px', display:'inline-flex', border:'none'}}>
            <img src='./src/assets/Button.png' style={{cursor:'pointer',height:'36px'}} alt=''/>
        </div>
        </div>
        <div style={{display:'flex', flexWrap:'wrap'}}>
        {
            dogImageArray.map((obj,idx)=>(
                <div key={idx} >
                <img src={obj} alt='' style={{width:'165px', height:'165px', margin:'10px'}}/>
                <div onClick={()=>{handleAddtoFav(obj)}} style={{position:'relative',bottom:'50px',left:'130px',width:'20px',cursor:'pointer'}}>
                    { 
                    favs.includes(obj)?
                        <Heart icon="redHeartIcon" alt="red heart icon" />
                        :
                        <WhiteHeart icon="whiteHeartIcon" alt="red heart icon"  />
                    }
                </div>
                </div>
            ))
        }
        </div>
        <hr style={{color:'#DADADA'}}/>
    </>
  )
}

export default Home