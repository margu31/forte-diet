import styled from "styled-components";

const StylePostingInput = styled.div`
  label {
    display: block;
    font-size: 1.2rem;
    text-indent: 10px;
    margin: 5px 0;
  }

  input {
    width: 320px;
    height: 30px;
    outline: none;
    border: 1px solid #f3b34c;
    border-radius: 5px;
    padding: 0 10px;
    background-color: #fefdf8;
    margin-bottom: 10px;
  }

  label[for="postingFile"] {
    width: 230px;
    height: 230px;
    border-radius: 50%;
    border: 8px solid #395b9d;
    text-align: center;
    cursor: pointer;
    line-height: 214px;
    background-color: #fefdf8;
    margin: 40px 0;
  }

  input[type="file"] {
    display: none;
  }

  input[type="date"] {
    cursor: pointer;
  }
`;

export default StylePostingInput;
