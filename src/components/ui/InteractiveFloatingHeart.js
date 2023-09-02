import { icons } from './../../assets'

import styled from '@emotion/styled'

function InteractiveFloatingHeart({ customStyles, isFilled = false, onClick = () => {} }) {
  return (
    <HeartLayout customStyles={customStyles}>
      <InteractiveHeart
        src={isFilled ? icons['redHeartIcon'] : icons['whiteHeartIcon']}
        isFilled={isFilled}
        alt="love this doggo"
        onClick={onClick}
      />
    </HeartLayout>
  )
}

const InteractiveHeart = styled.img(({ isFilled }) => ({
  transition: 'all 0.3s ease-out',
  '&:hover': {
    willChange: 'transform',
    transform: 'scale(1.2)',
    filter: isFilled
      ? 'saturate(0.8) brightness(3.8)'
      : 'invert(0.19) saturate(15) brightness(0.9) sepia(2) contrast(0.89) hue-rotate(-30deg)',
    cursor: 'pointer',
  },
}))

const HeartLayout = styled.div(({ customStyles }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  bottom: '0.4rem',
  right: '0.4rem',
  ...customStyles,
}))

export default InteractiveFloatingHeart
