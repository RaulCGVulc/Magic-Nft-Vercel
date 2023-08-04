import React, { useState } from 'react';
import styled from 'styled-components';
import { Logo } from '../Logo';
import { ButtonWalletConect } from '../ButtonWalletConect';
import { FormPopUp } from '../FormPopUp';


const Navigation = () => {
  const [showForm, setShowForm] = useState(false);
  const [click, setClick] = useState(0);
  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    setClick(!click);
  }

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleMenu = () => {
    if(click) {
      setClick(0)
      return null
    }
    setClick(1)
  }

  return (
    <Section id="navigation">
      <NavBar>
        <Logo />
        <HamburgerMenu click={click} onClick={handleMenu}>
          &nbsp;
        </HamburgerMenu>
        
        <Menu click={click}>
          <MenuItem onClick={() => scrollTo("home")}>Home</MenuItem>
          <MenuItem onClick={() => scrollTo("about")}>About</MenuItem>
          <MenuItem onClick={() => scrollTo("roadmap")}>Roadmap</MenuItem>
          <MenuItem onClick={() => scrollTo("showcase")}>Showcase</MenuItem>
          <MenuItem onClick={() => scrollTo("team")}>Team</MenuItem>
          {/* <MenuItem onClick={() => scrollTo("faq")}>Faq</MenuItem> */}
          <MenuItem style={{ color: '#002f87', fontWeight: 'bold' }} onClick={handleOpenForm}>FORM</MenuItem>
          <MenuItem>
            <div className="mobile">
              <ButtonWalletConect />
            </div>
          </MenuItem>
        </Menu>
        <div className="desktop">
          <ButtonWalletConect />
        </div>
      </NavBar>

      {showForm && <FormPopUp onClose={handleCloseForm} />}
    </Section>
  )
};

const Section = styled.section`
width: 100%;
background-color: ${props => props.theme.body};
`

const NavBar = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
width: 85%;
height: ${props => props.theme.navHeight};
margin: 0 auto;
.mobile{
  display: none;
}
@media (max-width: 64em) {
  .desktop{

    display: none;
  }
.mobile{
  display: inline-block;
}
}
`

const Menu = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
list-style: none;

@media (max-width: 60em) {
  position: fixed;
  top: ${props => props.theme.navHeight};
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: ${props => `calc(100vh-${props.theme.navHeight})`}; z-index: 50;
  background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.85)`};
  backdrop-filter: blur (2px);
  transform: ${props => props.click ? `translateY(0)` : `translateY(100%)`};
  transition: all 0.3s ease;
  flex-direction: column;
  justify-content: center;

  
}
`

const MenuItem = styled.li`
  margin: 0 1rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }
  @media (max-width: 64em) {
    margin: 1rem 0;

    &::after {
      display: none;
    }
  }
`;

const HamburgerMenu = styled.span`
width: ${props => props.click === 1 ? '2rem' : '1.5rem'};
height: 2px;
background: ${props => props.theme.text};
position: absolute;
top: 2rem;
left: 50%;
transform: ${props => props.click === 1 ? 'translateX(-50%) rotate(90deg)' : 'translateX(-50%) rotate(0)'};
display: none;
justify-content: center; align-items: center;
cursor: pointer;
transition: all .3s ease;

@media (max-width: 60em) {
  display: flex;
}

&::after, &::before{
content: ' ';
width: ${props => props.click === 1 ? '1rem' : '1.5rem'};
height: 2px;
right: ${props => props.click === 1 ? '-2px' : '0'};
background: ${props => props.theme.text};
position: absolute;
transition: width 0.3s ease;

}
&::after{
  top: ${props => props.click === 1 ? '0.3rem' : '0.5rem'};
  transform: ${props => props.click === 1 ? 'rotate(-40deg)' : 'rotate(0)'};
}
&::before{
  bottom: ${props => props.click === 1 ? '0.3rem' : '0.5rem'};
  transform: ${props => props.click === 1 ? 'rotate(40deg)' : 'rotate(0)'};
}
`


export default Navigation;