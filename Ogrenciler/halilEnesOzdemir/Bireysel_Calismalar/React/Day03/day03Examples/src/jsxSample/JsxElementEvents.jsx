function JsxElementEvents() {
  let hello = () => {
    alert('Hello-1');
  };
  return (
    <>
      <button onClick={hello}>Selam-1</button>
      <button onClick={() => alert('Hello-2')}>Selam-2</button>
      {/* <button onClick={hello()}>Selam-2</button> TEHLİKELİ -> BUTONA BASMADAN RENDER EDER... */}
    </>
  );
}

export default JsxElementEvents;
