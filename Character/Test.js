let Character = require("./Character.js");
let character = new Character.Character();

character.Update(
  {
    Text: "Male",
    Value: "Male",
    AnswerType: "Gender",
    NextQuestionId: 2,
  }
);
character.Update({
  Text: "Small",
  Value: "Small",
  AnswerType: "Build",
  NextQuestionId: 3,
});
character.Update(
  {
    Text: "Short sleeved",
    Value: "TShirt",
    AnswerType: "Shirt",
    NextQuestionId: 4,
  }
);
character.Update(
{
  Text: "Blue",
  Color: "Blue",
  AnswerType: "Shirt",
  NextQuestionId: 5,
}
)

character.Update(
  {
    Text: "Yes",
    Value: "Jacket",
    AnswerType: "Jacket",
    NextQuestionId: 6,
  }
)

character.Update(
  {
    Text: "Red",
    Color: "Red",
    AnswerType: "Jacket",
    NextQuestionId: 7,
  },
)

character.Update(

  {
    Text: "Skirt",
    Value: "Skirt",
    AnswerType: "Bottoms",
    NextQuestionId: 8,
  }
)
console.log(character.Images);
