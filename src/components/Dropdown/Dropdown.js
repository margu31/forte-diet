import React, { useState } from 'react';
import {
  StyledDownArrow,
  StyledDropdownWrapper,
  StyledOptions,
  StyledSelect,
  StyledWindow
} from './Dropdown.styled';

export default function Dropdown({ selects }) {
  const [selected, setSelected] = useState('anything');
  const [isShowOptions, setIsShow] = useState(false);

  const handleClick = e => {
    if (isShowOptions) {
      setSelected(e.target.textContent);
      setIsShow(false);
    } else setIsShow(true);
  };

  const handleSelect = e => {
    setSelected(e.target.textContent);
    setIsShow(false);
  };

  return (
    <StyledDropdownWrapper>
      <StyledWindow onClick={handleClick}>
        {selected}
        <StyledDownArrow />
      </StyledWindow>
      {
        <StyledSelect $isShowOptions={isShowOptions}>
          {selects.map(select => (
            <StyledOptions $isShowOptions={isShowOptions} onClick={handleSelect}>
              {select}
            </StyledOptions>
          ))}
        </StyledSelect>
      }
    </StyledDropdownWrapper>
  );
}
