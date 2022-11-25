import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import bodyParser from "body-parser";
import { PassThrough } from "stream";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function createServer(
  root = process.cwd(),
  isProd = process.env.NODE_ENV === "production",
  hmrPort
) {
  const resolve = (p) => path.resolve(__dirname, p);

  const indexProd = isProd
    ? fs.readFileSync(resolve("dist/client/index.html"), "utf-8")
    : "";

  const app = express();

  /**
   * @type {import('vite').ViteDevServer}
   */
  let vite;
  if (!isProd) {
    vite = await (
      await import("vite")
    ).createServer({
      root,
      server: {
        middlewareMode: true,
        watch: {
          usePolling: true,
          interval: 100,
        },
        hmr: {
          port: hmrPort,
        },
      },
      appType: "custom",
    });
    // use vite's connect instance as middleware
    app.use(vite.middlewares);
  } else {
    app.use((await import("compression")).default());
    app.use(
      (await import("serve-static")).default(resolve("dist/client"), {
        index: false,
      })
    );
  }

  if (!isProd) {
    const { resolvers } = await vite.ssrLoadModule(
      resolve("src/backend/resolvers.ts")
    );
    const server = new ApolloServer({
      typeDefs: fs.readFileSync(resolve("data/schema.graphql"), "utf8"),
      resolvers,
    });

    await server.start();
    app.use("/graphql", bodyParser.json(), expressMiddleware(server));
  }

  app.use("*", async (req, res) => {
    try {
      const url = req.originalUrl;

      let template, render;
      if (!isProd) {
        // always read fresh template in dev
        template = fs.readFileSync(resolve("index.html"), "utf-8");
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule("/src/entry-server.tsx")).render;
      } else {
        template = indexProd;
        // @ts-ignore
        render = (await import("./dist/server/entry-server.js")).render;
      }

      const html = template.split(`<!--app-html-->`);
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.write(html[0]);
      const stream = await render(url);
      const passThrough = new PassThrough();
      stream.pipe(passThrough);
      passThrough.on("end", function () {
        res.write(html[1]);
        res.end();
      });
      passThrough.pipe(res, { end: false });
    } catch (e) {
      !isProd && vite.ssrFixStacktrace(e);
      console.log(e.stack);
      res.status(500).end(e.stack);
    }
  });

  return { app, vite };
}

createServer().then(({ app }) =>
  app.listen(5173, () => {
    console.log("http://localhost:5173");
  })
);
