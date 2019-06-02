// Server Module: express
import express from "express";
import React from "react";

// fs: Node Specific module, Reading file: index.html, to fit in rendered App inside it.
import fs from "fs";

// ReactDOM's server side rendering module.
import { renderToString } from "react-dom/server";
// @reach/router's server side URL catcher.
import { ServerLocation } from "@reach/router";
// Module to be rendered.
import App from "../src/App";

/**
 * Reading index.html from dist, as parcel has already compiled and sent it to dist/
 * before we run this file.
 */
const html = fs.readFileSync("dist/index.html").toString();

// Splitting based on the not rendered part. ...<div id="root">not rendered</div>....
const parts = html.split("not rendered");

/**
 * Starting the server.
 * We also need to serve the JS, CSS file which has been compiled by Parcel into dist/
 */
const app = express();
app.use("/dist", express.static("dist"));

app.use((req, res) => {
  console.log("Coming here", req.url);
  /**
   * Generating the markup for App but also including the ServerLocation to catch the url details.
   * TO be passed to the component as props.
   */
  const reactMarkup = (
    <ServerLocation url={req.url}>
      <App />
    </ServerLocation>
  );
  // Inserting the rendered part into the html.
  res.send(parts[0] + renderToString(reactMarkup) + parts[1]);
  res.end();
});

// Starting the express server on a PORT.
const PORT = process.env.PORT || 3000;
console.log("Listning on PROT: ", PORT);
app.listen(PORT);
