import React from 'react';
import { categories } from '../utils/constants';
import { Box, buttonBaseClasses } from '@mui/material';
const SideBar = ({selectedCategory,setSelectedCategory}) => {
  return (
    <Box sx={{height:{sm:"auto",md:"92vh"}}}>
      {categories.map((category)=>{
        return <button className='category-btn'
       
        onClick={()=>setSelectedCategory(category.name)}>
        <span style={{color:category.name===selectedCategory?"white":"red",marginRight:"12px"}}>{category.icon}</span>  
        <span style={{opacity:category.name===selectedCategory?'1':"0.8"}}>{category.name}</span>  
        </button>
      })}
     </Box>
  )
}

export default SideBar