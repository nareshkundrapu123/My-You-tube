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

export default VideoList
