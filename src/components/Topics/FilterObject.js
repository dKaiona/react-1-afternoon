import React, {Component} from 'react';
export default class FilterObjects extends Component {
    constructor() {
        super()
        this.state = {
            unFilteredArray: [
          {car: 'red', year: 1992},
          {bike: 'blue', year: 1888},
          {house: 'red', year:700}
        ],
            userInput: '',
            filteredArray: []
        }  
    
    }
    handleChange(val) {
        this.setState({userInput: val});
    }

    

    render(){
        return (
            <div className = 'puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'></span>
                <input className='inputLine' onChange = {(e) => this.handleChange(e.target.value)} type="text"/>
                <button className = 'confirmationButton'>Push it</button>
                <span className = 'resultsBox filterObjectRB'></span>
            </div>
        )
    }
}