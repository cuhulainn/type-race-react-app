// TODO: 
// - Formatting and styling

import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from './Button';
import SnippetForm from './SnippetForm';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = { 
      userText: '',
      snippet: '',
      lowestTime: 9999999999,
      snippetSubmission: '',
      buttonTextItems: ['Bears, beets, battlestar galactica', " What's Forrest Gump's password? 1Forrest1", 'Where do programmers like to hangout? The Foo Bar']
   };
  };
  
  updateUserText = event => {
    this.setState( { userText: event.target.value });

    if (event.target.value === this.state.snippet) {
      this.setState(                                          // set state, giving two args:
        {                                                     
        victory: true,                                        // the first is the new state of victory and lowest time
        endTime: new Date().getTime() - this.state.startTime
        },
        () => this.checkHighScore()                           // the second is a callback to check for lowest time,
        );                                                    // ensuring that the state is up to date when it's checked.
    };
  };

  checkHighScore = () => {
    if (this.state.endTime < this.state.lowestTime) {
      this.setState( { lowestTime: this.state.endTime });
    };
  }

  chooseSnippet = (index) => {
    this.setState( { 
      snippet: this.state.buttonTextItems[index], 
      startTime: new Date().getTime(), 
      victory: false, // added these 2 lines to clear the victory message 
      userText: ''    // and the input text when the user clicks another button to 'reset' the game
    });
    document.getElementById('gameInput').focus();  // Move the cursor to the input field once a snippet is chosen
  };

  // Controlled input functions for adding new snippets
  handleChangeNewSnippet = (event) => {
    this.setState( { snippetSubmission: event.target.value});
  };

  handleSubmitNewSnippet = (event) => {
    event.preventDefault();
    let newButtonTextItems = this.state.buttonTextItems;
    newButtonTextItems.push(this.state.snippetSubmission);
    this.setState( { buttonTextItems: newButtonTextItems });
  };

  render () {
    return (
      <div>
        <div>
          <h2>Type Race</h2>
          <p>{this.state.snippet}</p>
          <h4>{this.state.victory ? `Done!  Woot!  It took you: ${this.state.endTime/1000} seconds`: null}</h4>
          <h4>{(this.state.lowestTime < 9999999999) ? `Your best time so far is: ${this.state.lowestTime/1000} seconds:`: null}</h4>  
          <hr/>
          <input id="gameInput" value={this.state.userText} onChange={this.updateUserText}/>
          <hr/>
          {this.state.buttonTextItems.map( (textItem, index) => {
            return (
              <Button onClick={(e) => this.chooseSnippet(index, e)} buttonText={textItem} />
            );
          })}
        </div>
        <hr/>
        <div>
          <SnippetForm onChange={this.handleChangeNewSnippet} value={this.state.snippetSubmission} onClick={this.handleSubmitNewSnippet}/>
        </div>
      </div>
    );
  };
};

export default App;