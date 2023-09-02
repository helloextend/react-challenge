import styled from '@emotion/styled'

function ImageItem({ src, children }) {
  return (
    <Item>
      <Image src={src} />
      {children}
    </Item>
  )
}

const Item = styled.li({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  aspectRatio: '1 / 1',
  position: 'relative',
  borderRadius: '0.3rem',
  overflow: 'hidden',
})

const Image = styled.img({
  objectFit: 'cover',
  height: '100%',
  width: '100%',
})

export default ImageItem
