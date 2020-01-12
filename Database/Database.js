const Promise = require("promise");
const mongoose = require("mongoose");

const uri = "mongodb+srv://newuser:newuser@cluster0-xi7tx.gcp.mongodb.net/Test?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const questionsModel = mongoose.model('Questions_Test', new mongoose.Schema({
  QuestionId: 'Number',
  Question: 'string',
  TypeTag: 'string',
  Options: 'string'
}));

async function findQuestion(questionNumber){
  let result = await questionsModel.findOne({QuestionId: questionNumber});
  return result;
}

async function insertQuestions(questionData){
  const inserted = await questionsModel.insertMany(questionData);
  console.log(JSON.stringify(inserted,'','\t'));
}


module.exports.InsertQuestions = insertQuestions;
module.exports.GetQuestion = findQuestion;
