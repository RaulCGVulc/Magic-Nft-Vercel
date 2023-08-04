import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';

import okFrom from '../../assets/icons/ok-circle-svgrepo-com2.svg';

const Alert = ({click = 1, handleClickAlarm}) => {

  return (
    <>
      <AlertWrapper click={click}>
        <SvgIconOk src={okFrom} alt='icon ok' />
        <Text>Form sent!</Text>
        <CloseButton onClick={handleClickAlarm}>&times;</CloseButton>
      </AlertWrapper>
    </>
  );
};

const AlertWrapper = styled.div`
  border-radius: 5px;
  width: 220px;
  height: 30px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: rgba(147, 209, 117, 0.50);
  cursor: pointer;
  box-shadow: 9px 9px 18px #262c3e, -9px -9px 18px #30384e;
  color: #0ad406;
  margin: 20px;
  position: absolute;
  z-index: 100;
  top: 0;
  left: ${(props) => (props.click === 1 ? '-10px' : '-300px')};
  transition: left 0.5s ease;

`;

// Define los dos estados de filtro
const filterStateOne = "invert(45%) sepia(94%) saturate(710%) hue-rotate(78deg) brightness(105%) contrast(113%)";
const filterStateTwo = "invert(100%) sepia(3%) saturate(331%) hue-rotate(231deg) brightness(119%) contrast(100%)";

// Crea la animación utilizando keyframes
const blinkAnimation = keyframes`
  0% {
    filter: ${filterStateOne};
  }
  50% {
    filter: ${filterStateTwo};
  }
  100% {
    filter: ${filterStateOne};
  }
`;

const SvgIconOk = styled(Image)`
  /* Establece la animación */
  animation: ${blinkAnimation} 1.5s infinite;
  /* Agrega una duración de transición para que la animación sea más suave */
  transition: 0.2s;
  /* Aplica el estado inicial de filtro */
  filter: ${filterStateOne};
`;

const Text = styled.p`
  font-weight: bold;
  font-size: 20px;
`

const CloseButton = styled.span`
  font-size: 35px;
  font-weight: bold;
`

export default Alert;