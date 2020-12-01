
import React, { useState, useMemo, useEffect } from 'react';
import ChildMemo from './ChildMemo';

const Memo = () => {

 const [count, setcount] = useState(0)
 const [num, setnum] = useState(0)

 const res = useMemo(() => {
  return { count ,num};
 },[count]);

 useEffect(() => {
  console.log('=useEffect==')
 })
 
 console.log('render')

 return(
  <div>
   <img src="../../public/logo192.png" alt="22" />
   <h1>避免重复渲染问题</h1>
   <div>
    <p>memoization? `js`中的一种缓存技术，以空间换速度（cpu密集操作时，可以将初始结果存储在缓存中来优化使用）</p>
    <p>是一个函数，有两个参数，第一个是函数，第二个是数组</p>
    <p>useMemo(() =>{ }, 默认可以不写)</p>
    <p>在组件渲染过程中执行</p>
   </div>
   <hr />
   <div>以下是例子，num改变的时候页面num并没有更新，但是count更新后num的更新就显示出来了</div>
   <p>res{res.count}---res{ res.num }</p>
   <p>change-{count}</p>
   <button onClick={() => { setcount(count + 1) }}>set count</button>
   <hr />
   <p>change-{num}</p>
   <button onClick={() => { setnum(num + 1) }}>set num</button>
   <hr />分割线<hr />
   <div>
    <ChildMemo num = { num} count = {count}/>
   </div>
  </div >
 )
};

export default Memo;