import React from "react";
import { hydrate } from "react-dom";
import App from "./App";

// Browser Only things.

hydrate(<App />, document.getElementById("root"));
