import React from 'react'

const VideoList = ({info}) => {
  console.log(info);
    const {snippet,statistics}=info;
    const {channelTitle,title,thumbnails}=snippet;
    if(!info) return null;
  return (

    <div className='p-2 m-2 w-60 shadow-lg'>
      <img className="rounded-lg " alt='videos' src={thumbnails.high.url} />
        <ul>
            <li>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
            
        </ul>
    </div>
  )
}

export const Addvideocard=({info})=>{
  return(
    <div className='p-1 m-1 border border-red-800 rounded-lg'>
      <VideoList info={info}/>
    </div>
  )
}

export default VideoList
