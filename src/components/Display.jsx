import React from 'react';
import { Instagram_Glyph_White, Instagram_Glyph_Black } from '../assets';

const Display = ({asset}) => {

  return (
    <div className='group relative w-full h-full rounded-lg overflow-hidden trasition-border duration-250 hover:border-2 border-solid border-black border-opacity-70'>
    {asset.isImage ? (
      <img 
        key={asset.name}
        src={asset.imgUrl}
        alt={asset.name}
        className='w-full h-full transition-opacity duration-300 hover:opacity-90 hover:blur-md'
      />
    ) : (
      <video 
        key={asset.name}
        src={asset.imgUrl}
        alt={asset.name}
        type="video/mp4"
        autoPlay
        loop
        muted
        className='w-full h-full object-cover transition-opacity duration-300 hover:opacity-90 hover:blur-md'
      />
    )}
      <div className='absolute w-1/2 top-6 left-6 text-white text-xl font-medium opacity-0 group-hover:opacity-100'>
        {asset.name}
      </div>

      {asset.artist && (
        <div className='absolute bottom-6 left-6 text-white peer-hover:text-black text-xl font-medium opacity-0 group-hover:opacity-100'>
          {asset.artist}
        </div>
      )}

      {asset.artistInsta && (
        <div className='absolute top-6 right-6 text-white text-xl font-medium opacity-0 group-hover:opacity-100 rounded-full w-12 h-12 cursor-pointer peer'>
          <img 
            src={Instagram_Glyph_White}
            alt='Instagram Logo'
            onClick={() => window.open(asset.artistInsta, "_blank")}
            onMouseOver={e => e.currentTarget.src = Instagram_Glyph_Black}
            onMouseLeave={e => e.currentTarget.src = Instagram_Glyph_White}
          />
        </div>
      )}
    </div>
  )
}

export default Display