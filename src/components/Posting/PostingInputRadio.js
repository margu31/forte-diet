const PostingInputRadio = ({ id, name, value, label }) => {
  return (
    <>
      <input type="radio" id={id} name={name} value={value} />
      <label htmlFor={id}>{label}</label>
    </>
  );
};

export default PostingInputRadio;
