import React from 'react';
import { useId } from 'react';

function IdHooksSample() {
  let id = useId();

  console.log(id);
  return (
    <>
      <div>IdHooksSample</div>
      <div>
        <span id={id + '-firstName'}></span>
      </div>
      <div>
        <span id={id + '-lastName'}></span>
      </div>
    </>
  );
}

export default IdHooksSample;
