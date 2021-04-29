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
      <label
        tabIndex="0"
        htmlFor={id}
        onKeyDown={onKeyDown}
        aria-label="공개 여부를 선택하세요. 미 선택시 전체 공개로 포스팅됩니다."
      >
        {/* <span tabIndex="0" role="checkbox" aria-checked="false"> */}
        <span>{label1}</span>
        {/* <span tabIndex="0" role="checkbox" aria-checked="true"> */}
        <span>{label2}</span>
        <span></span>
      </label>
    </StyledToggle>
  );
};

export default Toggle;
