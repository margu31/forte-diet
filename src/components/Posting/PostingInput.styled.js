import styled from "styled-components";

const StylePostingInput = styled.div`
  label {
    display: block;
    font-size: 14px;
  }

  input {
    width: 320px;
    height: 30px;
    outline: none;
    border: 1px solid #f3b34c;
    border-radius: 5px;
    padding: 0 10px;
    background-color: #fefdf8;
  }

  label[for="postingFile"] {
    width: 230px;
    height: 230px;
    border-radius: 50%;
    border: 8px solid #395b9d;
    text-align: center;
    cursor: pointer;
    line-height: 230px;
    background-color: #fefdf8;
  }

  input[type="file"] {
    display: none;
  }

  input[type="date"] {
    cursor: pointer;
  }
`;

export default StylePostingInput;
