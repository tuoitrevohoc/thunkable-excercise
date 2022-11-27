import React from "react";
import ReactDOMServer, { PipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { resetServerContext } from "react-beautiful-dnd";

import App from "./App";
import "./index.css";

export function render(url: string): Promise<PipeableStream> {
  resetServerContext();

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
