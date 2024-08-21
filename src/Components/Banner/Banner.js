import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import {API_KEY,imgUrl} from '../../Constants/Constants'
import Youtube from 'react-youtube'

function Banner() {
  const [movie,setMovie]=useState()
  const [key,setKey]=useState()
  const bannerVideo=(id)=>{
    console.log(id);
  axios.get('/movie/'+id+'/videos?api_key='+API_KEY+'&language=en-US').then((response)=>{
    if(response.data.results.length>0){
      setKey(response.data.results[0])
    }
  })
}
  useEffect(()=>{
    axios.get('/trending/movie/week?api_key='+API_KEY+'&language=en-US').then((response)=>{
      const randomElemet=response.data.results[Math.floor(Math.random() * response.data.results.length)]
      setMovie(randomElemet)
      console.log(randomElemet)
      
    })
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  

  return (
    <>
    <div className='banner' style={{backgroundImage:`url(${movie && imgUrl+movie.backdrop_path})`}}>
      <div className='content'>
          <h1 className='title'>{movie && movie.title}</h1>
          <div className='banner_buttons'>
            <button onClick={()=>{bannerVideo(movie.id)}} className='button'>Play</button>
            <button className='button'>My List</button>
            </div>
          <h1 className='description'>{movie && movie.overview}</h1>  
      </div>
      <div className="fade_bottom"></div>
    </div>
    { key && < Youtube opts={opts} videoId={key.key} />}
    </>
  )
}

export default Banner
