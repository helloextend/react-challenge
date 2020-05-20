import React, { FC } from 'react'
import styled from '@emotion/styled'

const Divider: FC = () => {
  return <DividerStyle></DividerStyle>
}

const DividerStyle = styled.hr({
  border: '1px solid #DADADA',
})

export default Divider
