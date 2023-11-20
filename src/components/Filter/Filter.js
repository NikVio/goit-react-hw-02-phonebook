export const Filter = ({ filter, onUpdateFilter }) => {
  return (
    <div>
      <label>Find contacts by name</label>
      <input
        type="text"
        value={filter}
        onChange={evt => onUpdateFilter(evt.target.value)}
      />
    </div>
  );
};
