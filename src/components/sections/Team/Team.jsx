import styled from 'styled-components';

import img1 from '../../../assets/Nfts/NFT-IMG-1.png'
import img2 from '../../../assets/Nfts/NFT-IMG-7.png'
import img3 from '../../../assets/Nfts/NFT-IMG-2.png'
import img4 from '../../../assets/Nfts/NFT-IMG-8.png'
import img5 from '../../../assets/Nfts/NFT-IMG-3.png'
import img6 from '../../../assets/Nfts/NFT-IMG-9.png'
import img7 from '../../../assets/Nfts/NFT-IMG-4.png'
import img8 from '../../../assets/Nfts/NFT-IMG-10.png'
import img9 from '../../../assets/Nfts/NFT-IMG-5.png'
import Image from 'next/image';

const Team = () => {
  return (
    <Section>
      <Title>Team</Title>
      <Container>
        <MemberComponent img={img1} name='Pancho' position='CEO' />
        <MemberComponent img={img2} name='Pancho' position='CEO' />
        <MemberComponent img={img3} name='Pancho' position='CEO' />
        <MemberComponent img={img4} name='Pancho' position='CEO' />
        <MemberComponent img={img5} name='Pancho' position='CEO' />
        <MemberComponent img={img6} name='Pancho' position='CEO' />
        <MemberComponent img={img7} name='Pancho' position='CEO' />
        <MemberComponent img={img8} name='Pancho' position='CEO' />
        <MemberComponent img={img9} name='Pancho' position='CEO' />
      </Container>

    </Section>
  )
};

const MemberComponent = ({ img, name = '', position = '' }) => {

  return (
    <Item id='team'>
      <ImgContainer>
        <Image src={img} alt={name} />
      </ImgContainer>
        <Name>{name}</Name>
        <Position>{position}</Position>
    </Item>
  )
}

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.body};
  position: relative;
`

const Title = styled.h2`
font-size: ${(props) => props.theme.fontxxl};
text-transform: capitalize;
color: ${(props) => props.theme.text}; 
display: flex;
justify-content: center;
align-items: center;
margin: 1rem auto;
border-bottom: 2px solid ${(props) => props.theme.text};
width: fit-content;
`
const Container = styled.div`
width: 75%;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
`

const Item = styled.div`
width: calc(20rem - 4vw); padding: 1rem 0;
color: ${props => props.theme.body};
margin: 2rem 1rem;
position: relative;
z-index: 5;
backdrop-filter: blur(4px);

border: 2px solid ${props => props.theme.text};
border-radius: 20px;
&:hover{
  img {
    transform: translateY(-2rem) scale(1.2);
  transition: all 0.3s ease;
  }
}
`

const ImgContainer = styled.div`
width: 80%;
margin: 0 auto;
background-color: ${props => props.theme.carouselColor};
border: 1px solid ${props => props.theme.text};
padding: 1rem;

border-radius: 20px;
cursor: pointer;

img{
width: 100%;
height: auto;
}
`

const Name = styled.p`
font-size: ${props => props.theme.fontlg};
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
color: ${props => props.theme.text};
margin-top: 1rem;
`

const Position = styled.p`
font-size: ${props => props.theme.fontmd};
display: flex;
align-items: center;
justify-content: center;
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba}, 0.9)`};
font-weight:400;
`

export default Team;