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
      timer: 10,
    };

    this.handleGuess = this.handleGuess.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.tick = this.tick.bind(this);

    this.startTimer();
  }

  static getDerivedStateFromProps(props, state) {
    const currentRound = parseInt(props.match.params.round)
    if(currentRound !== state.round){
      return {
        round: currentRound,
        status: '',
        guess: '',
        timer: 10,
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

  startTimer() {
    const { interval } = this.state;
    if (interval) {
      return
    } else {
      const interval = setInterval(this.tick, 1000);
      this.setState({ interval });
    }
  }

  tick() {
    const { timer, interval } = this.state;
    if (timer <= 0) {
      clearInterval(interval);
      this.setState({ interval: null });
    } else {
      this.setState({ timer: timer - 1 });
    }
  }

  render() {
    return(
      <>
      <div className='status'>{this.state.status}</div>
      <h2>This is round {this.state.round}</h2>
        <p>Guess who the werewolf is in this GIF
          <br />
          (besides Michael and Selena)</p>
      <div>{this.state.timer > 0 ? ('' + this.state.timer + ' sec left') : 'boom'}</div>
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
