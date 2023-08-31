import styled from '@emotion/styled'
import React, { FC } from 'react'

const NoDogImage: FC<{ message: string }> = ({ message }) => {
  return (
    <Div>
      <Message>{message}</Message>
      <TryPara>Try again</TryPara>
    </Div>
  )
}

const Div = styled.div({
  minHeight: '80vh',
  display: 'grid',
  placeContent: 'center',
})

const Message = styled.h2({
  fontSize: '24px',
  lineHeight: '20px'
})

const TryPara = styled.p({
  textAlign: 'center',
  TextDecoder: 'underline',
  color: 'red',
  fontWeight: 'bold',
})

export default NoDogImage
