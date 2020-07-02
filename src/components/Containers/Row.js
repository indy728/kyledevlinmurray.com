import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from 'themes/media';

const Wrapper = styled.div`
  width: 100%;

  @media ${device.sm} {}

  @media ${device.md} {}

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

const row = (props) => {
  const { children, className } = props;

  return (
    <Wrapper className={className}>
      {children}
    </Wrapper>
  );
};

row.propTypes = {
  className: PropTypes.string,
};
row.defaultProps = {
  className: 'row',
};

export default row;
