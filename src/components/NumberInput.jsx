import classes from "../styles/numberInput.module.css";

function NumberInput({ number, onChange, min = 1, max }) {
  return (
    <div className={classes.container}>
      <button
        className={classes.buttonLeft}
        type="button"
        onClick={() => {
          if (number + 1 <= max) onChange(number + 1);
        }}
      >
        +
      </button>
      <input
        className={classes.input}
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
        className={classes.buttonRight}
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
