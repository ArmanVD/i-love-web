import express from "express";
import { Liquid } from "liquidjs";
import { readdir, readFile } from "node:fs/promises";

const files = await readdir("content");

const app = express();

app.use(express.static("public"));

const engine = new Liquid();

app.engine("liquid", engine.express());

app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));

app.get("/", async function (request, response) {
  response.render("home.liquid");
});

app.get("/wiki", async function (request, response) {
  response.render("wiki.liquid", { files: files });
});

app.get("/wiki/:slug", async function (req, res) {
  const fileContents = await readFile("content/" + req.params.slug + ".md", { encoding: "utf8" });
  res.render("article.liquid", { fileContents: fileContents });
});

app.set("port", process.env.PORT || 8000);

app.listen(app.get("port"), function () {
  console.log(`Application started on http://localhost:${app.get("port")}`);
});
