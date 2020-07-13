import React, { useState, useEffect } from 'react';

function Example(props) {
  // hook在class内部是不起作用的
  // 声明一个叫 “count” 的 state 变量。
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `your click ${count} times`;
  });

  return (
    <div>
      <p>{`You clicked ${count} times`}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example;
