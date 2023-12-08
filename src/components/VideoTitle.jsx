import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-36 px-12'>
      <h1 className='text-3xl font-bold'>{title}</h1>
      <p className='w-1/2 mt-4'>{overview}</p>
      <div className='mt-3'>
        <button>Play</button>
        <button>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
