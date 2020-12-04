import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Main from "./Main";

// services
import GlobaContextProvider, {
  GlobalStateContext,
  GlobalDispatchContext,
} from "../services/GlobalContext";

function App() {
  return (
    <GlobaContextProvider>
      <GlobalStateContext.Consumer>
        {(state) => (
          <GlobalDispatchContext.Consumer>
            {(dispatch) => (
              <Router>
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={Main}
                    state={state}
                    dispatch={dispatch}
                  />
                </Switch>
              </Router>
            )}
          </GlobalDispatchContext.Consumer>
        )}
      </GlobalStateContext.Consumer>
    </GlobaContextProvider>
  );
}

export default App;
