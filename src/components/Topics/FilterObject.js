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

    filter(userInput) {
        let newArray = unFilteredArray.filter((currentO) => {
             currentO === userInput
        })
        this.setState({filteredArray: newArray})
    }
    

    

    render(){
        return (
            <div className = 'puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'> Original: {JSON.stringify(this.state.unFilteredArray, null, 10)} </span>
                <input className='inputLine' 
                onChange = {(e) => this.handleChange(e.target.value)} type="text"/>
                <button className = 'confirmationButton'
                onClick = { () => {this.filter(this.state.userInput)} }>Push it</button>
                <span className = 'resultsBox filterObjectRB'> Filtered : {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}