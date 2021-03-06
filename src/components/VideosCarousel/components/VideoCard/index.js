import React from 'react';
import PlaylistCardContainer, { VideoCardContainer } from './styles';


function getYouTubeId(youtubeURL) {
    return youtubeURL
      .replace (
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
          '$7',
    )
}


function VideoCard({ videoTitle, videoURL}) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
  if (videoURL.match(/list/)) {
    const image2 = 'https://i.imgur.com/abA61bk.png'
    return (
      <PlaylistCardContainer
        url={image2}
        href={videoURL}
        target="_blank"
        title={videoTitle}
      />
    );
  }
  else {
    return (
      <VideoCardContainer
        url={image}
        href={videoURL}
        target="_blank"
        title={videoTitle}
      />
    );
  }
}

export default VideoCard;
