import React, { useState } from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

// Router
import { Router, Link } from "@reach/router";
import Details from "./Details";

// Context
import ThemeContext from "./ThemeContext";
import Hooks from "./hooks";

const App = () => {
  const themeHook = useState("darkblue");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <header>
          <Link to="/"> Adopt Me </Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="details/:id" />
          <Hooks path="hooks" />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
