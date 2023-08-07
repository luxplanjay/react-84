import { B } from './B';

const styles = {
  backgroundColor: 'green',
  padding: 12,
};

export const A = ({ clicks, onIncrement, onReset }) => {
  return (
    <div style={styles}>
      <p>Clicks: {clicks}</p>
      <button onClick={onIncrement}>Increment</button>
      <B value={clicks} onReset={onReset} />
    </div>
  );
};

// export const A = () => {
//   return (
//     <div style={styles}>
//       <button onClick={this.handleClick}>{this.state.numberOfClicks}</button>
//       <button onClick={this.handleReset}>Reset</button>
//     </div>
//   );
// };
