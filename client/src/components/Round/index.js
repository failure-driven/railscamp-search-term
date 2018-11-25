import React, {Component} from 'react'

class Round extends Component {
  constructor(props) {
    super(props);

    this.props = props;

    this.state = {
      status: ''
    };

    this.handleGuess = this.handleGuess.bind(this);
  }

  handleGuess(event) {
    console.log(event)
    if (event.target.value === 'matt') {
      this.setState({ status: 'CORRECT' });
    }

  }

  render() {
    return(
      <>
      <div className='status'>{this.state.status}</div>
      <h2>This is round 1</h2>
      <img src="http://localhost:5000/8e85e82e854.gif"/>
      <textarea onChange={this.handleGuess}>
      </textarea>
    </>
    );
  }
}

export default Round;
