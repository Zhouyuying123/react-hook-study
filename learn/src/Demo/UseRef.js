import React, { useRef}from 'react';
/**
 *
 */
const Index = () => {
  const inputRef = useRef();// 获取dom元素
  const saveValue = useRef({value:'test'});// 保存变量
 

  return (
    <div>
      <h1>useRef</h1>
      <input type="text" ref={inputRef} />
      
      <button
        onClick={() => {
          // console.log(inputRef.current.value,'inputRef')
          saveValue.current.value = inputRef.current.value;
          console.log(saveValue,'saveValue')
      }}
      >控制台打印</button>
    </div>
  )
}
export default Index;