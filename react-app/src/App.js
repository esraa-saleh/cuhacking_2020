
import Request from './Request.js';
import './App.css'

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

function EndImage(){
  return <div style={{position: 'relative', top: '50px', left: '1000px'}}>
    <img style={{position: 'absolute'}} src="/images/endImage.png" alt="hello" />
  </div>
}

function Character(props) {
  let images = [ ];
  for (let index = 0; index < props.images.length; index++)
    images.push(<img className="img-class" style={{zIndex: index, position: 'absolute'}} src={props.images[index]} alt="" key={index} />);

  return <div style={{position: 'relative', top: '310px', left: '-350px'}}>
    {images}
  </div>;
}

function Question(props) {
  let items = [ ];
  let options = JSON.parse(props.options);

  for (let index = 0; index < options.length; index++){
    let option = options[index];
    items.push(<input className='question-option' type='button' key={index} value={option.Text} onClick={()=>optionSelected(option, props.window)}
                      style={{zIndex: 99}} />)
  }

  return (
    <div style={{textAlign: 'center'}}>
      <img src="/images/logo/logo-cropped.png" alt="" />
      <div style={{fontSize: "30px", marginTop: "10px"}}>Describe the suspect.</div>
      <h1>{props.question}</h1>
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
      images: [],
      isCompleted: false
    }
  }
  componentDidMount(){
    this.refresh(1);
  }
  async refresh(qId){
    let images = await drawCharacter();
    let data = await refresh(qId);
    let isCompleted = false;
    if (!data){
      // When we get to the end, disable the question & options
      data = {
        Question: "",
        Options: "[]"
      };

      isCompleted = true;
    }

    this.setState({
      question: data.Question,
      options: data.Options,
      images: images,
      complete: isCompleted
    });
  }
  render() {
    let endImage = this.state.complete ? <EndImage /> : <div />;
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
        {endImage}
      </div>
    )
  }
}

export default Window;
