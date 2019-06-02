import React, { useState } from "react";
import SearchParams from "./SearchParams";

// Router
import { Router, Link } from "@reach/router";

// Context
import ThemeContext from "./ThemeContext";

// Code Splitting
// const Details = lazy(() => import("./Details"));
import Details from "./Details";

const App = () => {
  const themeHook = useState("darkblue");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <header>
          <Link to="/"> Adopt Me </Link>
        </header>
        {/* <Suspense fallback={<h1> Loading Route... </h1>}>
          <Router>
            <SearchParams path="/" />
            <Details path="details/:id" />
          </Router>
        </Suspense> */}
        <Router>
          <SearchParams path="/" />
          <Details path="details/:id" />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
