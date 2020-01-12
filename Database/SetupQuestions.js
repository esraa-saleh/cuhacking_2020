const Database = require("./Database.js");

function setupQuestions(){
  Database.InsertQuestions([
    {
      QuestionId: 1,
      Question: "Was the suspect a male or a female?",
      TypeTag: "Gender",
      Options: JSON.stringify([
        {
          Text: "Male",
          Value: "male",
          AnswerType: "Gender",
          NextQuestionId: 2,
        },
        {
          Text: "Female",
          Value: "female",
          AnswerType: "Gender",
          NextQuestionId: 2,
        }
      ])
    },
    {
      QuestionId: 2,
      Question: "What was the suspect's build?",
      TypeTag: "Build",
      Options: JSON.stringify([
        {
          Text: "Small",
          Value: "small",
          AnswerType: "Build",
          NextQuestionId: 3,
        },
        {
          Text: "Medium",
          Value: "medium",
          AnswerType: "Build",
          NextQuestionId: 3,
        },
        {
          Text: "Large",
          Value: "large",
          AnswerType: "Build",
          NextQuestionId: 3,
        }
      ])
    },
    {
      QuestionId: 3,
      Question: "Was the suspect in a long-sleeved or short-sleeved shirt?",
      TypeTag: "Shirt",
      Options: JSON.stringify([
        {
          Text: "Short sleeved",
          Value: "tshirt",
          AnswerType: "Shirt",
          NextQuestionId: 4,
        },
        {
          Text: "Long sleeved",
          Value: "longtshirt",
          AnswerType: "Shirt",
          NextQuestionId: 4,
        }
      ])
    },
    {
      QuestionId: 4,
      Question: "What color was the suspect's shirt?",
      TypeTag: "Shirt",
      Options: JSON.stringify([
        {
          Text: "Black",
          Color: "black",
          AnswerType: "Shirt",
          NextQuestionId: 7,
        },
        {
          Text: "Red",
          Color: "red",
          AnswerType: "Shirt",
          NextQuestionId: 7,
        },
        {
          Text: "Blue",
          Color: "blue",
          AnswerType: "Shirt",
          NextQuestionId: 7,
        }
      ])
    },
    {
      QuestionId: 5,
      Question: "Was the suspect wearing a jacket?",
      TypeTag: "Jacket",
      Options: JSON.stringify([
        {
          Text: "Yes",
          Value: "jacket",
          AnswerType: "Jacket",
          NextQuestionId: 6,
        },
        {
          Text: "No",
          NextQuestionId: 7,
        }
      ])
    },
    {
      QuestionId: 6,
      Question: "What color was the suspect's jacket?",
      TypeTag: "Jacket",
      Options: JSON.stringify([
        {
          Text: "Black",
          Color: "black",
          AnswerType: "Jacket",
          NextQuestionId: 7,
        },
        {
          Text: "Red",
          Color: "red",
          AnswerType: "Jacket",
          NextQuestionId: 7,
        },
        {
          Text: "Blue",
          Color: "blue",
          AnswerType: "Jacket",
          NextQuestionId: 7,
        }
      ])
    },
    {
      QuestionId: 7,
      Question: "Was the suspect wearing pants or shorts?",
      TypeTag: "Bottoms",
      Options: JSON.stringify([
        {
          Text: "Pants",
          Value: "longpants",
          AnswerType: "Bottoms",
          NextQuestionId: 8,
        },
        {
          Text: "Shorts",
          Value: "shorts",
          AnswerType: "Bottoms",
          NextQuestionId: 8,
        }
      ])
    },
    {
      QuestionId: 8,
      Question: "What color was the suspect's bottoms?",
      TypeTag: "Bottoms",
      Options: JSON.stringify([
        {
          Text: "Black",
          Color: "black",
          AnswerType: "Bottoms",
          NextQuestionId: -1,
        },
        {
          Text: "Blue",
          Color: "blue",
          AnswerType: "Bottoms",
          NextQuestionId: -1,
        }
      ])
    }
  ])
}

setupQuestions();
