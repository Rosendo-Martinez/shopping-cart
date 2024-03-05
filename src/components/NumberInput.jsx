function NumberInput({ number, onChange }) {
  return (
    <div>
      <button type="button" onClick={() => onChange(number + 1)}>
        +
      </button>
      <input
        type="number"
        value={number}
        onChange={(event) => onChange(event.target.value)}
      />
      <button type="button" onClick={() => onChange(number - 1)}>
        -
      </button>
    </div>
  );
}

export default NumberInput;
