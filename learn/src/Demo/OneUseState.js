import React, { useState } from 'react';

const Index = () => {
  const [count, setcount] = useState(0);
  const [obj, setobj] = useState({name:'lily'})
  const [arr, setarr] = useState([1, 2, 3])
  // eslint-disable-next-line no-unused-vars
  const [fun, setfun] = useState(() => { // usetState 可以返回一个函数，再通过函数返回状态
    return {name:'test'}
  })

  return (
    < >
      <h1>useState使用示例</h1>
      <p>改变简单数据类型</p>
      <h2>{count}</h2>
      <button onClick={() => { setcount(count + 1) }}>change count</button>
      <br />
      <p>改变对象</p>
      <h2>{obj.name}---{ obj.age}</h2>
      <button onClick={() => { // set方法里面要返回新对象
        setobj({
          ...obj,
          age:20,
        })
      }}>change-obj</button>
      <br />
      <p>改变数组</p>
      <h2>{arr}</h2>
      <button
        onClick={() => {
          setarr(() => {
            arr.push(4);
            return arr;
          })
        }}
      >change arr</button>
    </>
  )
}
export default Index;