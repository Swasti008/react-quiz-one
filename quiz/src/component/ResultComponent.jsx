import React, { Component } from 'react'

export default class ResultComponent extends Component {
  render() {
    return (
      <div className='ResultComponent'>
        <h1>Result</h1>
        <div className='result'>
            <h2>You need more practice!</h2>
            <h3>Your score is 20%</h3>
            <div className='info'><p>Total number of questions </p><p>15</p></div>
            <div className='info'><p>Number of attempted question</p><p>9</p></div>
            <div className='info'><p>Number of correct answers</p><p>3</p></div>
            <div className='info'><p>Number of wrong answers</p><p>6</p></div>
        </div>
        <div className='buttons'>
        <button className='play'>Play Again</button>
        <button className='back'>Back to home</button>
        </div>
      </div>
    )
  }
}
