import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper,IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const history =  useNavigate();
  // this is used to redirect to a specific address
  const [searchTerm,setSearchTerm] = useState('')
  const handleonSubmit = (e)=>{
     e.preventDefault();
    //  this is used to prevent reload the page
     if(searchTerm){
        history(`/search/${searchTerm}`)
     }
  }
  return (
    <Paper component={'form'}
    onSubmit={handleonSubmit}
    sx={{borderRadius:'4px',
    border:"2px solid green",
    boxShadow:"none",
    px:"12px"}}>
    <input type='text'
    placeholder='Search...'
    value={searchTerm}
    onChange={(e)=>setSearchTerm(e.target.value)}/>
      <IconButton 
      sx={{color:"red"}}
      type='submit' aria-label='search'>
        <SearchIcon/>
      </IconButton>
    </Paper>
  )
}

export default SearchBar