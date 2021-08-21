import React, { Component, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import routes from "../../routes";

const DefaultHeader = React.lazy(()=>import('./DefaultHeader'))

export default class Layout extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );
  render() {
    return (
      <React.Fragment>
        <Suspense fallback={this.loading()}>
        <DefaultHeader />
        </Suspense>
        <main>
          <Container fluid>
            <Suspense fallback={this.loading()}>
              <Switch>
                {routes.map((route, idx) => {
                  return route.component ? (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={(props) => {
                        console.log("update route =>", this.props); //update the path
                        return <route.component {...props} />;
                      }}
                    />
                  ) : null;
                })}
                <Redirect
                    from="/login"
                    to={this.props.path ? this.props.path : "/home"}
                  />
                  <Redirect from="/" to="/home" />
              </Switch>
            </Suspense>
          </Container>
        </main>
      </React.Fragment>
    );
  }
}
