import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { device } from 'themes/media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  padding: 2rem 2rem;
  border-right: 2px solid ${({ theme }) => theme.palette.primary[0]};
  background-color: ${({ theme }) => theme.palette.white};
  position: relative;

  @media ${device.maxLg} {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    transition: all .5s linear;
    transform: ${({ visible }) => (visible ? 'translateX(0)' : 'translateX(-100%)')};
  }

  @media ${device.lg} {
    flex: 1;
  }
`;

const SideNavList = styled.ul`
  width: 27.5rem;  

  li {
    width: 100%;
  }
`;


const SideNavLink = styled(NavLink)`
  width: 100%;
  height: 5rem;
  margin: .2rem;
  justify-content: center;

  color: ${({ theme }) => theme.palette.grayscale};
  font-size: 125%;
  font-weight: 600;
  text-transform: uppercase;
  
  transition: all .2s ease-out;

  :hover {
    background-color: ${({ theme }) => theme.palette.grayscale};
    color: ${({ theme }) => theme.palette.font.primary};
    border: .5px outset;
    transform: scale(1.1) translateY(-.5rem);
  }

  &.side-nav__active {
    background-color: ${({ theme }) => theme.palette.grayscale};
    color: ${({ theme }) => theme.palette.font.primary};
    transform: none;
  }
`;

const SideNavToggleButton = styled.div`
  width: 4rem;
  height: 5rem;
  border-radius: 1.5rem;
  background-color: ${({ theme }) => theme.palette.primary[0]};;
  position: absolute;
  top: 2rem;
  right: -3rem;
  flex-flow: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: .8rem;

  * {
    color: ${({ theme }) => theme.palette.white};
  }

  > div {
    height: 100%;
    width: 1rem;
    position: absolute;
    top: 0%;
    left: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.palette.white};
  }

  @media ${device.lg} {
    display: none;
  }
`;

const sideNav = ({ sideNavItems, visible, toggleFunc }) => {
  const chevron = visible ? faChevronLeft : faChevronRight;
  const sideNavButtons = sideNavItems.map((sideNavLink, i) => (
    <li key={sideNavLink.name}>
      <SideNavLink
        to={sideNavLink.path}
        activeClassName="side-nav__active"
        delay={i * 150}
        isActive={(match, location) => {
          if (!match) {
            return false;
          }
          const { pathname } = location;
          return pathname === sideNavLink.path;
        }}
      >
        {sideNavLink.name}
      </SideNavLink>
    </li>
  ));

  return (
    <Wrapper visible={visible}>
      <SideNavList>
        {sideNavButtons}
      </SideNavList>
      <SideNavToggleButton onClick={toggleFunc} visible={visible}>
        <div />
        <FontAwesomeIcon icon={chevron} size="2x" />
      </SideNavToggleButton>
    </Wrapper>
  );
};

sideNav.propTypes = {
  sideNavItems: PropTypes.arrayOf(PropTypes.element).isRequired,
  visible: PropTypes.bool,
  toggleFunc: PropTypes.func.isRequired,
};
sideNav.defaultProps = {
  visible: false,
};

export default sideNav;
