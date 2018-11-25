import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Round extends Component {
  constructor(props) {
    super(props);

    const round = parseInt(props.match.params.round, 10);
    this.props = props;

    this.state = {
      status: '',
      round,
      guess: '',
    };

    this.handleGuess = this.handleGuess.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const currentRound = parseInt(props.match.params.round)
    if(currentRound !== state.round){
      return {
        round: currentRound,
        status: '',
        guess: ''
      }
    }
    return state
  }

  componentDidUpdate() {
    if(this.state.guess === "") this.textarea.focus()
  }

  handleGuess(event) {
    const guess = event.target.value
    if (event.target.value.match(/^matt$/im)) {
      this.setState({ status: 'CORRECT', guess });
    } else {
      this.setState({ status: '', guess });
    }
  }

  render() {
    return(
      <>
      <div className='status'>{this.state.status}</div>
      <h2>This is round {this.state.round}</h2>
      <img src="http://localhost:5000/8e85e82e854.gif"/>
      <textarea ref={el => this.textarea = el} onChange={this.handleGuess} value={this.state.guess} disabled={this.state.status === 'CORRECT'} autoFocus={true}>
      </textarea>
      { (this.state.status === 'CORRECT') ?
        <Link to={`/rounds/${this.state.round + 1}`} data-test-next>NEXT</Link> : ''}
    </>
    );
  }
}

export default Round;
