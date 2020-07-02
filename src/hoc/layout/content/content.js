import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from 'themes/media';

const Wrapper = styled.div`
  width: 100%;
  min-height: ${({ minHeight }) => minHeight || '100px'}; 

  @media ${device.sm} {}

  @media ${device.md} {}

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

class content extends Component {
  state = {
    contentMinHeight: '',
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize);
    this.handleWindowResize();
  }

  handleWindowResize = () => {
    const navbarHeight = document.getElementById('navbar').clientHeight;
    const footerHeight = document.getElementById('footer').clientHeight;
    this.setState({ contentMinHeight: `${window.innerHeight - navbarHeight - footerHeight}px` });
  }

  render() {
    const { children } = this.props;
    const { contentMinHeight } = this.state;

    return (
      <Wrapper id="content" minHeight={contentMinHeight}>
        {children}
      </Wrapper>
    );
  }
}

content.propTypes = {
  children: PropTypes.element.isRequired,
};

export default content;
