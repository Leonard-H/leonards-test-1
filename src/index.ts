import express from "express";

const app = express();

app.get("/", (_req, res) => {
  res.send("hi there");
});

app.listen("https://leonards-test-1.herokuapp.com/");
