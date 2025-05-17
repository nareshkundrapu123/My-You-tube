import React, { useEffect, useState } from 'react'

import { youtube_video_api } from '../utils/constants';
import VideoList from './VideoList';

const Videoscontainer = () => {

  const[videos,setVideos]=useState([]);

  useEffect(()=>{
    getVideos();
  },[]);

  const getVideos=async()=>{

    const data=await fetch(youtube_video_api);
    const json=await data.json();
  
    setVideos(json.items);

  }

  return (
    <div className='flex flex-wrap'>
        {videos.map(video=><VideoList key={video.id} info={video}/>)}
      

    </div>
    
  )
}

export default Videoscontainer
