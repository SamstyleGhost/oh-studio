import React from 'react';

const Display = ({image}) => {

  return (
    <div className='group relative w-full h-full rounded-lg overflow-hidden trasition-border duration-250 hover:border-2 border-solid border-black border-opacity-70'>   
      <img 
        key={image.name}
        src={image.imgUrl}
        alt={image.name}
        className='w-full h-full transition-opacity duration-300 hover:opacity-90 hover:blur-md'
      />
      <div className='absolute top-6 left-6 text-white text-xl font-medium opacity-0 group-hover:opacity-100'>
        {image.name}
      </div>
    </div>
  )
}

export default Display