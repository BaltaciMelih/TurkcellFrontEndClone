import './App.css';
import { /* useRef, useEffect, */ useState } from 'react';
import Portal from '../src/Portal';

function App() {
/*   const myCustomInput = useRef();
  const itemsRef = useRef([]);

  useEffect(() => {
    if(myCustomInput.current){
      myCustomInput.current.addEventListener("focus", () => {
        console.log(myCustomInput.current.className);
      });   
      myCustomInput.current.addEventListener("blur", () => console.log("Blur Oldu"))
    };
  }, [myCustomInput]);

  useEffect(() => {
    console.log("Bir kere calisti")
  }, []); */

  const [target, setTarget] = useState(document.getElementById("test1"));
  const [targetText, setTargetText] = useState("Test 1");

  return (
    <div className="App">
      <div id='test1'></div>
      {/* <input type="text" name='text' ref={myCustomInput} className="abc def gdfg" />
      {[10, 20, 30, 40, 50].map((item, index) => {
        return (
        <div 
        key={index} 
        ref={(el) => (itemsRef.current[index] = el)}
        style={{ width:`${item}px`, height:'40px', background: "blue"}}
        ></div>
        );
      })}
      <button onClick={() => {
        console.log(itemsRef.current[0].style.width);
      }}>Deneme</button> */}
      <hr />
      <div id='test2'></div>
      <Portal text={targetText} target={target}></Portal>
      <button onClick={() => {if (targetText === "Test 1") {
        setTarget(document.getElementById("test2"));
        setTargetText("Text 2");
        
      } else {
        setTarget(document.getElementById("text1"));
        setTargetText("Text 1");
        
      }
      }}>Target Degistir</button>
    </div>

  );
}

export default App;
