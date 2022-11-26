import React from "react";
import ReactDOMServer, { PipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import App from "./App";
import "./index.css";

export function render(url: string): Promise<PipeableStream> {
  return new Promise((accept, reject) => {
    const stream = ReactDOMServer.renderToPipeableStream(
      <StaticRouter location={url}>
        <App />
      </StaticRouter>,
      {
        onError: reject,
        onAllReady() {
          accept(stream);
        },
      }
    );
  });
}
