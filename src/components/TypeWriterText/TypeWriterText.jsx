import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';
import { Button } from '../Button';

const Title = styled.h2`
font-size: ${(props) => props.theme.fontxxl}; text-transform: capitalize;
width: 80%;
color: ${(props) => props.theme.text}; align-self: flex-start;
span {
  text-transform: uppercase;
font-family: "Akaya Telivigala", cursive;
  
}
.text-1{
  color: #6a3896;
}

.text-2{
color: #fe8543;
}

.text-3{
color: #e22157;
}

@media (max-width: 70em) {
  font-size: ${(props) => props.theme.fontxl};
}
@media (max-width: 48em) {
align-self: center;
text-align:center;
}

@media (max-width: 40em) {
  width: 90%;
}
`

const Subtitle = styled.h3`
font-size: ${(props) => props.theme.fontlg};
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
font-weight: 600;
margin-bottom: 1rem;
width: 80%;
align-self: flex-start;

@media (max-width: 40em) {
  font-size: ${(props) => props.theme.fontmd};
}

@media (max-width: 48em) {
align-self: center;
text-align:center;

button {
  margin: 0 auto;
}
}

`

const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;

  @media (max-width: 48em) {
    align-self: center;
    text-align:center;
}
`

const TypeWriterText = () => {
  return (
    <>
      <Title>
        Join the Magistrate!

        <Typewriter
          options={{
            autoStart: true,
            loop: true
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(`<span class="text-1">Master $Magic.</span>`)
              .pauseFor(2000)
              .deleteAll()
              .typeString(`<span class="text-2">Make frens.</span>`).pauseFor(2000)
              .deleteAll()
              .typeString(`<span class="text - 3">Discover Token-2022!</span>`)
              .pauseFor(2000)
              .deleteAll()
              .start()
          }}
        />
      </Title>
      <Subtitle>
        Each mage will get a $Magic airdrop
      </Subtitle>
      <ButtonContainer>
        <Button text={'Explore'} link={'https://magiceden.io/marketplace/maigc_spirits'} />
      </ButtonContainer>
    </>
  )
}

export default TypeWriterText