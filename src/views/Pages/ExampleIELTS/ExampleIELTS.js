import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const DefaultFooter = React.lazy(() => import('../../../containers/DefaultLayout/DefaultFooter'));
const DefaultNav = React.lazy(() => import('../../../containers/DefaultLayout/DefaultNav'));
class ExampleIELTS extends Component {
  render() {
    return (
      <React.Fragment>
        <DefaultNav />
        <DefaultFooter />
      </React.Fragment>
    );
  }
}

export default ExampleIELTS;
