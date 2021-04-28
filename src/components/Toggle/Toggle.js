import { useState } from "react";
import StyledToggle from "./Toggle.styled";

const Toggle = ({
  label1,
  label2,
  id,
  onChange,
  isEditing,
  defaultIsPublic,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.stopPropagation();
      e.target.checked = true;
      setIsChecked(!isChecked);
    }
  };

  return (
    <StyledToggle>
      <input
        type="checkbox"
        id={id}
        name={id}
        onChange={onChange}
        checked={
          isEditing
            ? defaultIsPublic === "private"
              ? true
              : false
            : isChecked
            ? true
            : false
        }
      />
      <label tabIndex="0" htmlFor={id} onKeyDown={onKeyDown}>
        <span>{label1}</span>
        <span>{label2}</span>
        <span></span>
      </label>
    </StyledToggle>
  );
};

export default Toggle;
