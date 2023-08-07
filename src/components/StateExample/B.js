const styles = {
  backgroundColor: 'yellow',
  padding: 12,
};

export const B = ({ value, onReset }) => {
  return (
    <div style={styles}>
      B {value}
      <button onClick={onReset}>Reset</button>
    </div>
  );
};
