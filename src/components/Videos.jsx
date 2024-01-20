import { Box, Stack } from '@mui/material'
import React from 'react';
import {ChannelCard,VideoCard,Loader} from './index';

const Videos = ({videos,direction}) => {
  if(!videos?.length) return <Loader/>
  return (
    <Stack direction={direction || 'row'} style={{flexWrap:"wrap",
    justifyContent:"start",alignItems:"start",
    gap:"1rem"}}>
    {videos.map((items,indx)=>{
      return <Box key={indx} >
        {items?.id?.channelId && <ChannelCard channelDetails={items}/>}
        {items?.id?.videoId && <VideoCard items={items}/>}
      </Box>
    })}  
      
    </Stack>
  )
}

export default Videos