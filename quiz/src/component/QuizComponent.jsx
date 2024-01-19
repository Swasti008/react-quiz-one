import React, { Component } from "react";

export default class QuizComponent extends Component {
  render() {
    return (
      <div className="QuizComponent">
        <h1>Question</h1>
        <p>1 of 15</p>
        <h3>Which is the only mammal that can jump?</h3>
        <div className="options">
          <option className="choose" value="option1">Dog</option>
          <option className="choose" value="option2">Elephant</option>
          <option className="choose" value="option3">Goat</option>
          <option className="choose" value="option3">Lion</option>
        </div>
        <div className="buttons">
            <button className="button1">Previous</button>
            <button className="button2">Next</button>
            <button className="button3">Quit</button>
        </div>
      </div>
    );
  }
}
