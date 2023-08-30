import styled from '@emotion/styled'
import React from 'react'
import { icons } from '../assets/icons'

type PropsTypes ={
    onSubmit:React.FormEventHandler<HTMLFormElement>
    onChange:React.ChangeEventHandler<HTMLInputElement>
    value:string
}

function Inputbox({onSubmit,value, onChange}:PropsTypes) {
    return (
        <Form onSubmit={onSubmit}>
            <Input placeholder='Search dog breed' value={value} onChange={onChange} required />
            <Button type="submit">
                <img src={icons['searchIcon']} alt="" />
                Search
            </Button>
        </Form>
    )
}
const Form = styled.form({
    margin: '48px auto',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
    border: 'none',
})

const Input = styled.input({
    width: '100%',
    display: 'block',
    padding: '8px 17px',
    background: '#F7F7F7',
    border: 'none',
    fontFamily: 'Nunito Sans',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '22px',
    color: '#44484C',
    outline: "none"
})

const Button = styled.button({
    alignSelf: 'stretch',
    padding: '0 16px',
    background: '#0794E3',
    border: 'none',
    color: '#FFFFFF',
    borderRadius: '4px',
    display: 'flex',
    gap: '5px',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: "pointer"
})

export default Inputbox
