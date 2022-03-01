import {useState, useEffect, useRef, useMemo} from "react";

function complexCompute(num) {
  console.log('complexCompute');
  let i = 0;
  while(i < 1000000000) i++
  return num * 2;
}

// useMemo использовать для кеширования данных

function App() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const styles = useMemo(() => {
    return {
      color: colored ? 'darkred' : 'black'
    }
  }, [colored]);

  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]);

  useEffect(()=>{
    console.log('styles changes');
  }, [styles]);

  return (
    <>
      <h1 style={styles}>Вычисляемое свойство: {computed}</h1>
      <button className="btn btn-success" onClick={() => setNumber(prevState => prevState + 1)}>
        Добавить
      </button>
      <button className="btn btn-danger" onClick={() => setNumber(prevState => prevState - 1)}>
        убрать
      </button>
      <button className="btn btn-warning" onClick={() => setColored(prevState => !prevState)}>
        Изменить
      </button>
    </>
  );
}

export default App;
