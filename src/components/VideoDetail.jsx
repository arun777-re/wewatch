import React,{useState,useEffect} from 'react';
import { Link,useParams } from 'react-router-dom';
import ReactPlayer from "react-player";
import { Typography,Box,Stack } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { FetchFromAPI } from '../utils/fetchFromApi';
import { Loader, Videos } from '.';
const VideoDetail = () => {
  const [videoDetail,setVideoDetail] = useState(null);
  const [video,setVideo] = useState(null);
  const {id} = useParams();
  // to send the parameter use useParams


  useEffect(()=>{
    FetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=> setVideoDetail(data?.items[0]))

    FetchFromAPI(`search?part=snippet,id&relatedToVideoId=${id}&type=video`)
    .then((data)=>{
      setVideo(data?.items)
    })
  },[id])

  if(!videoDetail?.snippet){
    return <Loader/>
  } 
  const {snippet:{channelId,title,channelTitle},statistics:{viewCount,likeCount}} = videoDetail

  return (
    <Box minHeight={'95vh'} sx={{ml:"18px",color:"#FFF"}}>

    <Stack direction={{xs:"column",md:"row"}}>
      <Box flex={1}>
      
      <Box  sx={{width:'100%',position:'sticky',top:"86px"}}>
   <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls/>
   <Typography variant='subtitle1' sx={{color:"goldenrod",
  fontWeight:'bold'}} p={2}>
    {title}
   </Typography>
   <Stack direction={'row'} justifyContent={'space-between'}
   sx={{color:"grey"}} py={1} px={2}>
   <Link to={`/channels/${channelId}`}>
   <Typography variant={{sm:"subtitle1",md:"h6"}} color='#fff'>
     {channelTitle}
     <CheckCircleIcon sx={{color:"gray",ml:"5px",fontSize:"19px"}}/>
   </Typography>
   </Link>
   <Stack direction={'row'} gap={'20px'} alignItems={'center'}>
    <Typography sx={{color:"#fff",opacity:'0.7'}}>
      {parseInt(viewCount).toLocaleString()} views

    </Typography>
    <Typography sx={{color:"#fff",opacity:"0.7"}}>
      {parseInt(likeCount).toLocaleString()} likes
    </Typography>
   </Stack>
   </Stack>
      </Box>
      </Box>

      <Box sx={{ml:"12px",mt:"10px"}}>
        <Videos videos={video}/>
      </Box>

    </Stack>
    </Box>

  )
}

export default VideoDetail