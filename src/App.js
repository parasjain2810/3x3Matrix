import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [clicks, setClicks] = useState([]);
  const [matrix, setMatrix] = useState(Array(9).fill(''));
  const [count,setCount]=useState(0);

  const handleClick = (index) => {
    setCount(count+1);
    let newMatrix = [...matrix];
    if (newMatrix[index] === '') {
      newMatrix[index] = 'green';
      setClicks([...clicks, index]);
      setMatrix(newMatrix);
      if (count===8) {
        changeToOrange();
      }
    }
  };

  const changeToOrange = () => {
    let newMatrix = [...matrix];
    clicks.forEach((clickIndex, idx) => {
      setTimeout(() => {
        newMatrix[clickIndex] = 'orange';
        setMatrix([...newMatrix]);
      }, 500 * (idx + 1));
    });
  };

  return (
    <div className="grid-container">
      {matrix.map((color, index) => (
        <div
          key={index}
          className="grid-item"
          style={{ backgroundColor: color }}
          onClick={() => handleClick(index)}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
};

export default App;
