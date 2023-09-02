import { useSelector, useDispatch } from 'react-redux'

import GridList from '../ui/GridList'
import ImageItem from '../ui/ImageItem'
import InteractiveFloatingHeart from '../ui/InteractiveFloatingHeart'

import { toggleFavorite } from '../../redux/actions'

const favoritedGridStyled = {
  gridTemplateColumns: 'repeat(4, minmax(22%,1fr))',
  gridTemplateRows: '1fr',
  gap: '1rem',
  margin: '1rem 0',
  '@media only screen and (max-width: 600px)': {
    gap: '0.4rem',
  },
}

function Favorited() {
  const { favoriteDogs } = useSelector((store) => store.favorites)
  const dispatch = useDispatch()

  return (
    <GridList customStyles={favoritedGridStyled}>
      {favoriteDogs.map((dog) => (
        <ImageItem src={dog.imageURL} key={dog.id}>
          <InteractiveFloatingHeart isFilled onClick={() => dispatch(toggleFavorite(dog))} />
        </ImageItem>
      ))}
    </GridList>
  )
}

export default Favorited
