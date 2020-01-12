
import Request from './Request.js';

const React = require('react');

async function drawCharacter(){
  let result = await Request.Get('/character/images');
  return result.data;
}
async function refresh(qId){
  let response = await Request.Get('/question/' + qId);
  return response.data;
}
async function optionSelected(option, window){
  await Request.Post('/character/update', option);
  window.refresh(option.NextQuestionId);
}

function Character(props) {
  let images = [ ];
  for (let index = 0; index < props.images.length; index++)
    images.push(<img src={props.images[index]} alt="test" key={index} />);

  return <div>
    {images}
  </div>;
}

function Question(props) {
  let items = [ ];
  let options = JSON.parse(props.options);

  for (let index = 0; index < options.length; index++){
    let option = options[index];
    items.push(<input type='button' key={index} value={option.Text} onClick={()=>optionSelected(option, props.window)}/>)
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
    this.state = {
      question: "Loading",
      options: "[]",
      images: []
    }
  }
  componentDidMount(){
    this.refresh(1);
  }
  async refresh(qId){
    let images = await drawCharacter();
    let data = await refresh(qId);
    
    this.setState({
      question: data.Question,
      options: data.Options,
      images: images
    });
  }
  render() {
    return (
      <div>
        <div className="character">
          <Character images={this.state.images} />
        </div>
        <div className="textbox">
          <Question
            question={this.state.question}
            options={this.state.options}
            window={this}
          />
        </div>
      </div>
    )
  }
}

export default Window;
