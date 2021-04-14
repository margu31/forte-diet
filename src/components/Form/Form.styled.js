import styled from "styled-components";

export const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLegend = styled.legend`
  overflow: hidden;
  position: absolute;
  clip: rect(0 0 0 0); /* IE 6,7 */
  clip: rect(0, 0, 0, 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
`;
