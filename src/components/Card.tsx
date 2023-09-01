import React, { useState } from 'react'
import styled from '@emotion/styled'
import Heart from './Heart'
import { useDispatch } from 'react-redux'
import { ADD, DLT } from '../redux/actions'

const Card = ({ prop1, prop2, index }) => {
  const dispatch = useDispatch()

  // favorite prop1 or width size is 128px
  let isTrue = false
  if (prop1 === '128') {
    isTrue = true
  }
  const [isFavorite, setIsFavorite] = useState(isTrue)
  const send = (e) => {
    dispatch(ADD(e))
  }

  const dlt = (id) => {
    dispatch(DLT(id))
  }

  const toggleFavorite = () => {
    // add toggle
    if (isFavorite === false) {
      send(prop2)
      setIsFavorite(!isFavorite)
    }

    // delete toggle
    if (isFavorite) {
      dlt(prop2)
      setIsFavorite(!isFavorite)
    }
  }
  return (
    <Griditem prop2={prop2} prop1={prop1}>
      <div className="box">
        <div onClick={toggleFavorite} className="heartIcon">
          <Heart icon={isFavorite ? 'redHeartIcon' : 'whiteHeartIcon'} alt="red_hear_icon" />
        </div>
      </div>
    </Griditem>
  )
}

export default Card

const Griditem = styled.div`
  .box {
    background-color: rgba(255, 255, 255, 0.8);
    height: ${(props) => props.prop1}px;
    width: ${(props) => props.prop1}px;
    border-radius: 5px;
    border: none;
    position: relative;
    background-image: url('${(props) => props.prop2}');
    background-size: cover;
    background-repeat: no-repeat;
    .heartIcon {
      position: absolute;
      bottom: 0px;
      right: 5px;
      box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
    }
    &:hover {
      border: solid 1px #edf3f0;
    }
  }
`
