import React, { useState, lazy, Suspense } from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

// Router
import { Router, Link } from "@reach/router";

// Context
import ThemeContext from "./ThemeContext";

// Code Splitting
const Details = lazy(() => import("./Details"));

const App = () => {
  const themeHook = useState("darkblue");
  return (
    <ThemeContext.Provider value={themeHook}>
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
    </ThemeContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
