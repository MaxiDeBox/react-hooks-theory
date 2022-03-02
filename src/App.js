import React from "react";
import {useState, useEffect, useRef, useMemo, useCallback} from "react";
import Main from "./Main";
import Alert from "./alert/Alert";
import {AlertProvider} from "./alert/AlertContext";

function useLogger(value) {
  useEffect(()=>{
    console.log('Value changes', value);
  }, [value])
}

function useInput(initioalValue) {
  const [value, setValue] = useState(initioalValue);

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const clear = () => setValue('');

  return {
    bind: {
      value,
      onChange
    },
    value,
    clear
  }
}

function App() {
  const input = useInput('');
  useLogger(input.value);

  return (
    // <AlertProvider>
    //   <div className={'container pt-3'}>
    //     <Alert />
    //     <Main toggle={() => {}} />
    //   </div>
    // </AlertProvider>
    <div className={'container pt-3'}>
      <input type="text" value={input.bind.value} onChange={input.bind.onChange} />
      <button className={'btn btn-warning'} onClick={() => input.clear()}>Очистить</button>
      <hr />
      <p>{input.bind.value}</p>
    </div>
  );
}

export default App;
