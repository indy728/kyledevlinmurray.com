import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from 'themes/media';

const Wrapper = styled.div`
  width: 100%;
  min-height: 80vh;
  background-color: ${({ theme }) => theme.palette.white};
  padding: 6rem 3rem;

  * {
    text-align: center;
  }

  @media ${device.sm} {}

  @media ${device.md} {}

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

const Header = styled.div`
  h1 {
    font-size: 4.8rem;
    font-family: ${({ theme }) => theme.fonts.cursive};
    color: ${({ theme }) => theme.palette.complement[0]};
  }
`;

const Content = styled.div`
  margin-top: 4rem;
  width: 100%;
  max-width: 80rem;
`;

const Card = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: lightgrey;
  box-shadow: 2px 2px 2px ${({ theme }) => theme.palette.complement[0]};

  &:not(:first-child) {
    margin-top: 4rem;
  }
`;

class AppADay extends Component {
  state = {

  }

  render() {
    const apps = {
      a: {
        name: 'Current Films',
        description: 'Fetch a list of current or upcoming films and display their posters.',
        dataSource: 'The Movie Database (TMDb)',
        date: new Date('July 15, 2020'),
        url: 'https://safe-fjord-10121.herokuapp.com/',
      },
      b: {
        name: 'Local Weather',
        description: 'Get the weather for any US zipcode in ˚C or ˚F',
        dataSource: 'openweatherapp.org',
        date: new Date('July 20, 2020'),
        url: 'https://powerful-waters-29077.herokuapp.com/',
      },
      c: {
        name: 'Top News',
        description: 'Display top 10 news stories from various sources OR search for headlines or news topics.',
        dataSource: 'Google NewsAPI',
        date: new Date('July 22, 2020'),
        url: 'https://serene-river-75344.herokuapp.com/',
      },
    };

    console.log(apps.a.date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateFormat = (date) => date.toLocaleDateString('en-us', options);

    console.log(Object.entries(apps));

    const appCards = Object.entries(apps).map((app) => {
      const {
        name, description, dataSource, date, url,
      } = app[1];

      return (
        <Card key={app[0]}>
          <div><a href={url} target="_blank">{name}</a></div>
          <div>{description}</div>
          <div>{dataSource}</div>
          <div>{dateFormat(date)}</div>
        </Card>
      );
    });

    return (
      <Wrapper>
        <Header>
          <h1>App-A-Day</h1>
        </Header>
        <Content>
          {appCards}
        </Content>
      </Wrapper>
    );
  }
}

AppADay.propTypes = {
};

export default AppADay;
