import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import img1 from '../../assets/Nfts/NFT-IMG-1.png'
import img2 from '../../assets/Nfts/NFT-IMG-7.png'
import img3 from '../../assets/Nfts/NFT-IMG-2.png'
import img4 from '../../assets/Nfts/NFT-IMG-8.png'
import img5 from '../../assets/Nfts/NFT-IMG-3.png'
import img6 from '../../assets/Nfts/NFT-IMG-9.png'
import img7 from '../../assets/Nfts/NFT-IMG-4.png'
import img8 from '../../assets/Nfts/NFT-IMG-10.png'
import img9 from '../../assets/Nfts/NFT-IMG-5.png'
import img10 from '../../assets/Nfts/NFT-IMG-11.png'

import arrow from '../../assets/arrow.png'
import Image from 'next/image';

const Carousel = () => {
  return (
    <Container>
      <Swiper
      autoplay={{
        delay: 2000,
        disableOnInteraction: false
      }}
      pagination={{
        type:'fraction'
      }}
      scrollbar={{
        draggable:true
      }}
      navigation={true}
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards, EffectCards, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><Image src={img1} alt='The Weirdos' /></SwiperSlide>
        <SwiperSlide><Image src={img2} alt='The Weirdos' /></SwiperSlide>
        <SwiperSlide><Image src={img3} alt='The Weirdos' /></SwiperSlide>
        <SwiperSlide><Image src={img4} alt='The Weirdos' /></SwiperSlide>
        <SwiperSlide><Image src={img5} alt='The Weirdos' /></SwiperSlide>
        <SwiperSlide><Image src={img6} alt='The Weirdos' /></SwiperSlide>
        <SwiperSlide><Image src={img7} alt='The Weirdos' /></SwiperSlide>
        <SwiperSlide><Image src={img8} alt='The Weirdos' /></SwiperSlide>
        <SwiperSlide><Image src={img9} alt='The Weirdos' /></SwiperSlide>
        <SwiperSlide><Image src={img10} alt='The Weirdos' /></SwiperSlide>
      </Swiper>
    </Container>
  )
};

const Container = styled.div`
width: 25vw;
height: 70vh;

@media (max-width: 70em){
    height: 60vh;
}

@media (max-width: 64em){
    height: 50vh;
    width: 30vw;
}
@media (max-width: 48em){
    height: 50vh;
    width: 40vw;
}
@media (max-width: 30em){
    height: 45vh;
    width: 60vw;
}

.swiper{
    width: 100%;
    height: 95%;
}

.swiper-slide{
    background-color: ${props => props.theme.carouselColor};

    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    img{
        display: block;
        width: 100%;
        height: auto;
        object-fit: cover;
    }
}

.swiper-button-next{
    color: ${props => props.theme.text};
    right: 0;
    width: 4rem;
    top: 60%;
    
    background-image: url(${arrow});
    background-position: center;
    background-size: cover;

    &:after{
        display: none;
    }

    @media (max-width: 64em){
    width: 3rem;

    }
    @media (max-width: 30em){
    width: 2rem;

    }
}
.swiper-button-prev{
    color: ${props => props.theme.text};
    left: 0;
    top: 60%;
    width: 4rem;
    transform: rotate(180deg);
    background-image: url(${arrow});
    /* background-color: red; */
    background-position: center;
    background-size: cover;

    &:after{
        display: none;
    }
    @media (max-width: 64em){
    width: 3rem;

    }
    @media (max-width: 30em){
    width: 2rem;

    }
}
`



export default Carousel;