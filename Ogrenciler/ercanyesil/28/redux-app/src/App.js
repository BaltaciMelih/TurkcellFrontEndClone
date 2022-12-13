import "./App.css";
import Muz from "./components/Muz";
import { connect } from "react-redux";

const mapState = (state) => {
  return {
    muz: state.muz,
  };
};

function App(props) {
  return (
    <div className="App">
      <Muz />
      AppJS
      <button onClick={() => props.dispatch({ type: "EKLE" })}>Artır</button>
      <button onClick={() => props.dispatch({ type: "CIKAR" })}>Azalt</button>
    </div>
  );
}

export default connect(mapState, null)(App);