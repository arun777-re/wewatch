import axios from 'axios';
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
    
    params:{
        maxResults:'50'
    },
    headers:{
        'X-RapidAPI-Key': '445eed3c30mshf56525c94877527p1fd6bajsn8386cf4aa112',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }

}


export const FetchFromAPI = async(url)=>{
   const {data} = await axios.get(`${BASE_URL}/${url}`,options);
   return data
}