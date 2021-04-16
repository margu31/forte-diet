import styled from "styled-components";

const StyledRadioTitle = styled.p`
  font-size: 1.1.rem;
  margin: 0.5rem 0;
  text-indent: 1rem;
`;

const StyledRadioGroup = styled.div`
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

export { StyledRadioGroup, StyledRadioTitle };
