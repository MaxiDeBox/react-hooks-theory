import React, {useEffect, useState} from "react";

export default function ItemsList({getItems}) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const newItems = getItems();
    setItems(newItems);
    console.log('render');
  }, [getItems])

  return (
    <ul>
      {
        items.map((item, idx) => <li key={idx}>{item}</li>)
      }
    </ul>
  );
}
