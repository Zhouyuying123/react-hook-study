import React, { useContext } from "react";
import Personale from "./context";
const ChildContext = () => {
  // 子组件
  const personal = useContext(Personale);
  console.log(personal, "personal");
  return <div>子组件获得🉐的值{personal}</div>;
};

export default ChildContext;
