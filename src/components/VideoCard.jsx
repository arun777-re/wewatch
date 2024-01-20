import React from 'react';
import { Link } from 'react-router-dom';
import { Typography,Card,CardContent,CardMedia, CardActions } from '@mui/material'
import { CheckCircle } from '@mui/icons-material';
const VideoCard = ({items:{id:{videoId},snippet}}) => {
  return (
    <Card sx={{width:{xs:'100%',sm:"550px",md:"440px"},boxShadow:"none",
    
    borderRadius:'0',display:"flex",flexDirection:{md:"column",sm:"row"},flex:1}}>
      <Link to={videoId ?`/video/${videoId}`:`/video/cV2gBU6hKfY`}>
      <CardMedia image={snippet?.thumbnails?.high?.url}
      sx={{height:"230px",width:{xs:"100%",sm:"358px",md:"440px"}}}
      />
      </Link>
    <CardContent sx={{backgroundColor:'#000',height:{md:"100px",sm:"170px"}}}>
     <Link to={videoId &&`video/${videoId}`}>
     <Typography variant='subtitle1' fontWeight={'bold'}
     color={'#fff'}>
      {snippet?.title.slice(0,60)}
     </Typography>
     </Link>
     <Link to={snippet?.channelId && `/channel/${snippet?.channelId}`}>
      <Typography variant='subtitle2' color={'gray'}>
      {snippet?.channelTitle}
      <CheckCircle sx={{ml:'9px'}}/>
      </Typography>
     </Link>
    </CardContent>
    </Card>
  )
}

export default VideoCard