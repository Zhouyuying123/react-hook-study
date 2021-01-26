import React, { useRef, useState } from "react";
import PersonalContext from "./context";
import ChildContext from "./child";

const Index = () => {
  const inputRef = useRef(); // 获取dom元素

  const [count, setcount] = useState(0);

  return (
    <div>
      <PersonalContext.Provider value={count}>
        <ChildContext></ChildContext>
      </PersonalContext.Provider>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          setcount(inputRef.current.value);
        }}
      >
        click
      </button>
    </div>
  );
};
export default Index;
