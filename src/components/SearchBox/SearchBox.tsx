import React , {useState} from 'react'
import './SearchBox.css'
import  search  from '../../assets/icons/search-icon.png'



const SearchBox = ({onHandleSubmit}) => {

  const [inputValue , setInputValue] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    onHandleSubmit(inputValue);
  }

  return (
    <form className='searchBox' onSubmit = {handleSubmit}>
        <input type="text" className='input' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <button className='button' type='submit'>
            <img src={search} alt="" className='img'/>
            <div className="search">Search</div>
        </button>
    </form>
  )
}

export default SearchBox