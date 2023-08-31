import {BsHeartFill} from 'react-icons/bs'
export const FavImage = ({fav,onUnfavorite}) => {
    return (
        <div className="favorites">
            <h2><BsHeartFill style={{fill:'red'}}/>Favorites</h2>
            <div className="favorite-images">
                {fav.map((imageUrl) => (
                <div key={imageUrl} className="favorite-image" style={{position:"relative"}}>
                    <img src={imageUrl} alt="Favorite Dog" style={{height:'160px', width:'160px'}} />
                    <span onClick={() => onUnfavorite(imageUrl)}><BsHeartFill style={{position:'absolute', left:'8rem',top:'8rem', zIndex:10,fill:'red'}}/></span>
                </div>
                ))}
            </div>
        </div>
    )
}