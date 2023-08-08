import React from 'react';

export const YouTubeVideo=({videoId}) =>{
  return (
    <div >
      <iframe className=''
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube Video"
        allowFullScreen
      />
    </div>
  );
}


