import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from 'themes/media';

const Wrapper = styled.div`
  border-radius: 50%;
  justify-content: space-between;
  padding: .1rem;
`;

const Line = styled.div`
  width: 100%;

  &:first-child, &:last-child {
    width: 80%;
  }
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
