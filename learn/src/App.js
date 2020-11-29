import React, { useState}from 'react';
import OneUseState from './Demo/OneUseState';
import TwoUseEffect from './Demo/TwoUseEffect';
import './index.css'

const Index = () => {
  const [activeComponet, setactiveComponet] = useState(<OneUseState></OneUseState>)
  const tabList = [
    {
      title: 'useState',
      component:<OneUseState/>
    },
    {
      title: 'useEffect',
      component:<TwoUseEffect/>
    },
  ]
  const setActiveKey = (item) => {
    setactiveComponet(item.component);
  }
  return (
    <React.Fragment>
      {
        tabList.map(item => {
          return <button onClick={() => { setActiveKey(item) }}>
            {item.title}
          </button>
        })
      }
      {
        activeComponet
      }
    </React.Fragment>
  )
}
export default Index;