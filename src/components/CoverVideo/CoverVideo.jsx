import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';


const CoverVideo = ({ img }) => {
  return (
    <VideoContainer>
      <Image src={img} alt='Magic gif' priority/>
    </VideoContainer>
  )
};

const VideoContainer = styled.div`
width: 100%;
img {
  width: 100%;
  height: auto;
}
`



export default CoverVideo;