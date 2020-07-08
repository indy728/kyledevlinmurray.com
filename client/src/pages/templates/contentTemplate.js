import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from 'themes/media';

const Wrapper = styled.div`
  width: 100%;
  min-height: inherit;
  background-color: ${({ theme }) => theme.palette.white};
  align-items: normal;
  flex-flow: row;
  padding: 1.5rem 0;

  @media ${device.sm} {
  }

  @media ${device.md} {
  }

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

const contentTemplate = (props) => {
  const {
    className, children,
  } = props;

  return (
    <Wrapper className={className}>
      {children}
    </Wrapper>
  );
};

contentTemplate.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default contentTemplate;
