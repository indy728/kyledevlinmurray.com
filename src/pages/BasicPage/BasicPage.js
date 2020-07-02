import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Main from 'components/BasicPage';
import { SideNav } from 'components/UI';
import ContentTemplate from '../templates/contentTemplate';

const Wrapper = styled(ContentTemplate)`
  flex: 1;
  position: relative;
`;

class BasicPage extends Component {
  state = {
    sideNavVisible: false,
  }

  toggleSideNavHandler = () => {
    this.setState((prevState) => ({ sideNavVisible: !prevState.sideNavVisible }));
  }

  render() {
    const { routeComponents } = this.props;
    const { sideNavVisible } = this.state;

    return (
      <Wrapper className="basic-page">
        <SideNav
          sideNavItems={routeComponents}
          visible={sideNavVisible}
          toggleFunc={this.toggleSideNavHandler}
        />
        <Main />
      </Wrapper>
    );
  }
}

BasicPage.propTypes = {
  routeComponents: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default BasicPage;
