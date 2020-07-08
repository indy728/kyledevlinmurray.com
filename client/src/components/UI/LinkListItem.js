import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from 'themes/media';

const Wrapper = styled.li`
  align-items: left;

  a {
    text-decoration: none;
    list-style: none;
    color: ${({ theme }) => theme.palette.white};
  }

  @media ${device.sm} {}

  @media ${device.md} {}

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

const linkListItem = ({
  url, linkName, className,
}) => (
  <Wrapper className={className}>
    <a href={url}>{linkName}</a>
  </Wrapper>
);

linkListItem.propTypes = {
  url: PropTypes.string.isRequired,
  linkName: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
linkListItem.defaultProps = {
  active: false,
};

export default linkListItem;
