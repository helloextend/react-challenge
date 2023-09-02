import { useSelector } from 'react-redux'

import FavoritesHeader from './FavoritesHeader'
import Favorited from './Favorited'
import MessageDisplay from '../ui/MessageDisplay'

import styled from '@emotion/styled'

function Aside() {
  const { favoriteDogs } = useSelector((store) => store.favorites)

  return (
    <AsideLayout>
      <FavoritesHeader />
      {favoriteDogs.length > 0 && <Favorited />}
      {favoriteDogs.length === 0 && <MessageDisplay>No favorites yet 🐕</MessageDisplay>}
    </AsideLayout>
  )
}

const AsideLayout = styled.aside({
  paddingBottom: '2rem',
})

export default Aside
