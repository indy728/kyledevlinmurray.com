import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1;
  flex-flow: row;
  justify-content: center;

  > div {
    width: 2rem;
    height: 2rem;
    margin: .5rem;
    background-color: ${({ theme }) => theme.palette.white};

    border-radius: 100%;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%, 80%, 100% { -webkit-transform: scale(0) }
    40% { -webkit-transform: scale(1.0) }
  }

  @keyframes sk-bouncedelay {
    0%, 80%, 100% { 
      -webkit-transform: scale(0);
      transform: scale(0);
    } 40% { 
      -webkit-transform: scale(1.0);
      transform: scale(1.0);
    }
  }
`;

const bounceTrioSpinner = () => (
  <Wrapper>
    <div className="bounce1" />
    <div className="bounce2" />
    <div className="bounce3" />
  </Wrapper>
);

export default bounceTrioSpinner;
