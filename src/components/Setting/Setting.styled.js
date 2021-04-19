import Input from "components/Input/Input";
import styled from "styled-components";

export const StyledInputWrapper = styled.div`
  margin-top: 4rem;
`;

export const StyledSettingInput = styled(Input)`
  label {
    display: inline-block;
    font-size: 1.2rem;
    width: 60px;
    text-align: right;
  }

  input {
    height: 35px;
    font-size: 1.1rem;
    margin-left: 15px;
    margin-bottom: 2rem;
  }
`;

export const StyledRadio = styled.div`
  width: 417px;
  margin-bottom: 2rem;

  p {
    display: inline-block;
    font-size: 1.2rem;
    text-align: right;
    width: 60px;
  }

  label {
    margin-left: 15px;
    & + & {
    }
  }
  /* 
  input {
    display: inline-block;
  } */
`;

export const StyledButtonGroup = styled.div`
  padding-top: 20px;
`;
