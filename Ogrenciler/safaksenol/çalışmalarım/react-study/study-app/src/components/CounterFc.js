import React, { useEffect, useState } from 'react';

function CounterFc() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        //component update
        //butona basılığında titleda countumuz değiştiğini gözlemleyeceğiz

        document.title = `Button ${count} times clicked`;
    });

  return (
      <div>
          <p>useEffect kullanımıda var title'a bak </p>
          <p>Function Companentler useState Hooku Kullanımı Örnek</p>
          <p>Button {count} times clicked</p>
          <button onClick={()=>setCount(count+1)}>Click</button>
    </div>
  )
};

export default CounterFc;
