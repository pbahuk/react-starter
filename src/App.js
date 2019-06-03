import React, { lazy, Suspense } from "react";
import SearchParams from "./SearchParams";
import { Router, Link } from "@reach/router";
const Details = lazy(() => import("./Details"));

// Redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <header>
          <Link to="/"> Adopt Me </Link>
        </header>
        <Suspense fallback={<h1> Loading Route... </h1>}>
          <Router>
            <SearchParams path="/" />
            <Details path="details/:id" />
          </Router>
        </Suspense>
      </div>
    </Provider>
  );
};

export default App;
