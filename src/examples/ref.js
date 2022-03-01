import {useState, useEffect, useRef} from "react";

function App() {
  const [val, setVal] = useState('initial');
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const prevValue = useRef('');

  useEffect(() => {
    // useRef возвращает нам объект и обращаемся к current
    renderCount.current++;
    console.log(inputRef.current.value);
  });

  const focus = () => {
    return inputRef.current.focus();
  };

  useEffect(() => {
    prevValue.current = val;
  }, [val])

  return (
    <div>
      <h1>Количество: {renderCount.current}</h1>
      <h2>Прошлое состояние: {prevValue.current}</h2>
      <input ref={inputRef} type='text' onChange={(e) => setVal(e.target.value)} value={val} />
      <button className='btn btn-success' onClick={focus}>Фокус</button>
    </div>
  );
}

export default App;
