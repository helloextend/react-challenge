import Heart from '../Heart'

import styled from '@emotion/styled'

function FavoritesHeader() {
  return (
    <HeaderLayout>
      <Heart icon="redHeartIcon" alt="Your Favourites" />
      <Heading>Favorites</Heading>
    </HeaderLayout>
  )
}

const HeaderLayout = styled.div({
  display: 'flex',
  gap: '1rem',
})

const Heading = styled.h2({
  fontWeight: 'bold',
  fontSize: '1.25rem',
  lineHeight: '1.5rem',
})

export default FavoritesHeader
