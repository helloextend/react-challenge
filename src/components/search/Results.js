import { useDispatch, useSelector } from 'react-redux'

import InteractiveFloatingHeart from '../ui/InteractiveFloatingHeart'
import GridList from '../ui/GridList'
import ImageItem from '../ui/ImageItem'

import { toggleFavorite } from '../../redux/actions'

const resultGridStyled = {
  gridTemplateColumns: 'repeat(3, minmax(28%,1fr))',
  gridTemplateRows: 'repeat(4, 1fr)',
  margin: '2rem 0',
}

function Results() {
  const { searchedDogs } = useSelector((store) => store.search)
  const { favoriteDogs } = useSelector((store) => store.favorites)
  const dispatch = useDispatch()

  return (
    <GridList customStyles={resultGridStyled}>
      {searchedDogs.map((dog) => {
        const isFavorite = favoriteDogs.find((d) => d.id === dog.id)
        return (
          <ImageItem src={dog.imageURL} key={dog.id}>
            <InteractiveFloatingHeart
              isFilled={isFavorite}
              onClick={() => dispatch(toggleFavorite(dog))}
            />
          </ImageItem>
        )
      })}
    </GridList>
  )
}

export default Results
