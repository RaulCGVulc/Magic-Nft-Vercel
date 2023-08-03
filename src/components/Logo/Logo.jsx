import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import logo from '../../assets/logo3.png'
import Image from 'next/image';

const Logo = ({ }) => {
  return (
    <LogoText>
      <Link href={'/'}>
        <LogoContainer>
          <LogoImage src={logo} alt=""/>
        </LogoContainer>
      </Link>
    </LogoText>
  );
};

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
`;

const LogoImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

const LogoText = styled.div`
  font-family: 'Akaya Telivigala', cursive;
  font-size: ${props => props.theme.fontxxxl};
  color: ${props => props.theme.text};
  width: 70px;
  height: 70px;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 64em) {
    font-size: ${props => props.theme.fontxxl};
  }
`;

export default Logo;