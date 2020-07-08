import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { device } from 'themes/media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapSigns, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavWrapper = styled.div`
  width: 100%;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  background-color: ${({ theme }) => theme.palette.overlay.primary};
  position: absolute;
  padding: 2rem 8rem;
  top: ${({ theme }) => theme.height.navbar.xs};
  z-index: 999;
  animation: slideInDown .3s linear;

  &.fixed {
    position: fixed;
    top: 0;
  }
`;

const ButtonWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.white};
  color: ${({ theme }) => theme.palette.black};
  justify-content: center;
  z-index: 9998;
  box-shadow: 0 0 9px  ${({ theme }) => theme.palette.primary[2]};;
  position: absolute;

  top: ${({ theme }) => `${parseInt(theme.height.navbar.xs, 0) + 2.5}rem`};
  right: 2.5rem;
  transition: all .2s ease-out;

  &.fixed {
    position: fixed;
    top: 2.5rem;
  }

  :hover {
    transform: scale(1.3);
  }

  :active {
    transform: scale(1.2) translateY(.2rem);
  }

  > svg {

    @media ${device.maxMd} {
      &.fa-map-signs {
        transform: translate(1px, 1px) scale(1.4);
      }
    }

    transform: scale(1.3);
  }

`;

const StickyNavLink = styled(NavLink)`
  width: 100%;
  height: 5rem;
  margin: .2rem;
  justify-content: center;
  flex-flow: row;
  border-radius: 4px;
  font-size: 110%;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
  
  transition: all .2s ease-out;
  span {
    color: ${({ theme }) => theme.palette.font.primary};
  }

  :hover {
    transform: scale(1.1) translateY(-.5rem);
    border-bottom: 2px solid ${({ theme }) => theme.palette.border.accent};
  }

  &.sticky-nav__active {
    transform: none;
    pointer-events: none;

    span {
      color: ${({ theme }) => theme.palette.font.complement};
    }
  }
`;

const StickyNavList = styled.ul`
  @media ${device.sm} {
    flex-flow: row;

    > :not(:first-child) {
      margin-left: 4rem;
    }
  }
`;

const LinkChar = styled.span`
  animation: moveInTop 1s ease-out;
  animation-delay: ${({ delay }) => `${delay}ms`};
`;

class StickyNav extends Component {
  state = {
    visible: false,
    fixed: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const navbar = document.getElementById('navbar');
    const navbarHeight = navbar && navbar.offsetHeight;
    this.setState({ fixed: window.pageYOffset >= navbarHeight });
  }

  toggleVisibility = () => {
    this.setState((prevState) => ({ visible: !prevState.visible }));
  }

  render() {
    const { stickyNavItems } = this.props;
    const { fixed, visible } = this.state;
    const positionClass = fixed ? 'fixed' : 'float';
    const buttonIcon = visible ? faTimes : faMapSigns;
    const stickyNavButtons = stickyNavItems.map((stickyNavLink) => (
      <li key={stickyNavLink.name}>
        <StickyNavLink
          to={stickyNavLink.path}
          activeClassName="sticky-nav__active"
          isActive={(match, location) => {
            if (!match) {
              return false;
            }
            const { pathname } = location;
            return pathname === stickyNavLink.path;
          }}
        >
          {stickyNavLink.name.split('').map((char, i) => (
            <LinkChar
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              delay={i * 100}
            >
              {char === ' ' ? '\u00A0' : char}
            </LinkChar>
          ))}
        </StickyNavLink>
      </li>
    ));

    return (
      <>
        <NavWrapper className={positionClass} visible={visible}>
          <StickyNavList>
            {stickyNavButtons}
          </StickyNavList>
        </NavWrapper>
        <ButtonWrapper className={positionClass} onClick={this.toggleVisibility}>
          <FontAwesomeIcon icon={buttonIcon} />
        </ButtonWrapper>
      </>
    );
  }
}

StickyNav.propTypes = {
  stickyNavItems: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default StickyNav;
