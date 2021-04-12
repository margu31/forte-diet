import styled from "styled-components";

export const StyledInputWrapper = styled.div`
  display: inline-flex;
  flex-flow: column;
`;

export const StyledLabel = styled.label`
  font-size: 13px;
`;
export const StyledInput = styled.input`
  flex: 1;
  border: 1px solid #585757;
  padding: 0.6em;
  font: 500 0.9rem "Noto Sans";
  border-radius: 5px;
  background: transparent;
  color: #000;

  &::placeholder {
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
  }
`;

export const StyledErrorMessage = styled.p`
  color: red;
`;
