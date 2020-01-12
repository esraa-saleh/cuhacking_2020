const Database = require("./Database/Database.js");
const express = require("express");
const app = express();
const port = 3000;

app.set("json spaces", 2);

app.get("/question/:questionId", async (req, res)=>{
  var question = await Database.GetQuestion(req.params.questionId);
  res.json(question);
});

app.listen(port, ()=>console.log("Hello, etc."));
