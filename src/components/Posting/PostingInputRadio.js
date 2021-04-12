const PostingInputRadio = ({ id, name, value, label, defaultChecked }) => {
  return (
    <>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        defaultChecked={defaultChecked && defaultChecked}
      />
      <label htmlFor={id}>{label}</label>
    </>
  );
};

export default PostingInputRadio;
