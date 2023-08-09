export const TopicFilter = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={evt => onChange(evt.target.value)}
    />
  );
};
