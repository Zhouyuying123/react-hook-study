
import React, { useCallback,useState} from 'react'
const UseCallback = (() => {
 const [count, setcount] = useState(0)
 const [num, setnum] = useState(0)
 let callBack = useCallback(() => {
  return count;
 },[num])
 return (
  <div>
   <h1>useCallback</h1>
   <div>
    <p>作用：避免组件重复渲染，提高性能（useMemo）,可以控制组件什么时候更新，同样用到缓存技术</p>
    <p>和usememo的区别：useCallBack是函数</p>
    <p>使用：useCallback(()=>{ },[]),两个参数，第一个是函数，第二个是数组，数组可不写</p>
    <p>可直接callback()执行</p>
   </div>
   <hr />
   <div>
    <h2>状态count：{count}</h2>
    <h2>状态num：{num}</h2>
    <h3>callBack:{ callBack()}</h3>
    <button onClick={() => { setcount(count + 1) }}>count add</button>
    <button onClick={() => { setnum(num + 1) }}>num add</button>
   </div>
   </div>
 )
})

export default UseCallback