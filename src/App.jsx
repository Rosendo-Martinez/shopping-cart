import PropTypes from "prop-types";

function App({ msg }) {
  return <h1>{msg}</h1>;
}

App.propTypes = {
  msg: PropTypes.string,
};

export default App;
