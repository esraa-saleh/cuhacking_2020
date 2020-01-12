
import Request from './Request.js';

const React = require('react');

const data = {
  content: {
    body: {
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
  }
}

function refresh(){
  
}
function optionSelected(option){
  Request.Post('/character/update', option).then(refresh);
}

function Character(props) {
  return <img src={props.body} alt="test" />;
}

function Question(props) {
  let items = [ ];
  let options = JSON.parse(props.options);

  for (let index = 0; index < options.length; index++){
    let option = options[index];
    items.push(<input type='button' key={index} value={option.Text} onClick={()=>optionSelected(option)}/>)
  }

  return (
    <div>
      <div>{props.question}</div>
      <div>{items}</div>

    </div>
    );
}

class Window extends React.Component {
  constructor(props) {
    super(props);
    this.question=data.content.body.Question;

    this.options=data.content.body.Options;
  }

  render() {
    return (
      <div>
        <div className="character">
        </div>
        <div className="textbox">
          <Question
            question={this.question}
            options={this.options}
          />
        </div>
      </div>
    )
  }
}

export default Window;
