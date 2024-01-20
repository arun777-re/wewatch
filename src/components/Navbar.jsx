import React from 'react';
import {YouTube} from '@mui/icons-material';
import { Link} from 'react-router-dom';
import {Stack,Box, Typography } from '@mui/material'
import {SearchBar} from './index';
const Navbar = () => {

  return (
    <Stack p={2}  direction='row' position='sticky'
    sx={{display:'flex',
    justifyContent:"space-between",
    alignItems:'center'}}
    >
    <Link to={'/'} style={{display:"flex",
  flexDirection:"row",color:'red',
  alignItems:"center",border:"none"}}>
    <YouTube sx={{inlineSize:'39px'}}/> 
    <Typography sx={{color:'red',
  fontWeight:"bold",outline:"none",
  fontSize:"20px",
  border:"none",
  boxShadow:'none',
  fontFamily:"cursive"}}>
      weWatch
    </Typography>
    </Link>  
  
      <Box>
      <SearchBar/>
        
      </Box>
    
    </Stack>
  )
}

export default Navbar