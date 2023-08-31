import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Heart from './Heart'
import {add, remove} from '../redux/favSlice.js'
function Favorites() {
    const favs=useSelector((state)=>state.fav.fav) 
    const dispatch=useDispatch() ;
    const handleRemoveFav=(obj)=>{
        dispatch(remove(obj)) ;
    }
  return (
    <>
        <div style={{display:'flex', flexDirection:'row'}}>
            <Heart icon="redHeartIcon" alt="red heart icon" />
            <h2 style={{marginLeft:'50px'}}>Favorites</h2>
        </div>
        <div style={{display:'flex', flexWrap:'wrap'}}>
        {
            favs.map((obj,idx)=>(
                <div key={idx} >
                <img src={obj} alt='' key={idx} style={{width:'165px', height:'165px', margin:'10px'}}/>
                <div onClick={()=>{handleRemoveFav(obj)}} style={{position:'relative',bottom:'50px',left:'130px',width:'20px',cursor:'pointer'}}>
                        <Heart icon="redHeartIcon" alt="red heart icon" />
                </div>
                </div>
            ))
        }
        </div>
    </>
  )
}
export default Favorites