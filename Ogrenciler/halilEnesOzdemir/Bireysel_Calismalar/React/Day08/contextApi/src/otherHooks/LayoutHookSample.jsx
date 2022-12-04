import React from 'react';
import { useLayoutEffect } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

function LayoutHookSample() {
  let h1Ref = useRef();

  useEffect(() => {
    console.log('useEffect');
    h1Ref = 'h2';
    console.log('h1 Ref- useEffect', h1Ref);
  }, []);

  // useLayoutEffect önce çalışır daha sonra DOM Paint edilir.
  useLayoutEffect(() => {
    console.log('layout effect');
    console.log('h1 Ref- useLayout', h1Ref);
  }, []);

  return (
    <>
      <h1 ref={h1Ref}>Ahmet Melih Baltacı</h1>
    </>
  );
}

export default LayoutHookSample;
