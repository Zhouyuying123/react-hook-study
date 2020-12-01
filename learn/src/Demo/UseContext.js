import React, { useRef, useState, createContext, useContext } from 'react';

const contextMy = createContext();// 创建容器组件

const ChildContext = () => {// 子组件
  const count = useContext(contextMy);
  return (
    <div>子组件获得🉐的值{ count}</div>
  )
}

const Index = () => {
  const inputRef = useRef();// 获取dom元素

  const [count, setcount] = useState(0);

  return (
    <div>
      <contextMy.Provider value={count}>
        <ChildContext></ChildContext>
      </contextMy.Provider>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          setcount(inputRef.current.value);
      }}
      >click</button>
    </div>
  )
}
export default Index;