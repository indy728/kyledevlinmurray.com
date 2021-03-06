import React, { Component } from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { device } from 'themes/media';
import { CollapseButton } from 'components/UI';
import { NavLinks, NavLogo } from 'components/Nav';

const Navbar = styled.nav`
  width: 100%;
  height: ${({ theme }) => theme.height.navbar.xs};
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => `rgba(${theme.palette.primary[0]}, .1)`};
  padding: 0 2rem;
  position: fixed;
  top: 0;
  z-index: 9999;

  display: none;

  @media ${device.md} {
    padding: 0 3rem;
  }

  * {
    color: ${({ theme }) => theme.palette.font.primary};
  }
`;

const NavCollapse = styled(CollapseButton)`
  padding: 1rem .75rem;

  > div {
    width: 3.2rem;
    border-bottom: .3rem solid ${({ theme }) => theme.palette.white};

    &:not(:first-child) {
      margin-top: .8rem;
    }
  }

  @media ${device.sm} {}

  @media ${device.md} {
    display: none;
  }

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

class Nav extends Component {
  state = {
    showMobileNav: false,
  }

  collapseHandler = () => {
    this.setState((prevState) => ({ showMobileNav: !prevState.showMobileNav }));
  }

  render() {
    const { links, login } = this.props;
    const { showMobileNav } = this.state;

    const pcLinks = showMobileNav
      ? <NavLinks links={links} login={login} show />
      : <NavLinks links={links} login={login} />;

    return (
      <>
        <Navbar id="navbar">
          <NavCollapse className="nav-collapse" clicked={this.collapseHandler} />
          <NavLogo />
          {/* {pcLinks} */}
        </Navbar>
      </>
    );
  }
}

Nav.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  })),
  login: PropTypes.bool,
};
Nav.defaultProps = {
  links: [], login: false,
};

export default Nav;
