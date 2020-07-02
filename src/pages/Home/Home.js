import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Main from 'components/Home';
import { StickyNav } from 'components/UI';
import ContentTemplate from '../templates/contentTemplate';

const Wrapper = styled(ContentTemplate)`
  flex: 1;
`;

class Home extends Component {
  render() {
    const { routeComponents, id } = this.props;
    console.log('[Home] id: ', id);

    return (
      <Wrapper className="home">
        <StickyNav stickyNavItems={routeComponents} />
        <Main />
      </Wrapper>
    );
  }
}

Home.propTypes = {
  routeComponents: PropTypes.arrayOf(PropTypes.element).isRequired,
};

const mapStateToProps = (state) => ({
  id: state.auth.id,
});

export default connect(mapStateToProps)(Home);
