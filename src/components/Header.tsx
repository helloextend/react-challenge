import React, { FC } from 'react'
import styled from '@emotion/styled'
import Heart from './Heart'

const Header: FC = () => {
  return (
    <Container>
      <Title>Dog Breeds</Title>
      <div className="icon">
        <Heart icon="redHeartIcon" alt="red heart icon" />
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 560px;
  justify-content: space-between;
  position: absolute;
  top: 57px;
  left: 61px;
  .icon {
    margin-top: 8px;
  }
`

const Title = styled.div`
  position: relative;
  font-family: 'Nunito Sans', sans-serif;
  width: 131px;
  height: 24px;
  font-size: 24px;
  font-weight: 700;
  line-height: 33px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 8px;
`

export default Header
