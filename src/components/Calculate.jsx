import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateOutput } from '../redux/slices/calculatorSlices'; // Импортируем экшен для обновления вывода
import '../App.css';
import data from '../data';

const Calculate = () => {
  const output = useSelector(state => state.calculate.output); // Используйте правильный ключ
  const dispatch = useDispatch();

  const handleClick = (val) => {
    dispatch(updateOutput(val)); // Отправляем действие Redux для обновления вывода
  };

  return (
    <div className="container">
      <div className="output">
        <input type="text" value={output || ''} readOnly /> {/* Проверяем, определено ли output, прежде чем его использовать */}
        <div className="buttons">
          {data.buttons.map((item, index) => (
            <button key={index} onClick={() => handleClick(item.val)}>
              {item.val}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculate;
