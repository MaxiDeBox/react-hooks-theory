import {useState, useEffect, useRef, useMemo, useCallback} from "react";
import ItemsList from "./ItemsList";

function App() {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const styles = {
    color: colored ? 'darkred' : 'black'
  };

  // Разница между useMemo мы получаем сам callback
  const generateItemsFromIPI = useCallback(() => {
    return new Array(count).fill('').map((item, idx) => `Элемент ${idx + 1}`)
  }, [count]);

  return (
    <div>
      <>
        <h1 style={styles}>Количество элементов: {count}</h1>
        <button className={'btn btn-success'} onClick={() => setCount(prevState => prevState + 1)}>Добавить</button>
        <button className={'btn btn-warning'} onClick={() => setColored(prevState => !prevState)}>Изменить</button>

        <ItemsList getItems={generateItemsFromIPI}/>
      </>
    </div>
  );
}

export default App;
