import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from './Button';

const buttonTextItems = ['Bears, beets, battlestar galactica', " What's Forrest Gump's password? 1Forrest1", 'Where do programmers like to hangout? The Foo Bar'];

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = { 
      userText: '',
      snippet: ''
   };
  };
  
  updateUserText = event => {
    this.setState( { userText: event.target.value });

    if (event.target.value === this.state.snippet) {
      this.setState( {
        victory: true, 
        endTime: new Date().getTime() - this.state.startTime
      });
    };
  };

  chooseSnippet = (index) => {
    this.setState( { snippet: buttonTextItems[index], startTime: new Date().getTime()});
  };

  render () {
    return (
      <div>
        <h2>Type Race</h2>
        <p>{this.state.snippet}</p>
        <h4>{this.state.victory ? `Done!  Woot!  It took you: ${this.state.endTime/1000} seconds`: null}</h4>
        <hr/>
        <input value={this.state.userText} onChange={this.updateUserText}/>
        <hr/>
        {buttonTextItems.map( (textItem, index) => {
          return (
            <Button onClick={(e) => this.chooseSnippet(index, e)} buttonText={textItem} />
          );
        })}
      </div>
    );
  };
};

export default App;