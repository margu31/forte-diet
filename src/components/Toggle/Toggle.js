import StyledToggle from "./Toggle.styled";

const Toggle = ({ label1, label2, id, onChange }) => {
  return (
    <StyledToggle>
      <input type="checkbox" id={id} name={id} onChange={onChange} />
      <label htmlFor={id}>
        <span>{label1}</span>
        <span>{label2}</span>
        <span></span>
      </label>
    </StyledToggle>
  );
};

export default Toggle;
