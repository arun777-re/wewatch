import React from 'react';
import {Box} from '@mui/material'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Feed,Navbar,ChannelDetail,VideoDetail,SearchFeed} from './components/index'

const App = () => {
  return (
<BrowserRouter>
    <Box sx={{backgroundColor:"#000"}}>

    <Navbar/>
    <Routes>
     <Route path='/' element={<Feed/>}/> 
     <Route path='/channels/:id' element={<ChannelDetail/>}/> 
     <Route path='/video/:id' element={<VideoDetail/>}/> 
     <Route path='/search/:searchTerm' element={<SearchFeed/>}/> 
            
    </Routes>
    
    </Box>
    
</BrowserRouter>
  )
}

export default App