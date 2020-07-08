import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from 'themes/media';
import { LinkListItem } from 'components/UI';

const Wrapper = styled.div`
  color: ${({ theme }) => theme.palette.white};

  h2 {
    text-decoration: underline;
  }

  @media ${device.sm} {
    align-items: flex-start;

  }

  @media ${device.md} {
  }

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

const LinkList = styled.ul`
  @media ${device.sm} {
    align-items: flex-start;
  }

  @media ${device.md} {
  }

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

const FooterLink = styled(LinkListItem)`
  min-height: 2.4rem;
  margin-top: .6rem;
  justify-content: center;
  padding: .6rem 1rem;

  &:last-child {
    margin-bottom: .6rem;
  }

  &.ready {
    cursor: pointer;
    transition: all ease-in .3s;
    border-radius: .6rem;
    border-right: none;
    border-bottom: 1px solid ${({ theme }) => theme.palette.border.accent};

    :hover {
      background-color: ${({ theme }) => theme.palette.primary[3]};
      transform: scale(1.1) translateY(-.2rem);
      transition: all ease-out .3s;
      padding-left: 1rem;
    }
  }

  &.active {
    /* background-color: ${({ theme }) => theme.palette.active}; */
    /* border: 1px solid ${({ theme }) => theme.palette.border.complement}; */
    pointer-events: none;

    * {
      color: ${({ theme }) => theme.palette.analog.warmest};
    }
  }

  @media ${device.sm} {
    padding: .6rem 1rem .6rem 0;
    
    &.ready {
      border-bottom: none;
      border-right: 1px solid ${({ theme }) => theme.palette.border.accent};
    }
  }
`;

const footerLinks = (props) => {
  const { links } = props;

  const linkList = links.map(({ name, url, active }) => (
    <FooterLink
      key={`${name}`}
      url={url}
      linkName={name}
      active={active}
      className={`footer-link ${active ? 'active' : 'ready'}`}
    />
  ));

  return (
    <Wrapper>
      <h2>Associated Pages</h2>
      <LinkList>
        {linkList}
      </LinkList>
    </Wrapper>
  );
};

footerLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  })),
};
footerLinks.defaultProps = {
  links: [],
};

export default footerLinks;
