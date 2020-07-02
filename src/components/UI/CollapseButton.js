import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from 'themes/media';

const Wrapper = styled.div`
  border-radius: 3px;
  justify-content: space-between;
  padding: .2rem;

  @media ${device.sm} {}

  @media ${device.md} {}

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

const Line = styled.div`
  width: 100%;
  border-bottom: .3rem solid ${({ theme }) => theme.palette.primary};

  @media ${device.sm} {
  }

  @media ${device.md} {}

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

const collapseButton = (props) => {
  const { className, clicked } = props;

  return (
    <Wrapper onClick={clicked} className={className}>
      <Line />
      <Line />
      <Line />
    </Wrapper>
  );
};

collapseButton.propTypes = {
  className: PropTypes.string,
  clicked: PropTypes.func.isRequired,
};
collapseButton.defaultProps = {
  className: '',
};

export default collapseButton;
