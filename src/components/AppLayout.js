import React from 'react'

import Main from './search/Main'
import Aside from './favorites/Aside'

import styled from '@emotion/styled'

function AppLayout() {
  return (
    <>
      <Main />
      <Separator />
      <Aside />
    </>
  )
}

const Separator = styled.hr({
  border: 'none',
  borderTop: '0.2rem solid #f7f7f7',
})

export default AppLayout
