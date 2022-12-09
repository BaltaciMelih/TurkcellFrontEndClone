import "./App.css";
import { useRef, useEffect } from "react";

function App() {
  const myCustomInput = useRef();
  const itemsRef = useRef([]);
  useEffect(() => {
    if (myCustomInput.current) {
      myCustomInput.current.addEventListener("focus", () => {
        // console.log("Focus oldu");
        // console.log(myCustomInput.current);
        console.log(myCustomInput.current.className);
      });
      myCustomInput.current.addEventListener("blur", () =>
        console.log("Blur oldu")
      );
    }
  }, [myCustomInput]);
  useEffect(() => {
    console.log("Bir kere çalıştı");
  }, []);

  return (
    <div className="App">
      <input
        type="text"
        name="text"
        className="abc def gdfg"
        ref={myCustomInput}
      />
      {[10, 20, 30, 40, 50].map((item, index) => {
        return (
          <div
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            style={{ width: `${item}px`, height: "40px", background: "blue" }}
          ></div>
        );
      })}
      <button
        onClick={() => {
          console.log(itemsRef.current[4].style.width);
          console.log(itemsRef.current);
        }}
      >
        Deneme
      </button>
    </div>
  );
}

export default App;
