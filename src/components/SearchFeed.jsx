import React,{useState,useEffect} from 'react';
import { SideBar, Videos } from '.';
import { FetchFromAPI } from '../utils/fetchFromApi';
import {Box,Stack} from '@mui/material';
import { useParams,Link } from 'react-router-dom';

const SearchFeed = () => {
  const [video,setVideo] = useState([])
  const {searchTerm} = useParams()
  useEffect(()=>{
    FetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data)=>{
      setVideo(data?.items)
    })
  },[searchTerm])
  return (
    <Stack direction={{sm:'row'}}>
   <Box sx={{borderRight:'2px solid white', display:{sm:"none",md:"flex"}}}>
   <SideBar/>
   </Box>
    <Box 
    ml='1rem' sx={{flex:2 ,p:2,height:"90vh",overflow:"auto"
     }}>
    <Videos videos={video}/>
    </Box>


    </Stack>
  )
}

export default SearchFeed