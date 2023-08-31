import {BsHeartFill} from 'react-icons/bs'
export const SearchResults = ({search,onFavorite}) => {
  return (
    <div className="results" > 
       {search.map((imageUrl) => (
        <div key={imageUrl} className="image" style={{position:"relative"}}>
          <img src={imageUrl} alt="Dog" style={{height:'160px', width:'160px'}} />
          <span onClick={() => onFavorite(imageUrl)} style={{}}><BsHeartFill style={{position:'absolute', left:'8rem',top:'8rem', zIndex:10,fill:'white'}}/></span>
        </div>
      ))}
    </div>
  )
}