/**
 * cPanel "Setup Node.js App" startup file.
 * Application root = project folder; startup file = server.js
 */
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const port = Number(process.env.PORT) || 3000;
const hostname = process.env.HOSTNAME || "0.0.0.0";

const app = next({ dev: false, hostname, port });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    }).listen(port, hostname, () => {
      console.log(`[niscraft] ready on http://${hostname}:${port}`);
    });
  })
  .catch((err) => {
    console.error("[niscraft] failed to start", err);
    process.exit(1);
  });
