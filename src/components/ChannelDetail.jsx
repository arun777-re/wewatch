import React,{useEffect,useState} from 'react';
import {Stack,Typography,Box, CardMedia} from '@mui/material';
import { FetchFromAPI } from '../utils/fetchFromApi';
import { Link,useParams } from 'react-router-dom';
import { Loader, Videos } from '.';
import { Gradient } from '@mui/icons-material';



const ChannelDetail = () => {
  const [video,setVideo] = useState(null);
  const [channelDetails,setChannelDetails] = useState(null)
  const {id} = useParams()
  useEffect(()=>{
    FetchFromAPI(`channels?part=snippet,statistics&id=${id}`)
    .then((data)=>{
      setChannelDetails(data?.items[0])
      console.log(data?.items[0])
    })
    FetchFromAPI(`search?part=snippet,id&channelId=${id}`)
    .then((data)=>{
      setVideo(data?.items)
      console.log(data?.items)
    })
  },[id])
  if(!channelDetails?.length) return <Loader/>
  const {snippet:{thumbnails,title},statistics:{subscriberCount}} = channelDetails
  return (
    <Stack direction={'row'} sx={{color:"#fff",height:"92vh",ml:"22px"}}>
      <Box sx={{
        height:"35vh",width:"100%",
        position:"sticky",background: 'rgb(229,17,6)',
background: 'linear-gradient(90deg, rgba(229,17,6,1) 0%, rgba(150,11,82,0.5208548751531863) 51%, rgba(196,135,81,1) 100%)'}}>
      </Box>
      <Box>
     <Videos videos={video}/>  
       
      </Box>
    </Stack>
  )
}

export default ChannelDetail