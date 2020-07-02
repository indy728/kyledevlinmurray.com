import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from 'themes/media';

const Wrapper = styled.li`
  align-items: left;

  a {
    text-decoration: underline;
    list-style: none;
    color: ${({ theme }) => theme.palette.white};
  }

  @media ${device.sm} {}

  @media ${device.md} {}

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

const linkListItem = (props) => {
  const { url, linkName, active } = props;

  const className = active ? 'active' : 'ready';

  return (
    <Wrapper className={className}>
      <a href={url}>{linkName}</a>
    </Wrapper>
  );
};

linkListItem.propTypes = {
  url: PropTypes.string.isRequired,
  linkName: PropTypes.string.isRequired,
  active: PropTypes.bool,
};
linkListItem.defaultProps = {
  active: false,
};

export default linkListItem;
