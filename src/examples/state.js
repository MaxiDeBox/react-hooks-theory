import {useState} from "react";

function computeInitialCounter() {
  console.log('Some calc....');

  return Math.trunc(Math.random() * 20);
}

function AppState() {
  const [counter, setCounter] = useState(() => computeInitialCounter());

  function increment() {
    // setCounter(counter + 1);

    // Для работы с предыдущим состоянием
    setCounter((previewCounter) => {
      return previewCounter + 1;
    });
  }

  function decrement() {
    setCounter(counter  - 1);
  }


  const [state, setState] = useState({
    title: 'Счетчик',
    date: Date.now()
  });

  // Изменение объекта
  function updateTitle() {
    setState((preview) => {
      return {
        ...preview,
        title: 'Новое название'
      }
    });
  }

  return (
    <div>
      <h1>Счетчик {counter}</h1>
      <div>
        <button className="btn btn-success" onClick={increment}>Добавить</button>
        <button className="btn btn-danger" onClick={decrement}>Убрать</button>
        <button className="btn btn-default" onClick={updateTitle}>Изменить название</button>
      </div>

      <pre>
        {JSON.stringify(state, null, 2)}
      </pre>
    </div>
  );
}

export default AppState;
