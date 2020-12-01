import React, { useState,useEffect}from 'react';
/**
 *
 * 1、componentDidMount,componentDidUpdate,componentWillUnmount,componentWillRecieveProps...
 * 2、\useEffect为什么可以在组件函数内部执行？
 * 3、多个useEffect();
 * 4、无阻塞更新？
 * 5、useEffect(回调函数,数组)
 */
const Index = () => {
 const [count, setcount] = useState(0);

 useEffect(() => {
  console.log(count, 'count');// 这种情况包含了以上所有状态：监视所有状态，在这些状态下都会执行此方法
 })

 useEffect(() => {
  return () => {
   console.log("is run in 'componentDidMount' life circle?");
  }
 }, [])
 
 useEffect(() => {
  console.log("is run in 'componentWillRecieveProps' life circle?");
 }, [count])
 

 return<>
  <h1>effect</h1>
  {count}
  <button
   onClick={() => {
    setcount(x => x + 1);
   }}
  >click</button>
  </>
}
export default Index;