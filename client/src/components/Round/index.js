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

  componentWillReceiveProps(props) {
    const round = parseInt(props.match.params.round, 10);
    this.setState({ round, guess: '' });
  }

  handleGuess(event) {
    this.setState({ guess: event.target.value });
    if (event.target.value.match(/^matt$/im)) {
      this.setState({ status: 'CORRECT' });
    } else {
      this.setState({ status: '' });
    }
  }

  render() {
    return(
      <>
      <div className='status'>{this.state.status}</div>
      <h2>This is round {this.state.round}</h2>
      <img src="http://localhost:5000/8e85e82e854.gif"/>
      <textarea autofocus="true" onChange={this.handleGuess} value={this.state.guess}>
      </textarea>
      { (this.state.status === 'CORRECT') ?
        <Link to={`/rounds/${this.state.round + 1}`} data-test-next>NEXT</Link> : ''}
    </>
    );
  }
}

export default Round;
