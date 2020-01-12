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
          Value: "Male",
          AnswerType: "Gender",
          NextQuestionId: 2,
        },
        {
          Text: "Female",
          Value: "Female",
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
          Value: "Small",
          AnswerType: "Build",
          NextQuestionId: 3,
        },
        {
          Text: "Medium",
          Value: "Medium",
          AnswerType: "Build",
          NextQuestionId: 3,
        },
        {
          Text: "Large",
          Value: "Large",
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
          Value: "TShirt",
          AnswerType: "Shirt",
          NextQuestionId: 4,
        },
        {
          Text: "Long sleeved",
          Value: "Shirt",
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
          Color: "Black",
          AnswerType: "Shirt",
          NextQuestionId: 5,
        },
        {
          Text: "Red",
          Color: "Red",
          AnswerType: "Shirt",
          NextQuestionId: 5,
        },
        {
          Text: "Blue",
          Color: "Blue",
          AnswerType: "Shirt",
          NextQuestionId: 5,
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
          Value: "Jacket",
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
          Color: "Black",
          AnswerType: "Jacket",
          NextQuestionId: 7,
        },
        {
          Text: "Red",
          Color: "Red",
          AnswerType: "Jacket",
          NextQuestionId: 7,
        },
        {
          Text: "Blue",
          Color: "Blue",
          AnswerType: "Jacket",
          NextQuestionId: 7,
        }
      ])
    },
    {
      QuestionId: 7,
      Question: "Was the suspect wearing pants, shorts, or a skirt?",
      TypeTag: "Bottoms",
      Options: JSON.stringify([
        {
          Text: "Pants",
          Value: "Pants",
          AnswerType: "Bottoms",
          NextQuestionId: 8,
        },
        {
          Text: "Shorts",
          Value: "Shorts",
          AnswerType: "Bottoms",
          NextQuestionId: 8,
        },
        {
          Text: "Skirt",
          Value: "Skirt",
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
          Color: "Black",
          AnswerType: "Bottoms",
          NextQuestionId: -1,
        },
        {
          Text: "Red",
          Color: "Red",
          AnswerType: "Bottoms",
          NextQuestionId: -1,
        },
        {
          Text: "Blue",
          Color: "Blue",
          AnswerType: "Bottoms",
          NextQuestionId: -1,
        }
      ])
    }
  ])
}

setupQuestions();
