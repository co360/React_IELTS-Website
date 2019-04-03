import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
// sidebar nav config
// import navigation from '../../_nav';
// routes config
import AOS from 'aos';
import routes from '../../routes';
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    AOS.init({
      offset: 200,
      easing: 'ease-in-sine',
      delay: 200,
      disabled: window.innerWidth<767,
      duration: 1500
    });
  }
  loading = () =><div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  render() {
    return (
      <div className="app">
          <Suspense  fallback={this.loading()}>
            <DefaultHeader /> 
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
                  <Redirect from="/" to="/" />
                </Switch>
            <DefaultFooter />
          </Suspense>
      </div>
    );
  }
}

export default DefaultLayout;
