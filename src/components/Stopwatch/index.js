import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, initialCount: 0}

  componentWillUnmount = () => {
    clearInterval(this.intervalId)
  }

  startTimer = () => {
    this.setState(prevState => ({initialCount: prevState.initialCount + 1}))
  }

  onStart = () => {
    this.intervalId = setInterval(this.startTimer, 1000)
    this.setState({isTimerRunning: true})
  }

  onStop = () => {
    clearInterval(this.intervalId)
    this.setState({isTimerRunning: false})
  }

  onReset = () => {
    clearInterval(this.intervalId)
    this.setState({isTimerRunning: false, initialCount: 0})
  }

  getTimeFormat = () => {
    const {initialCount} = this.state

    const minutes = Math.floor(initialCount / 60)
    const seconds = Math.floor(initialCount % 60)

    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    const {isTimerRunning} = this.state
    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="stopwatch-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="stopwatch-icon"
              />
              <p className="timer-label">Timer</p>
            </div>
            <h1 className="timer-count">{this.getTimeFormat()}</h1>
            <div className="controller-container">
              <button
                type="button"
                className="button start"
                onClick={this.onStart}
                disabled={isTimerRunning}
              >
                Start
              </button>
              <button
                type="button"
                className="button stop"
                onClick={this.onStop}
              >
                Stop
              </button>
              <button
                type="button"
                className="button reset"
                onClick={this.onReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
