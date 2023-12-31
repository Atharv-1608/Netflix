import React, { useEffect } from 'react'
import {API_OPTIONS} from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/moviesSlice';

const VideoBackground = ({movie_id}) => {
    const disptach = useDispatch();
    const trailerVideo = useSelector(store => store.movies?.trailerVideo)
    useEffect(()=>{
        getMovieVideos();
    },[])

    const getMovieVideos = async () =>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`, API_OPTIONS)
        const json = await data.json()
        console.log(json)
        const filterData =json.results?.filter((video) => video.type=="Trailer")
        const trailer = filterData.length ? filterData[0] : json.results[0];
        console.log(trailer)
        disptach(addTrailerVideo(trailer));

    }
  return (
    <div>
      <iframe 
      width="560" 
      height="315"
      className='mx-12 mt-5' 
      src={"https://www.youtube.com/embed/"+ trailerVideo?.key} 
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </div>
  )
}

export default VideoBackground
