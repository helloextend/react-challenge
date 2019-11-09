import React, { FC } from 'react'
import styled from '@emotion/styled'
import Heart from '../../Heart';
import { getRandomAmtFromArray } from '../../../assets/custom';

interface Props {
  imgUrls: Array<string>,
  clickHeart: (imgUrl: string) => void,
  favorites?: Array<string>,
  columnCount: number
}

const ResultsList: FC<Props> = ({ imgUrls, clickHeart, favorites, columnCount }) => {
  const renderImages = (urlsArray) => {
    let images = []
    for (let i = 0; i < 10; i++) {
      if (imgUrls[i]) {
        const iconColor = favorites.indexOf(imgUrls[i]) === -1 ? "whiteHeartIcon" : "redHeartIcon"

        images.push(
          <ImgContainer key={i}>
            <DogImg src={urlsArray[i]} alt="dog" />
            <Heart onClickHeart={clickHeart} url={urlsArray[i]} style={heartStyle} icon={iconColor} alt="white heart icon" />
          </ImgContainer>
        )
      }
    }
    return images;
  }

  const DogList = styled.div({
    columnCount: columnCount,
    columnGap: '1em',
    margin: '36px 0'
  })

  return (
    <DogList>
      {imgUrls[0] && renderImages(imgUrls)}
    </DogList>
  )
}





const DogImg = styled.img({
  width: '100%',
  height: 'auto',
  margin: '0 0 1em',
})

const ImgContainer = styled.div({
  position: 'relative',
})

const heartStyle = {
  position: 'absolute',
  bottom: '34px',
  right: '10px',
}




export default ResultsList
