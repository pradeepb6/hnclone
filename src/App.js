import React, { useState } from "react";
import Navbar from "./components/NavBar";
import News from "./components/News";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

const App = () => {
  const [isLoading, setLoadingState] = useState(true);

  const showLoader = () => {
    setLoadingState(true);
  };
  const hideLoader = () => {
    setLoadingState(false);
  };

  return (
      <Router>
        <Navbar showLoader={showLoader} />
        <Switch>
          <>
            <Route
                exact
                key="home"
                path="/"
                render={() => (
                    <News
                        isLoading={isLoading}
                        hideLoader={hideLoader}
                        showLoader={showLoader}
                    />
                )}
            />
            <Route
                key="shows"
                path="/shows"
                render={() => (
                    <News
                        isLoading={isLoading}
                        hideLoader={hideLoader}
                        showLoader={showLoader}
                    />
                )}
            />
            <Route
                key="ask"
                path="/ask"
                render={() => (
                    <News
                        isLoading={isLoading}
                        hideLoader={hideLoader}
                        showLoader={showLoader}
                    />
                )}
            />
            <Route
                key="jobs"
                path="/jobs"
                render={() => (
                    <News
                        isLoading={isLoading}
                        hideLoader={hideLoader}
                        showLoader={showLoader}
                    />
                )}
            />

            <Route
                key="top"
                path="/top"
                render={() => (
                    <News
                        isLoading={isLoading}
                        hideLoader={hideLoader}
                        showLoader={showLoader}
                    />
                )}
            />
            <Route
                key="new"
                path="/new"
                render={() => (
                    <News
                        isLoading={isLoading}
                        hideLoader={hideLoader}
                        showLoader={showLoader}
                    />
                )}
            />
            <Route
                key="best"
                path="/best"
                render={() => (
                    <News
                        isLoading={isLoading}
                        hideLoader={hideLoader}
                        showLoader={showLoader}
                    />
                )}
            />
          </>
        </Switch>
      </Router>
  );
};

export default App;
