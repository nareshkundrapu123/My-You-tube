import React, { useEffect, useState } from 'react'

import { youtube_video_api } from '../utils/constants';
import VideoList,{Addvideocard} from './VideoList';
import { Link } from 'react-router-dom';

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
        {videos[0] && <Addvideocard info={videos[0]}/>}
        {videos.map(video=>
        <Link  key={video.id} to={"watch?v="+video.id}><VideoList  info={video}/></Link>)}
      

    </div>
    
  )
}

export default Videoscontainer
