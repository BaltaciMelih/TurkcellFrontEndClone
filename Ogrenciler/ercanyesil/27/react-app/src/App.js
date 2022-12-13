// import "./App.css";
// import { Link } from "react-router-dom";
// import { useRef, useEffect } from "react";
// import Portal from "./Portal";
// import ClassComponent from "./ClassComponent";

// function App() {
//   const myCustomInput = useRef();
//   const itemsRef = useRef([]);
//   useEffect(() => {
//     if (myCustomInput.current) {
//       myCustomInput.current.addEventListener("focus", () => {
//         // console.log("Focus oldu");
//         // console.log(myCustomInput.current);
//         console.log(myCustomInput.current.className);
//       });
//       myCustomInput.current.addEventListener("blur", () =>
//         console.log("Blur oldu")
//       );
//     }
//   }, [myCustomInput]);
//   useEffect(() => {
//     console.log("Bir kere çalıştı");
//   }, []);
//   const [target, setTarget] = useState(document.body);
//   const [targetText, setTargetText] = useState("Body");

//   return (
//     <div className="App">
//       <div id="test1"></div>
//       <input
//         type="text"
//         name="text"
//         className="abc def gdfg"
//         ref={myCustomInput}
//       />
//       {[10, 20, 30, 40, 50].map((item, index) => {
//         return (
//           <div
//             key={index}
//             ref={(el) => (itemsRef.current[index] = el)}
//             style={{ width: `${item}px`, height: "40px", background: "blue" }}
//           ></div>
//         );
//       })}
//       <button
//         onClick={() => {
//           console.log(itemsRef.current[4].style.width);
//           console.log(itemsRef.current);
//         }}
//       >
//         Deneme
//       </button>
//       <hr />
//       <div id="test2"></div>

//       <button
//         onClick={() => {
//           if (targetText === "Test 1") {
//             setTargetText("Text 2");
//             setTarget(document.getElementById("test2"));
//           } else {
//             setTargetText("Text 1");
//             setTarget(document.getElementById("test1"));
//           }
//         }}
//       >
//         Target Değiştir
//       </button> 
//       <Portal text={targetText} target={target} />
//        <ClassComponent text="Bu bir deneme yazısı" />
//     </div>
//   );
// }

// export default App;