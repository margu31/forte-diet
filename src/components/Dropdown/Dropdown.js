import React, { useState } from 'react';

export default function Dropdown({ selects }) {
  const [selected, setSelected] = useState('anything');
  const [isShowOptions, setIsShow] = useState(false);

  const handleClick = e => {
    setIsShow(true);
  };

  const handleSelect = e => {
    setSelected(e.target.textContent);
    setIsShow(false);
  };

  return (
    <div>
      <div onClick={handleClick}>{selected}</div>
      {isShowOptions && (
        <ul>
          {selects.map(select => (
            <li onClick={handleSelect}>{select}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
