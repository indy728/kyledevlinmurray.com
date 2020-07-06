import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from 'themes/media';
import { bartending } from 'assets/img/jpg';
import { columboStart } from 'assets/img/gif';

const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.analog.warmest};
  min-height: 100vh;
  justify-content: space-around;

  > :not(:first-child) {
    margin-bottom: 2rem;
  }

  > :not(:last-child) {
    margin-top: 2rem;
  }

  @media ${device.md} {
    background-image: url(${bartending});
    background-color: rgba(100, 4, 4, 0.8);
    background-size: contain;
    background-position: center;
  }

  @media ${device.sm} {}

  @media ${device.md} {}

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

const ProjectHeader = styled.div`
  h2 {
    font-size: 3rem;
    font-family: ${({ theme }) => theme.fonts.cursive};
    color: ${({ theme }) => theme.palette.analog.coolest};
  }
`;

const ProjectDetails = styled.div`
  width: 90%;
  padding: 2rem;
  background-color: ${({ theme }) => theme.palette.analog.coolest};

  font-size: 2.6rem;
  * {
    text-align: center;
    color: ${({ theme }) => theme.palette.white};
  }

  > :not(:first-child) {
    margin-top: 2rem;
  }
`;

const ProjectLink = styled.div`
  /* height: 8rem; */
  justify-content: center;
  font-size: 2rem;

  a.here {
    color: ${({ theme }) => theme.palette.analog.coolest};;
  }
`;

const ColumboWrapper = styled.div`
  width: 24rem;
  border: 1rem solid ${({ theme }) => theme.palette.analog.coolest};
  /* box-shadow: 0 0 1.2rem 1.2rem ${({ theme }) => theme.palette.analog.coolest}; */
`;

const project = (props) => {
  const { prop } = props;
  const projectLink = (<a href="https://github.com/indy728/columbo" className="here">Check out the project on Github</a>);

  return (
    <Wrapper>
      <ProjectHeader>
        <h2>
          Current Project
        </h2>
      </ProjectHeader>
      <ProjectDetails>
        <h3>Columbo RN</h3>
        <p>
          A real-time, 1- to 4-player card game built for mobile with React Native
        </p>
      </ProjectDetails>
      <ColumboWrapper>
        <img src={columboStart} alt="highlighted project" width="100%" />
      </ColumboWrapper>
      <ProjectLink>
        {projectLink}
      </ProjectLink>
    </Wrapper>
  );
};

project.propTypes = {
};

export default project;
