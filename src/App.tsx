import {useDeferredValue, useState} from 'react'
import Body from "./Body.tsx";

function App() {
  const [num, setNum] = useState('');
  const [mult, setMult] = useState('');
  const [from, setFrom] = useState('0');
  const deferredNum = useDeferredValue(num);
  const deferredMult = useDeferredValue(mult);
  const deferredFrom = useDeferredValue(from);
    console.log(num, deferredNum);
  return (
      <div>
          <input onChange={(e) => {
              setNum(e.target.value)
          }}/>
          <input onChange={(e) => {
              setMult(e.target.value)
          }}/>
          <input onChange={(e) => {
              setFrom(e.target.value)
          }}/>

          <div style={{display: 'flex'}}>
              <Body num={Number(deferredNum)} mult={(Number(deferredMult))} from={(Number(deferredFrom))}></Body>
              {/*
              <Body num={Number(num)} mult={(Number(mult))} from={(Number(from))}></Body>
*/}
          </div>
      </div>
  )
}

export default App

/*
리액트는 한번의 스케줄에 변경사항이 있는 컴포넌트들을 함꼐 업데이트한다
1-1. Body가 일반 state에 dependent하면 input, Body가 한번에 업데이트가 된다.
1-2. input이 오래걸리는 Body와 함께 update가 되기 때문에 블락이 걸린다..

2. Body가 deferredValue에 dependent한 경우
2-1. State가 업데이트 된다. input은 빠르게 업데이트되고, Body는 dependecy가 변하지 않았으므로 업데이트 되지 않는다. 스무스하다.
2-2. DeferredValue에 값이 들어온다. input은 state에 dependent하므로 변하지 않는다. Body는 업데이트 된다.
2-3. 이때 Input은 업데이트되지 않으므로 잘 작동한다.

3. React.Memo를 잘 활용하자
React Memo를 안쓰면 매번 새로 Element를 리턴하기 때문에 deferredValue를 써도 1번이랑 같은 케이스가 발생한다.

4. Key를 잘 쓰자.
Key를 잘쓰면 같은 Key들과 다른 prop들의 값이 같으면 불필요한 렌더링을 줄일 수 있다.

5. 처음부터 다 신경쓰면서 짜지 말자
문제가 생기면 그때 성능 개선을 하자
*
* */

