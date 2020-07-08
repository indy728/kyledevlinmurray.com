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
`;

const LinkList = styled.ul`
  @media ${device.sm} {
    align-items: flex-start;
  }
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
    border-bottom: 1px solid ${({ theme }) => theme.palette.border.accent};

    :hover {
      background-color: ${({ theme }) => theme.palette.primary[3]};
      transform: scale(1.1) translateY(-.2rem);
      transition: all ease-out .3s;
    }
  }

  &.active {
    pointer-events: none;

    * {
      color: ${({ theme }) => theme.palette.analog.warmest};
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
