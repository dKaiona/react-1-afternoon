import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
    constructor () {
        super();
        this.state = {
        evenArray: [],
        oddArray: [],
        userInput: ''
        } 
    } handleChange(val) {
        this.setState({userInput: val});
    }
    assignEvenAndOdds(userInput) {
       let userArry = userInput.split('')
       let evens = []
       let odds = []
       for (let i = 0; i < userArry.length; i++){
           if (userArry[i] % 2 === 0) {
            evens.push(parseInt(userArry[i], 10))
           }
           else {
               odds.push(userArry[i])
           }
       }
       this.setState({ 
           evenArray: evens,
           oddArray: odds
       })
    }
    
  render() {
    return (
        <div className ='puzzleBox evenAndOddPB'>

        <h4>Evens and Odds</h4>
        <input 
        className = 'inputLine' 
        onChange = {(e) => this.handleChange(e.target.value)} 
        type="text"/>
        <button 
        className = 'confirmationButton' 
        onClick={ () => { this.assignEvenAndOdds(this.state.userInput) }}>Push it</button>
        <span 
        className = 'resultsBox'>Evens: {JSON.stringify(this.state.evenArray)}</span>
        <span 
        className = 'resultsBox'>Odds: {JSON.stringify(this.state.oddArray)}</span>

    </div>
    )
  }
}

