
import React, { useMemo} from 'react'

const ChildMemo = ({ num, count }) => {

 // memo的运用
 const res = useMemo(() => {
  return {num,count}
 }, [count])
 
 return (
  <h2>子组件接收到的count、num {res.num}-count{res.count}</h2>
 )
}
export default ChildMemo;