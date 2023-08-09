import React from 'react';

export const YouTubeVideo=({videoId}) =>{
  return (
    <div className="p-6 w-11/12 h-64 sm:h-80 lg:h-[28rem] lg:w-6/12 sm:w-9/12 mx-auto" >
      <iframe className="mx-auto w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube Video"
        allowFullScreen
      />
    </div>
  );
}


