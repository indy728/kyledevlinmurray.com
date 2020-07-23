import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StickyNav } from 'components/UI';
import Nav from './nav/nav';
import Footer from './footer/footer';
import Content from './content/content';

class Layout extends Component {
  state = {

  }

  links = [
    { name: 'Indy', url: 'https://indy728.github.io', active: true },
    { name: 'Black Lives Matter Resources', url: 'https://indy728.github.io/blm' },
  ]

  render() {
    const { routeComponents, children } = this.props;

    return (
      <>
        <StickyNav stickyNavItems={routeComponents} />
        <Content
          routeComponents={routeComponents}
        >
          {children}
        </Content>
        <Footer links={this.links} />
      </>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element,
  routeComponents: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    component: PropTypes.elementType,
    path: PropTypes.string,
    exact: PropTypes.bool,
  })).isRequired,
};
Layout.defaultProps = {
  children: null,
};

export default Layout;
