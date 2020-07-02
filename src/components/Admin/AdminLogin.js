import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from 'themes/media';

const Wrapper = styled.div`
  text-decoration: underline;
  font-size: 75%;

  @media ${device.sm} {}

  @media ${device.md} {}

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

const AdminLogin = (props) => {
  const { clicked } = props;

  return (
    <Wrapper onClick={clicked}>
      <p>admin login</p>
    </Wrapper>
  );
};

AdminLogin.propTypes = {
  clicked: PropTypes.func.isRequired,
};

export default AdminLogin;
