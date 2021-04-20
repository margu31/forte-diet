import React, { useEffect, useRef, useState } from 'react';
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
  const dropdown = useRef();
  const dropdownWindow = useRef();

  const closeDropdown = e => {
    console.log();
    if (e.target === dropdown.current || e.target === dropdownWindow.current) return;
    setIsShow(false);
  };

  useEffect(() => {
    window.addEventListener('click', closeDropdown);

    return () => {
      window.removeEventListener('click', closeDropdown);
    };
  }, []);

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
      <StyledWindow ref={dropdownWindow} onClick={handleClick}>
        {selected}
        <StyledDownArrow />
      </StyledWindow>
      {
        <StyledSelect ref={dropdown} $isShowOptions={isShowOptions}>
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
