import styled from "styled-components";

export const StyledInputWrapper = styled.div`
  /* display: inline-flex;
  flex-flow: column; */
`;

export const StyledLabel = styled.label`
  /* font-size: 13px; */
  display: block;
  font-size: 1.2rem;
  text-indent: 10px;
  margin: 5px 0;

  &[for="postingFile"] {
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
`;
export const StyledInput = styled.input`
  /* flex: 1;
  border: 1px solid #585757;
  padding: 0.6em;
  font: 500 0.9rem "Noto Sans";
  border-radius: 5px;
  background: transparent;
  color: #000; */

  /* &::placeholder {
    color: rgba(147, 153, 210, 0.56);
  }

  &:read-only {
    color: rgba(147, 153, 210, 0.56);
  }

  &:disabled {
    cursor: not-allowed;
    color: rgba(147, 153, 210, 0.56);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(147, 153, 210, 0.56);
    &:not(:focus-visible) {
      box-shadow: none;
    }
  } */
  width: 320px;
  height: 30px;
  outline: none;
  border: 1px solid #f3b34c;
  border-radius: 5px;
  padding: 0 10px;
  background-color: #fefdf8;
  margin-bottom: 10px;

  &[type="file"] {
    display: none;
  }

  &[type="date"] {
    cursor: pointer;
  }
`;

export const StyledErrorMessage = styled.p`
  color: red;
`;
