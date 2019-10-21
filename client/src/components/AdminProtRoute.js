import React from "react";
import { Route, Redirect, } from "react-router-dom";
import { AuthConsumer, } from "../providers/AuthProvider";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <AuthConsumer>
    {auth =>
      <Route
        {...rest}
        render={props => {
          if (auth.user) {
            if (auth.user.admin === true) {
              return (
                auth.user.admin ?
                  <Component {...props} />
                  :
                  <Redirect
                    to={{
                      pathname: "/login",
                      state: { from: props.location, },
                    }}
                  />
              )
            }
          }

        }}
      />
    }
  </AuthConsumer>
)

export default ProtectedRoute;