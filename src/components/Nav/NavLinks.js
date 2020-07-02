import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { device } from 'themes/media';
import { FlexSpacer } from 'components/UI';
import { SiteLinkButton } from '.';

const Wrapper = styled.div`
  width: 100%;
  flex-direction: row;
  ul {
      flex-direction: row;
      flex-wrap: nowrap;
    }

  @media ${device.sm} {}

  @media ${device.maxMd} {
    background-color: ${({ theme }) => theme.palette.primary[0]};
    display: ${({ show }) => (show ? 'flex' : 'none')};
    position: absolute;
    top: ${({ theme }) => theme.height.navbar.xs};
    left: 0;
    z-index: 9999;
    animation: slideInDown .3s ease-out;
    align-items: flex-start;
    padding: 2rem 4rem;
    overflow: hidden;
  }

  @media ${device.md} {
    margin-left: 4rem;
    position: relative;
    flex-wrap: nowrap;
    animation: moveInBottom 1s ease-out;
  }

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

const LoginButton = styled.span`
  flex-direction: row;
  color: white;
  height: 100%;
`;

const NavLinks = (props) => {
  const { links, login, show } = props;

  const siteLinks = links.map((link) => (
    <SiteLinkButton
      key={`${link.name}`}
      href={link.url}
      linkName={link.name}
      active={link.active}
    />
  ));
  const authButton = login
    ? (
      <LoginButton>
        <FontAwesomeIcon icon={faSignInAlt} />
        &nbsp;Sign In
      </LoginButton>
    ) : null;

  return (
    <Wrapper show={show}>
      <ul>
        {siteLinks}
      </ul>
      <FlexSpacer />
      {authButton}
    </Wrapper>
  );
};

NavLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  })),
  login: PropTypes.bool,
  show: PropTypes.bool,
};
NavLinks.defaultProps = {
  links: [], login: false, show: false,
};

export default NavLinks;
