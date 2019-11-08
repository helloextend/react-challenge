import React, { FC } from 'react'
import styled from '@emotion/styled'
import Heart from '../../Heart';
import { colors } from '../../../assets/index';
import ResultsList from '../ResultsList/ResultsList';

interface Props {
  favorites: Array<string>,
  clickHeart: (imgUrl: string) => void,
}

const FavoritesList: FC<Props> = ({ favorites, clickHeart }) => {
  return (
    <>
      <Title><Heart style={heartStyle} icon="redHeartIcon" alt="red heart icon" />Favorites</Title>
      <ResultsList columnCount={4} imgUrls={favorites} favorites={favorites} clickHeart={clickHeart} />
    </>
  )
}

const heartStyle = {
  marginRight: '30px'
}

const Title = styled.h1({
  borderTop: `1px solid ${colors.veryLightGray}`,
  paddingTop: '30px',
  fontWeight: 'bold',
  fontSize: '24px',
  lineHeight: '33px',
})

export default FavoritesList