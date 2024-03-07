function NumberInput({ number, onChange, min = 1, max }) {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          if (number + 1 <= max) onChange(number + 1);
        }}
      >
        +
      </button>
      <input
        type="number"
        value={number}
        onChange={(event) => {
          if (event.target.value >= min && event.target.value <= max)
            onChange(event.target.value);
        }}
        min={min}
        max={max}
      />
      <button
        type="button"
        onClick={() => {
          if (number - 1 >= min) onChange(number - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default NumberInput;
