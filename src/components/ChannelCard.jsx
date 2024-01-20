import React from 'react';
import { Box,CardContent,CardMedia,Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
const ChannelCard = ({channelDetails,marginTop}) => {
  return (
    <Box sx={{borderRadius:"20px",outline:"none",
    boxShadow:"none",justifyContent:"center",
    alignItems:"center",margin:"auto",height:"326px"
    ,marginTop
    }}>
      <Link to={`/channel/${channelDetails?.id?.channelId}`}>
        <CardContent sx={{color:"#FFF",display:"flex",
        flexDirection:"column",justifyContent:"center"
        ,textAlign:"center"}}>
          <CardMedia sx={{height:"180px",borderRadius:"50%",
        width:"180px",mb:2,border:"1px solid #3e3e3e"}} image={channelDetails?.snippet?.thumbnails?.high?.url}/>
          <Typography variant='h6'>
            {channelDetails?.snippet?.title}{' '}
            <CheckCircleIcon sx={{fontSize:"15px",color:"gray",ml:"5px"}}/>
          </Typography>
          {channelDetails?.snippet?.subscriberCount && (
            <Typography sx={{fontSize:"15px",fontWeight:500,color:"white"}}>
              {parseInt(channelDetails?.snippet?.subscriberCount).toLocaleString()}
            </Typography>
          )}
        </CardContent>
      
      </Link>

    </Box>
  )
}

export default ChannelCard