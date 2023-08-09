import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';

import img1 from '../../../assets/Nfts/Spirit1.gif'
import img2 from '../../../assets/Nfts/Spirit2.gif'
import img3 from '../../../assets/Nfts/Spirit3.gif'
import img4 from '../../../assets/Nfts/Spirit4.gif'
import img5 from '../../../assets/Nfts/Spirit5.gif'
import img6 from '../../../assets/Nfts/Spirit6.gif'
import img7 from '../../../assets/Nfts/Spirit7.gif'
import img8 from '../../../assets/Nfts/Spirit8.gif'
import img9 from '../../../assets/Nfts/Spirit9.gif'
import img10 from '../../../assets/Nfts/Spirit10.gif'
import SOL from '../../../assets/solana-sol-logo.svg'
import Image from 'next/image';
import Link from 'next/link';

const Showcase = () => {

  const row1Ref = useRef(null)
  const row2Ref = useRef(null)

  return (
    <Section id='showcase'>
      <Row ref={row1Ref} direction='none'>
        <NftItem img={img1} number={14} price={0.4} passRef={row1Ref} link={'https://magiceden.io/item-details/CfpQjeYyfY15Vpsft9MkAP1krr94CJFihb1DQhvH2B8M?name=%24Magic-Spirit-No.-14'} />
        <NftItem img={img2} number={186} price={0.5017} passRef={row1Ref} link={'https://magiceden.io/item-details/5ke5JosBVLgTNqPvzzYSKJnUEyQnkyWwqzAL5gdFHgCC?name=%24Magic-Spirit-No.-186'}/>
        <NftItem img={img3} number={255} price={0.5017} passRef={row1Ref} link='https://magiceden.io/item-details/chNxAN5ZJJN3UaxYqWoK6qsqaspxijBHmiCgsqXXRPS?name=%24Magic-Spirit-No.-255'/>
        <NftItem img={img4} number={219} price={0.5463} passRef={row1Ref} link='https://magiceden.io/item-details/6Jj7ECStojpSHzewDqqDEztVAt2mk7YkbzhPq6X7Usn?name=%24Magic-Spirit-No.-219'/>
        <NftItem img={img5} number={67} price={0.9589} passRef={row1Ref} link='https://magiceden.io/item-details/2jk7XeSiZAxsTmxuTT3uDQfRjq5JPxGqEVxbxs9hFAAC?name=%24Magic-Spirit-No.-67'/>
      </Row>
      <Row ref={row2Ref} direction='reverse'>
        <NftItem img={img6} number={265} price={1.1038} passRef={row2Ref} link='https://magiceden.io/item-details/5txyhHkJxKBKzbph2KTvV1XtWuMUZFfAW6u8FoiWxDLs?name=%24Magic-Spirit-No.-265'/>
        <NftItem img={img7} number={44} price={1.1038} passRef={row2Ref} link='https://magiceden.io/item-details/7ePBNVEb1HSvBxHJG5nd9S8jiSxRRW2fz9n5PRt5humH?name=%24Magic-Spirit-No.-44'/>
        <NftItem img={img8} number={247} price={1.1038} passRef={row2Ref} link='https://magiceden.io/item-details/9PaF4HF9X8fYR7oDbANSXfZ4QnPYhrAoWM3BeByPe777?name=%24Magic-Spirit-No.-247'/>
        <NftItem img={img9} number={40} price={1.1038} passRef={row2Ref} link='https://magiceden.io/item-details/C46wneVL5yt6CvtEgs1k1iycUoHxpmXv4sU5PhPLJZ33?name=%24Magic-Spirit-No.-40'/>
        <NftItem img={img10} number={245} price={1.1038} passRef={row2Ref} link='https://magiceden.io/item-details/FD2dFAmAMKA936VQQeTtK28mozibb1h7VTG8mQCZXhMi?name=%24Magic-Spirit-No.-245'/>
      </Row>
    </Section>
  )
}

const NftItem = ({ img, number = 0, price = 0, passRef, link=''}) => {

  let play = (e) => {
    passRef.current.style.animationPlayState = 'running';
  }
  let pause = (e) => {
    passRef.current.style.animationPlayState = 'paused';
  }

  return (
    <ImgContainer onMouseOver={e => pause(e)} onMouseOut={e => play(e)} href={link} target='_blank'>
      <NftImage src={img} alt="The NFT" priority />
      <Details> <div>
        <span>Spirit</span> <br />
        <h2>#{number}</h2>
      </div>
        <div>
          <span>Price</span>
          <Price>
            <Image src={SOL} alt="Solana Icon" />
            <h2>{Number(price).toFixed(1)}</h2>

          </Price>
        </div> </Details>
    </ImgContainer>
  )
}

const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.text};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
overflow: hidden;

&>*:first-child{
  animation-duration: 20s;

  @media (max-width: 30em){
    animation-duration: 15s;

  }
}
&>*:last-child{
  animation-duration: 15s;
  @media (max-width: 30em){
    animation-duration: 10s;

  }
}
`
const move = keyframes`
0%{ transform: translateX(100%)   };
100%{ transform: translateX(-100%)   }

`

const Row = styled.div`
/* background-color: lightblue; */
white-space: nowrap;
box-sizing:content-box;
margin: 2rem 0;
display: flex;

animation: ${move}  linear infinite ${props => props.direction};


`
const ImgContainer = styled(Link)`
width: 15rem;
margin: 0 1rem;
background-color:${props => props.theme.body};
display: flex;
flex-direction: column;
overflow: hidden;
border-radius: 20px;
cursor: pointer;

@media (max-width: 48em){
  width: 12rem;
  }
  @media (max-width: 30em){
  width: 10rem;
  }

`

const NftImage = styled(Image)`
  width: 100%;
  height: auto;
`

const Details = styled.div`
display: flex;
justify-content: space-between;
padding: 0.8rem 1rem;
background-color: ${props => props.theme.text};
border: 2px solid ${props => `rgba(${props.theme.bodyRgba},0.5)`};

border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;

span{
  font-size: ${props => props.theme.fontsm};
  color:${props => `rgba(${props.theme.bodyRgba},0.5)`};
  font-weight:600;
  line-height: 1.5rem;
}

h2{
  font-size: ${props => props.theme.fontmd};
  color: ${props => props.theme.body};
  font-weight:600;

  @media (max-width: 30em){
    font-size: ${props => props.theme.fontsm};
  }
}
`

const Price = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;

img{
  width: 1rem;
  height: auto;
}
`

export default Showcase;