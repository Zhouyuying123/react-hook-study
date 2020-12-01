import React, { useState}from 'react';
import OneUseState from './Demo/OneUseState';
import TwoUseEffect from './Demo/TwoUseEffect';
import UseRefC from './Demo/UseRef';
import UseContext from './Demo/UseContext';
import UseMemoFun from './Demo/UseMemoFun';
import './index.css'

const Index = () => {
  const tabList = [
    {
      title: 'useState',
      component:<OneUseState/>
    },
    {
      title: 'useEffect',
      component:<TwoUseEffect/>
    },
    {
      title: 'UseRef',
      component:<UseRefC/>
    },
    {
      title: 'UseContext',
      component:<UseContext/>
    },
    {
      title: 'useMemo',
      component:<UseMemoFun/>
    },
  ]
  const [activeComponet, setactiveComponet] = useState(tabList[0])
  
  const setActiveKey = (item) => {
    setactiveComponet(item);
  }
  return (
    <React.Fragment>
      <header >
      {
        tabList.map(item => {
          return <div className= {`${item.title===activeComponet.title?'active':''} tab-items`}
            onClick={() => { setActiveKey(item) }} key={item.title}>
            {item.title}
          </div>
        })
        }
        </header>
          {
            activeComponet.component
          }
    </React.Fragment>
  )
}
export default Index;