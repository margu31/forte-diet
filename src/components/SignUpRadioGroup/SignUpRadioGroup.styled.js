import InputRadio from "components/Radio/InputRadio";
import styled, { css } from "styled-components";
import { fontSizeKit, fontWeightKit, palette } from "styles";

const StyledRadioGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 50px;
  text-align: center;
  width: 300px;
  height: 50px;
  border-radius: 5px;

  label {
    width: 100px;
    height: 40px;
    margin-top: 7px;
    line-height: 40px;
    border: 2px solid ${palette.themePrimary};
    font-size: ${fontSizeKit.medium};
    font-weight: ${fontWeightKit.normal};
  }

  span:first-of-type {
    label {
      border-radius: 5px 0 0 5px;
      border-right: 0;
    }
  }
  span:last-of-type {
    label {
      border-radius: 0 5px 5px 0;
    }
  }
`;

const StyledRadioTitle = styled.p`
  display: inline-block;
  width: 90px;
  font-size: ${fontSizeKit.medium};
  font-weight: ${fontWeightKit.extraBold};
  text-indent: 1rem;
  margin-right: 2rem;
  line-height: 50px;
  text-align: center;
`;
export { StyledRadioGroup, StyledRadioTitle };
