import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from 'themes/media';
import { LinkListItem } from 'components/UI';

const Wrapper = styled.div`
  color: ${({ theme }) => theme.palette.white};

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

const footerLinks = (props) => {
  const { links } = props;

  const linkList = links.map((link) => (
    <LinkListItem
      key={`${link.name}`}
      url={link.url}
      linkName={link.name}
      active={link.active}
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
