function NumberInput({ number, onChange, min = 1, max }) {
  return (
    <div>
      <button type="button" onClick={() => onChange(number + 1)}>
        +
      </button>
      <input
        type="number"
        value={number}
        onChange={(event) => onChange(event.target.value)}
        min={min}
        max={max}
      />
      <button type="button" onClick={() => onChange(number - 1)}>
        -
      </button>
    </div>
  );
}

export default NumberInput;
