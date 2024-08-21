import React, { useEffect, useState } from 'react'
import './RowPost.css'
import {imgUrl,API_KEY} from '../../Constants/Constants'
import axios from '../../axios'
import Youtube from 'react-youtube'

function RowPost(props) {
  const [movies,setMovies]=useState([])
  const [key,setKey]=useState('')
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      setMovies(response.data.results)
      console.log(response.data.results)
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

  const YoutubeTrailer=(id)=>{
    axios.get('/movie/'+id+'/videos?api_key='+API_KEY+'&language=en-US').then((response)=>{
      if(response.data.results.length>0){
        setKey(response.data.results[0])
      }
    })
  }

  
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>{
            return(
              <img onClick={()=>YoutubeTrailer(obj.id)} className={props.small?'small-poster':'poster'} src={`${imgUrl+obj.backdrop_path}`} alt="" />
            )
              
          })}
           
        </div>
      { key && < Youtube opts={opts} videoId={key.key} />}
    </div>
  )
}

export default RowPost
