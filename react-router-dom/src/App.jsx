import { countAtom,evenSelector } from "./store/atoms/count";
import {RecoilRoot ,useRecoilState, useRecoilValue,useSetRecoilState } from "recoil";

function App() {

  return (
    <RecoilRoot>
      <Count />
    </RecoilRoot>
  );
}

function Count() {
  return (
    <div>
      <CounterRendered />
      <Buttons />
    </div>
  );
}

function CounterRendered() {
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
}

function Buttons() {
  const setCount = useRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count => count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
