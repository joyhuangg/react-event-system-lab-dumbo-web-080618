// Code EyesOnMe Component Here
import React, {Component} from 'react';

class EyesOnMe extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <button onFocus={this.handleFocus} onBlur={this.handleBlur} />
    )
  }

  handleFocus = (event) => {
    console.log('Good!')
  }

  handleBlur = (event) => {
    console.log('Hey! Eyes on me!')
  }
}

export default EyesOnMe
