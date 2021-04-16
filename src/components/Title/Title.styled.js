import styled from "styled-components";
import { ReactComponent as Logo } from "assets/logos/logo1.svg";

export const StyledLogo = styled(Logo)`
  /* display: inline-block; */
  height: 50px;
  width: 50px;
  vertical-align: middle;
  margin-left: 20px;
  /* margin-right: 20px;
  transform: rotate(0deg);

  -moz-transform: scaleX(-1);

  -o-transform: scaleX(-1);

  -webkit-transform: scaleX(-1);

  transform: scaleX(-1); */
`;

export const StyledTitle = styled.h2`
  display: inline-block;
  font-size: 2.5rem;
  position: relative;
  text-indent: 20px;
  height: 50px;
  line-height: 50px;
  margin-top: 20px;

  &::before {
    position: absolute;
    content: "";
    display: block;
    width: 5px;
    height: 50px;
    background-color: #f26830;
  }
`;

// export default StyledTitle;
