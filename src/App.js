import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minuteDisplayValue: "25",
      secondsDisplayValue: "00",
      breakLengthValue: 5,
      sessionLengthValue: 25,
      timerLabel: "Session",
      playPauseIcon: "\u23F5",
      playPauseState: false,
      secondsCounter: 0,
      minutesCounter: 25,
      intervalCounter: 0,
    };
    this.incrementSession = this.incrementSession.bind(this);
    this.decrementSession = this.decrementSession.bind(this);
    this.incrementBreak = this.incrementBreak.bind(this);
    this.decrementBreak = this.decrementBreak.bind(this);
    this.togglePlayPauseIcon = this.togglePlayPauseIcon.bind(this);
    this.togglePlayPauseState = this.togglePlayPauseState.bind(this);
    this.reset = this.reset.bind(this);
    this.playPauseFunctions = this.playPauseFunctions.bind(this);
    this.displayCoundown = this.displayCoundown.bind(this);
    this.initCoundown = this.initCoundown.bind(this);
    this.stopCoundown = this.stopCoundown.bind(this);
    this.playAudio = this.playAudio.bind(this);
    this.stopAudio = this.stopAudio.bind(this);
  }
  incrementSession() {
    if (this.state.sessionLengthValue < 60 && !this.state.playPauseState) {
      this.setState((state) => ({
        sessionLengthValue: state.sessionLengthValue + 1,
      }));
      if (
        this.state.sessionLengthValue < 9 &&
        this.state.timerLabel === "Session"
      ) {
        this.setState((state) => ({
          minuteDisplayValue: "0" + state.sessionLengthValue.toString(10),
          secondsDisplayValue: "00",
          minutesCounter: state.sessionLengthValue,
          secondsCounter: 0,
        }));
      }
      if (
        this.state.sessionLengthValue > 8 &&
        this.state.timerLabel === "Session"
      ) {
        this.setState((state) => ({
          minuteDisplayValue: state.sessionLengthValue.toString(10),
          secondsDisplayValue: "00",
          minutesCounter: state.sessionLengthValue,
          secondsCounter: 0,
        }));
      }
    }
  }
  decrementSession() {
    if (this.state.sessionLengthValue > 1 && !this.state.playPauseState) {
      this.setState((state) => ({
        sessionLengthValue: state.sessionLengthValue - 1,
      }));
      if (
        this.state.sessionLengthValue < 11 &&
        this.state.timerLabel === "Session"
      ) {
        this.setState((state) => ({
          minuteDisplayValue: "0" + state.sessionLengthValue.toString(10),
          secondsDisplayValue: "00",
          minutesCounter: state.sessionLengthValue,
          secondsCounter: 0,
        }));
      }
      if (
        this.state.sessionLengthValue > 10 &&
        this.state.timerLabel === "Session"
      ) {
        this.setState((state) => ({
          minuteDisplayValue: state.sessionLengthValue.toString(10),
          secondsDisplayValue: "00",
          minutesCounter: state.sessionLengthValue,
          secondsCounter: 0,
        }));
      }
    }
  }
  incrementBreak() {
    if (this.state.breakLengthValue < 60 && !this.state.playPauseState) {
      this.setState((state) => ({
        breakLengthValue: state.breakLengthValue + 1,
      }));
      if (
        this.state.breakLengthValue < 9 &&
        this.state.timerLabel === "Break"
      ) {
        this.setState((state) => ({
          minuteDisplayValue: "0" + state.breakLengthValue.toString(10),
          secondsDisplayValue: "00",
          minutesCounter: state.breakLengthValue,
          secondsCounter: 0,
        }));
      }
      if (
        this.state.breakLengthValue > 8 &&
        this.state.timerLabel === "Break"
      ) {
        this.setState((state) => ({
          minuteDisplayValue: state.breakLengthValue.toString(10),
          secondsDisplayValue: "00",
          minutesCounter: state.breakLengthValue,
          secondsCounter: 0,
        }));
      }
    }
  }
  decrementBreak() {
    if (this.state.breakLengthValue > 1 && !this.state.playPauseState) {
      this.setState((state) => ({
        breakLengthValue: state.breakLengthValue - 1,
      }));
      if (
        this.state.breakLengthValue < 11 &&
        this.state.timerLabel === "Break"
      ) {
        this.setState((state) => ({
          minuteDisplayValue: "0" + state.breakLengthValue.toString(10),
          secondsDisplayValue: "00",
          minutesCounter: state.breakLengthValue,
          secondsCounter: 0,
        }));
      }
      if (
        this.state.breakLengthValue > 10 &&
        this.state.timerLabel === "Break"
      ) {
        this.setState((state) => ({
          minuteDisplayValue: state.breakLengthValue.toString(10),
          secondsDisplayValue: "00",
          minutesCounter: state.breakLengthValue,
          secondsCounter: 0,
        }));
      }
    }
  }
  togglePlayPauseIcon() {
    if (this.state.playPauseIcon === "\u23F5") {
      this.setState(() => ({
        playPauseIcon: "\u23F8",
      }));
    }
    if (this.state.playPauseIcon === "\u23F8") {
      this.setState(() => ({
        playPauseIcon: "\u23F5",
      }));
    }
  }
  togglePlayPauseState() {
    this.setState((state) => ({
      playPauseState: !state.playPauseState,
    }));
  }
  reset() {
    this.stopCoundown();
    this.stopAudio();
    this.setState(() => ({
      minuteDisplayValue: "25",
      secondsDisplayValue: "00",
      breakLengthValue: 5,
      sessionLengthValue: 25,
      timerLabel: "Session",
      playPauseIcon: "\u23F5",
      playPauseState: false,
      secondsCounter: 0,
      minutesCounter: 25,
    }));
  }
  playPauseFunctions() {
    this.togglePlayPauseIcon();
    this.togglePlayPauseState();
    if (!this.state.playPauseState) {
      this.initCoundown();
    } else {
      this.stopCoundown();
    }
  }
  displayCoundown() {
    if (this.state.secondsCounter < 10) {
      this.setState(() => ({
        secondsDisplayValue: "0" + this.state.secondsCounter.toString(10),
      }));
    } else {
      this.setState(() => ({
        secondsDisplayValue: this.state.secondsCounter.toString(10),
      }));
    }
    if (this.state.minutesCounter < 10) {
      this.setState(() => ({
        minuteDisplayValue: "0" + this.state.minutesCounter.toString(10),
      }));
    } else {
      this.setState(() => ({
        minuteDisplayValue: this.state.minutesCounter.toString(10),
      }));
    }
  }
  initCoundown() {
    this.oneSecondInterval = setInterval(() => {
      if (this.state.intervalCounter === 0) {
        this.displayCoundown();
      }
      if (this.state.intervalCounter === 9) {
        this.setState(() => ({
          secondsCounter: this.state.secondsCounter - 1,
        }));
        if (this.state.secondsCounter === -1) {
          this.setState(() => ({
            secondsCounter: 59,
            minutesCounter: this.state.minutesCounter - 1,
          }));
        }
        if (this.state.minutesCounter === 0 && this.state.secondsCounter === 0)
          this.playAudio();
        if (
          this.state.minutesCounter === -1 &&
          this.state.timerLabel === "Session"
        ) {
          this.setState(() => ({
            secondsCounter: 0,
            minutesCounter: this.state.breakLengthValue,
            timerLabel: "Break",
          }));
        }
        if (
          this.state.minutesCounter === -1 &&
          this.state.timerLabel === "Break"
        ) {
          this.setState(() => ({
            secondsCounter: 0,
            minutesCounter: this.state.sessionLengthValue,
            timerLabel: "Session",
          }));
        }
      }
      if (this.state.intervalCounter < 10) {
        this.setState(() => ({
          intervalCounter: this.state.intervalCounter + 1,
        }));
      }
      if (this.state.intervalCounter === 10) {
        this.setState(() => ({
          intervalCounter: 0,
        }));
      }
    }, 100);
  }
  stopCoundown() {
    clearInterval(this.oneSecondInterval);
  }
  playAudio() {
    const sound = document.getElementById("beep");
    if (sound !== null) {
      sound.currentTime = 0;
      sound.volume = 0.5;
      sound.play();
    }
  }
  stopAudio() {
    const sound = document.getElementById("beep");
    if (sound !== null) {
      sound.pause();
      sound.currentTime = 0;
    }
  }

  render() {
    return (
      <Clock
        minuteDisplayValue={this.state.minuteDisplayValue}
        secondsDisplayValue={this.state.secondsDisplayValue}
        breakLengthValue={this.state.breakLengthValue}
        sessionLengthValue={this.state.sessionLengthValue}
        timerLabel={this.state.timerLabel}
        playPauseIcon={this.state.playPauseIcon}
        incrementSession={this.incrementSession}
        decrementSession={this.decrementSession}
        incrementBreak={this.incrementBreak}
        decrementBreak={this.decrementBreak}
        playPauseFunctions={this.playPauseFunctions}
        resetFuntion={this.reset}
      />
    );
  }
}

