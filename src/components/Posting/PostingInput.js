const PostingInput = ({
  type,
  id,
  name,
  label,
  placeholder,
  onChange,
  required,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
    </>
  );
};

export default PostingInput;
