import {useDeferredValue, useState} from 'react'
import Body from "./Body.tsx";

function App() {
  const [num, setNum] = useState('');
  const deferredNum = useDeferredValue(num);
  console.log(num, deferredNum);
  return (
    <div >
      <input onChange={(e)=>{setNum(e.target.value)}}/>
      <div style={{display:'flex'}}>
        <Body num={Number(deferredNum)}></Body>
{/*
        <Body num={Number(num)}></Body>
*/}
      </div>
    </div>
  )
}

export default App
