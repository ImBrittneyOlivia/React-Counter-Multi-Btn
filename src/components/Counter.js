import React from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

class Counter extends React.Component {
  // function's
  increment = () => {
    this.props.dispatch({
      type: "INCREMENT"
    });
  };

  incrementByFive = () => {
    this.props.dispatch({
      type: "INCREMENTBYFIVE"
    });
  };

  decrement = () => {
    this.props.dispatch({
      type: "DECREMENT"
    });
  };

  decrementByyTen = () => {
    this.props.dispatch({
      type: "DECREMENTBYTEN"
    });
  };

  reset = () => {
    this.props.dispatch({
      type: "RESET"
    });
  };

  render() {
    return (
      <div className="overall-container">
        <div className="react-logo">
          <img
            src="https://media3.giphy.com/media/iFmw13LV1hHhViPPWz/source.gif"
            alt="gif"
          />
        </div>

        <div className="main-container">
          <section className="description">
            <h1>Counter</h1>
            <p>
              This application was created using React with Redux.
              <br />
              Please have fun increasing, decreasing and resetting the counter.
            </p>
            <br />
            <button onClick={this.increment.bind(this)}>Increase By 1</button>
            <button onClick={this.incrementByFive.bind(this)}>
              Increase By 5
            </button>
            <button onClick={this.decrement.bind(this)}>Decrease By 1</button>
            <button onClick={this.decrementByyTen.bind(this)}>
              Decrease By 10
            </button>
            <br />
            <button onClick={this.reset}>Reset</button>
          </section>

          <div className="num-container">
            <h2>{this.props.count}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Counter);

// React no redux

// class Counter extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0
//     };
//   }

//   // function's
//   increment = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   incrementByFive = () => {
//     this.setState({ count: this.state.count + 5 });
//   };

//   decrement = () => {
//     this.setState({ count: this.state.count - 1 });
//   };

//   decrementByyTen = () => {
//     this.setState({ count: this.state.count - 10 });
//   };

//   render() {
//     return (
//       <div>
//         <h1>Counter</h1>
//         <div>
//           <h2>{this.state.count}</h2>
//           <button onClick={this.increment.bind(this)}>Increase By 1</button>
//           <button onClick={this.incrementByFive.bind(this)}>
//             Increase By 5
//           </button>
//           <button onClick={this.decrement.bind(this)}>Decrease By 1</button>
//           <button onClick={this.decrementByyTen.bind(this)}>
//             Decrease By 10
//           </button>

//           <button>Reset</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Counter;
