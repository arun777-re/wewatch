import React, { useEffect, useState } from 'react'
import { FetchFromAPI } from '../utils/fetchFromApi';
import { logo } from '../utils/constants';
import { Box, Stack, Typography } from '@mui/material';
import SideBar from './SideBar';
import MenuIcon  from '@mui/icons-material/Menu';
import Videos from './Videos';
import { LogoDev } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';

const Feed = () => {
  const [videos,setVideos] = useState(null)
  const [selectedCategory,setSelectedCategory] = useState("New")
  const [toggle,setToggle] = useState(false)
useEffect(()=>{
setVideos(null)
  FetchFromAPI(`search?part=snippet,id&q=${selectedCategory}`)
  .then((data)=>{
    setVideos(data?.items)
    console.log(data?.items)
  })

},[selectedCategory])


  return (
    <Stack sx={{
      display:"flex",
      ml:'1rem',
      flexDirection:{md:"row",xs:"column",sm:"row"}
    }}>
      <Box sx={{width:{xs:'auto',sm:'120px',md:'180px'},
      height:{xs:"auto",sm:"90vh",md:"100%"},
      borderRight:"2px solid yellow"
    }}>
        <MenuIcon onClick={()=>setToggle(true)}
        sx={{color:"red",cursor:"pointer"}}/>
        
      {toggle ? (<CloseIcon sx={{color:"blue",cursor:"pointer"}} onClick={()=>setToggle(false)}/>) :(<SideBar selectedCategory={selectedCategory} 
      setSelectedCategory={setSelectedCategory}/>)}
      <Typography sx={{fontSize:"12px", color:"#fff"}}>
        CopyRight Coderun @2024
      </Typography>
      </Box>
      <Box sx={{height:"90vh",fontSize:"12px",
    ml:'12px',flex:2,p:2,
    overflow:"auto"}}>
       <Typography sx={{fontSize:"23px",fontWeight:"bold",
      color:"goldenrod"}}>
        {selectedCategory} <span>
        Video
        </span>
          </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed