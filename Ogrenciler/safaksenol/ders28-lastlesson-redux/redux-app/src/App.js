import "./App.css";
import Muz from "./components/Muz.jsx"
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
      AppJS in içinde çağırdığımız arttır-azalt butonu
      <hr/>
      <button onClick={() => props.dispatch({ type: "EKLEME" })}>ARTTIR</button>
      <button onClick={() => props.dispatch({ type: "CIKARMA" })}>AZALT</button>
    </div>
  );
}

export default connect(mapState, null)(App);
