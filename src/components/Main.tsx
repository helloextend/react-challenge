import React, { useState, FormEvent } from 'react'
import styled from '@emotion/styled'
import DogImage from './DogImage'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { favoriteFunc } from '../redux/actions'
import Inputbox from './Inputbox'

type Maintypes = {
  message?: string[]
  status?: string
}

function Main() {
  const [search, Setsearch] = useState("")
  const [doglist, Setdoglist] = useState<string[]>([])
  const [err,Seterr]=useState(false)
  const favlist: string[] = useSelector((state: RootStateOrAny) => state.favorites)
  const dispatch = useDispatch()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
      const res: Maintypes = await (await fetch(`https://dog.ceo/api/breed/${search}/images/random/10`)).json()
      if (res.status === "success") {
        Setdoglist(res.message)
      }else{
        Setdoglist([])
        Seterr(true)
      }
  }

  const Favorite = (url: string) => {
    dispatch(favoriteFunc(url))
  }


  return (
    <>
      
      <Inputbox onSubmit={handleSubmit} value={search} onChange={e => Setsearch(e.target.value)}/>
      {!doglist.length ?
        <>
          {err&&<div>No result found</div> }
        </>:
        <>
          <Result>
            {doglist.map((item, index) => {
              return (
                <DogImage key={index} src={item} onClick={() => Favorite(item)} icon={favlist.includes(item) ? 'redHeartIcon' : 'whiteHeartIcon'} />
              )
            })}
          </Result>
          <Line />
        </>}
    </>
  )
}

const Result = styled.div({
  margin: '48px auto',
  width: '100%',
  display: 'grid',
  gap: '30px',
  gridTemplateColumns: 'repeat(3,1fr)',
})


const Line = styled.div({
  borderBottom: '1px solid #DADADA',
})

export default Main