const Clock = function (props) {
  return (
    <div
      className="d-flex justify-content-center align-items-center h-100"
      style={{ backgroundColor: "gray" }}
    >
      <div
        style={{ padding: "40px", backgroundColor: "lightgray" }}
        className="border border-5 border-warning"
      >
        <div className="d-flex flex-column justify-content-between align-items-center">
          <h3>25 + 5 Clock</h3>
          <br />
          <CounterLength
            labelId="break-label"
            decrementId="break-decrement"
            incrementId="break-increment"
            counterId="break-length"
            counter={props.breakLengthValue}
            increment={props.incrementBreak}
            decrement={props.decrementBreak}
            label="Break"
          />
          <CounterLength
            labelId="session-label"
            decrementId="session-decrement"
            incrementId="session-increment"
            counterId="session-length"
            counter={props.sessionLengthValue}
            increment={props.incrementSession}
            decrement={props.decrementSession}
            label="Session"
          />
          <br />
          <div
            className="d-flex flex-column justify-content-center align-items-center border border-5 border-success rounded"
            style={{
              height: "100px",
              width: "230px",
            }}
          >
            <h4 id="timer-label">{props.timerLabel}</h4>
            <h3
              id="time-left"
              style={{
                height: "45px",
                width: "150px",
                backgroundColor: "gray",
                textAlign: "center",
                lineHeight: "45px",
                color: "lightgreen",
              }}
            >
              {props.minuteDisplayValue}:{props.secondsDisplayValue}
            </h3>
            <audio
              id="beep"
              preload="auto"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
            />
          </div>
          <div>
            <br />
            <KeyPad
              id="start_stop"
              value={props.playPauseIcon}
              utility={props.playPauseFunctions}
            />
            <KeyPad id="reset" value={"\u21BB"} utility={props.resetFuntion} />
          </div>
        </div>
      </div>
    </div>
  );
};

const CounterLength = function (props) {
  return (
    <div>
      <label id={props.labelId}>{props.label} Length: </label>
      <span>{"\u00A0"}</span>
      <KeyPad
        id={props.decrementId}
        value={"\u002D"}
        utility={props.decrement}
      />
      <span id={props.counterId}>{props.counter}</span>
      <KeyPad
        id={props.incrementId}
        value={"\u002B"}
        utility={props.increment}
      />
    </div>
  );
};

const KeyPad = function (props) {
  return (
    <button
      type="button"
      className="btn btn-secondary"
      style={{
        width: "20px",
        height: "20px",
        marginLeft: "5px",
        marginRight: "5px",
        padding: " 3px 0px",
        borderRadius: "15px",
        textAlign: "center",
        fontSize: "12px",
        lineHeight: "1.1",
      }}
      id={props.id}
      onClick={props.utility}
    >
      {props.value}
    </button>
  );
};

export default App;
