import InputRadio from "components/Radio/InputRadio";
import styled from "styled-components";

const StyledRadioTitle = styled.p`
  position: absolute;
  font-size: 1.1.rem;
  margin: 0.5rem 0;
  text-indent: 1rem;
  margin-right: 1rem;
`;

const StyledRadioGroup = styled.div`
  position: relative;
  width: auto;
  height: auto;
  display: inline-block;
  border-radius: 5px;
  margin-bottom: 10px;

  span:first-of-type {
    label {
      border-radius: 5px 0 0 5px;
    }
  }
  span:last-of-type {
    label {
      border-radius: 0 5px 5px 0;
    }
  }
`;

export const SignUpInputRadio = styled(InputRadio)`
  label {
    margin-right: 5px;
  }
`;

export { StyledRadioGroup, StyledRadioTitle };
