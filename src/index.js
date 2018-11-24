import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {defaultText} from './defaultText.js';
import marked from 'marked';

class Editor extends React.Component{
render(){
return (
  <div id="editorDiv" class="window">
    <div class="head">
      <div class="circlesDiv">
      <div class="circle red"></div>
      <div class="circle orange"></div>
      <div class="circle green"></div>
    </div>
      <h2>Editor</h2>
    </div>
    <div class="bodyDiv" id="textareaDiv">
    <textarea class="text" defaultValue={this.props.text} onChange={this.props.onChange}/>
    </div>
  </div>
)
}
}


class Previewer extends React.Component{
render(){
return (
  <div id="previewerDiv" class="window">
    <div class="head">
            <div class="circlesDiv">
      <div class="circle red"></div>
      <div class="circle orange"></div>
      <div class="circle green"></div>
    </div>
      <h2>Previewer</h2>
    </div>
    <div class="bodyDiv" id="textDiv" >
      <div dangerouslySetInnerHTML={{__html:marked(this.props.text)}} id="previewer" class="text"></div>
    </div>
  </div>
)
}
}

class App extends React.Component{
constructor(props){
super(props);
this.state = {text: defaultText}
this.handleChange = this.handleChange.bind(this)}

handleChange(e){
this.setState({text: e.target.value});
}
render() { return(
<div id="appDiv">
<Editor text={this.state.text} onChange={this.handleChange}/>
<Previewer text={this.state.text}/>
</div>)
}
}

ReactDOM.render(<App/>,document.getElementById("root"))
