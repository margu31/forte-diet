import StyledToggle from "./Toggle.styled";

const Toggle = ({
  label1,
  label2,
  id,
  onChange,
  isEditing,
  defaultIsPublic,
}) => {
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.stopPropagation();
      e.target.click();
    }
  };

  return (
    <StyledToggle>
      <input
        type="checkbox"
        id={id}
        name={id}
        onChange={onChange}
        checked={isEditing && defaultIsPublic === "private"}
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
