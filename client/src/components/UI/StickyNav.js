import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { device } from 'themes/media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes, faBars,
} from '@fortawesome/free-solid-svg-icons';

const NavWrapper = styled.div`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  background-color: ${({ theme }) => theme.palette.overlay.primary};
  position: fixed;
  padding: 4rem 2rem;
  overflow: auto;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  animation: slideInDown .3s linear;
  justify-content: center;

  @media ${device.maxLg} {
    bottom: 0;
  }

  @media ${device.lg} {
    padding: 1rem 3rem;
    height: 12rem;

    animation: slideInDown .15s linear;
    align-items: flex-start;
  }
`;

const ButtonWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.white};
  justify-content: center;
  z-index: 9998;
  box-shadow: 0 0 4px 2px ${({ theme }) => theme.palette.primary[2]};;
  position: fixed;
  top: 2.5rem;
  right: 2.5rem;
  transition: all .1s ease-out;

  > svg {
    transform: scale(1.3);

    * {
      color: ${({ theme }) => theme.palette.primary[1]};
    }
  }

  :hover {
    transform: scale(1.2);
  }

  :active {
    transform: scale(1.1) translateY(.2rem);
  }

  @media ${device.lg} {
    top: 4rem;
    right: 4rem;
  }
`;

const StickyNavLink = styled(NavLink)`
  padding: 1.5rem 2.5rem;
  margin: .2rem;
  justify-content: center;
  flex-flow: row;
  border-radius: 4px;
  font-size: 2.4rem;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
  transition: all .2s ease-out;
  color: ${({ theme }) => theme.palette.font.primary};
  border-bottom: 2px solid ${({ theme }) => theme.palette.border.accent};

  :hover {
    background-color: ${({ theme }) => theme.palette.cool[1]};
    transform: scale(1.1) translateY(-.5rem);
  }

  &.sticky-nav__active {
    transform: none;
    pointer-events: none;
    border-bottom: none;

    color: ${({ theme }) => theme.palette.font.complement};
  }

  @media ${device.lg} {
    font-size: 2rem;
  }
`;

const StickyNavList = styled.ul`
  > :not(:first-child) {
      margin-top: 3rem;
    }

  @media ${device.lg} {
    flex-flow: row;

    > :not(:first-child) {
      margin-left: 4rem;
      margin-top: 0;
    }
  }
`;

class StickyNav extends Component {
  state = {
    visible: false,
  }

  toggleVisibility = () => {
    this.setState((prevState) => ({ visible: !prevState.visible }));
  }

  render() {
    const { stickyNavItems } = this.props;
    const { visible } = this.state;
    const buttonIcon = visible ? faTimes : faBars;
    const stickyNavButtons = stickyNavItems.map((stickyNavLink) => (
      <li key={stickyNavLink.name}>
        <StickyNavLink
          to={stickyNavLink.path}
          onClick={this.toggleVisibility}
          activeClassName="sticky-nav__active"
          isActive={(match, location) => {
            if (!match) {
              return false;
            }
            const { pathname } = location;
            return pathname === stickyNavLink.path;
          }}
        >
          {stickyNavLink.name}
        </StickyNavLink>
      </li>
    ));

    return (
      <>
        <NavWrapper visible={visible}>
          <StickyNavList>
            {stickyNavButtons}
          </StickyNavList>
        </NavWrapper>
        <ButtonWrapper onClick={this.toggleVisibility}>
          <FontAwesomeIcon icon={buttonIcon} />
        </ButtonWrapper>
      </>
    );
  }
}

StickyNav.propTypes = {
  stickyNavItems: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    component: PropTypes.elementType,
    path: PropTypes.string,
    exact: PropTypes.bool,

  })).isRequired,
};

export default StickyNav;
