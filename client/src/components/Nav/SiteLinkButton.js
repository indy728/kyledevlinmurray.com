import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from 'themes/media';

const LinkItem = styled.li`
  white-space: nowrap;
  vertical-align: baseline;
  text-align: center;
  margin: 0;
  min-width: 6.4rem;
  max-width: 14rem;
  line-height: 4rem;
  padding: 0 1.6rem;
  border-radius: .4rem;
  overflow: hidden;

  @media ${device.md} {
    line-height: 3rem;
  }

  @media ${device.lg} {
    line-height: 4rem;
  }

  &.ready {
    cursor: pointer;
    transition: all ease-in .3s;
    border-bottom: 1px solid ${({ theme }) => theme.palette.border.accent};

    :hover {
      background-color: ${({ theme }) => theme.palette.active};
      transform: scale(1.1) translateY(-.2rem);
      transition: all ease-out .3s;
    }
  }

  &.active {
    background-color: ${({ theme }) => theme.palette.active};
    border: 1px solid ${({ theme }) => theme.palette.border.complement};
    pointer-events: none;

    * {
      color: ${({ theme }) => theme.palette.font.complement};
    }
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.white};
  }

  :not(:first-child) {
    margin-left: 1.2rem;
  }
`;

const SiteButtonWrapper = styled.span`
  font-size: 1.6rem;
`;

const siteLinkButton = (props) => {
  const { href, linkName, active } = props;

  return (
    <LinkItem className={active ? 'active' : 'ready'}>
      <a href={href}>
        <SiteButtonWrapper>
          {linkName}
        </SiteButtonWrapper>
      </a>
    </LinkItem>
  );
};

siteLinkButton.propTypes = {
  href: PropTypes.string.isRequired,
  linkName: PropTypes.string.isRequired,
  active: PropTypes.bool,
};
siteLinkButton.defaultProps = {
  active: false,
};

export default siteLinkButton;
