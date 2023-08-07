import { Component } from 'react';
import { A } from './A';

const styles = {
  backgroundColor: 'orangered',
  padding: 12,
};

export class StateExample extends Component {
  state = {
    numberOfClicks: 0,
  };

  handleClick = () => {
    this.setState(prevState => {
      return {
        numberOfClicks: prevState.numberOfClicks + 1,
      };
    });
  };

  handleReset = () => {
    this.setState({
      numberOfClicks: 0,
    });
  };

  render() {
    return (
      <div style={styles}>
        StateExample
        <button onClick={this.handleClick}>{this.state.numberOfClicks}</button>
        <button onClick={this.handleReset}>Reset</button>
        <A
          clicks={this.state.numberOfClicks}
          onIncrement={this.handleClick}
          onReset={this.handleReset}
        />
      </div>
    );
  }
}

// export const StateExample = () => {
//   return (
//     <div style={styles}>
//       StateExample
//       <button>1</button>
//     </div>
//   );
// };
