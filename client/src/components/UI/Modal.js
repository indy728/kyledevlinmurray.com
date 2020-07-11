import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from 'themes/media';

const Wrapper = styled.div`
  position: fixed;
  z-index: 999999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(4, 4, 0, .7);
  justify-content: center;

  @media ${device.sm} {}

  @media ${device.md} {}

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

const Modal = ({ className, children }) => (
  <Wrapper
    className={className}
  >
    {children}
  </Wrapper>
);

Modal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.elementType),
};

Modal.defaultProps = {
  className: 'modal',
  children: null,
};

export default Modal;
