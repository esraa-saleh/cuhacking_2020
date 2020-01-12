const Database = require("./Database/Database.js");
const Character = require("./Character/Character.js");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

const character = new Character.Character();

app.set("json spaces", 2);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/question/:questionId", async (req, res)=>{
  var question = await Database.GetQuestion(req.params.questionId);
  res.json(question);
});

app.post('/character/update', async (req, res) => {
  character.Update(req.body);
  res.sendStatus(200);
});
app.get('/character/images', (req, res) => {
  res.json(character.Images);
})

app.listen(port, ()=>console.log("Hello, etc."));
