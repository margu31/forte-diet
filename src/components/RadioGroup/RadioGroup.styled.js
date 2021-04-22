import styled from "styled-components";
import { fontSizeKit, fontWeightKit } from "styles";

const StyledRadioTitle = styled.p`
  font-size: ${fontSizeKit.medium};
  font-weight: ${fontWeightKit.bold};
  margin: 5px 0 7px 0;
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
