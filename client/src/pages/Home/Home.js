import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Intro, Project, Music } from 'components/Home';
import { StickyNav } from 'components/UI';
import { device } from 'themes/media';
import ContentTemplate from '../templates/contentTemplate';

const Wrapper = styled(ContentTemplate)`
  width: 100%;
  flex: 1;
  flex-flow: column;
  padding: 0;
`;

class Home extends Component {
  state = {

  }

  render() {
    const { routeComponents, id } = this.props;

    return (
      <Wrapper className="home">
        {/* <img src={oregonCoffee} /> */}
        <Intro />
        <Project />
        <Music />
      </Wrapper>
    );
  }
}

Home.propTypes = {
  routeComponents: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    component: PropTypes.elementType,
    path: PropTypes.string,
    exact: PropTypes.bool,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  id: state.auth.id,
});

export default connect(mapStateToProps)(Home);
