import React from 'react'

import { keyframes } from '@emotion/core'
import styled from '@emotion/styled'

const Spinner = () => {
  return <SpinnerDiv />
}

const rotate = keyframes`
  0% {
    transform: rotate(0);
  }
    100% {
    transform: rotate(360deg);
  }
`

const SpinnerDiv = styled.div({
  width: '64px',
  height: '64px',
  border: '5px solid #ccc',
  borderBottomColor: 'transparent',
  borderTopColor: 'transparent',
  borderRadius: '50%',
  animation: `${rotate} 1s linear infinite`,
})

export default Spinner
