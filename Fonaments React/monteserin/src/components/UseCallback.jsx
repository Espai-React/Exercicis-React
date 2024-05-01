import React, { useState, useCallback } from 'react';

const Child = React.memo(({ onRemove, item }) => {
  console.log('Child render', item.id);
  return (
    <div>
      Item: {item.name}
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
});

const Parent = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
  ]);

  const handleRemove = useCallback((removeId) => {
    setItems(items => items.filter(item => item.id !== removeId));
  }, []);

  console.log('Parent render');

  return (
    <div>
      {items.map(item => (
        <Child key={item.id} item={item} onRemove={handleRemove} />
      ))}
    </div>
  );
};

export default Parent;
