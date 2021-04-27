import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fontWeightKit, palette } from 'styles';

export const StyledLink = styled(Link)`
  display: inline-block;
  font-family: 'InkLipquid';
  position: relative;
  padding: 5rem 0;
  font-size: 3.5rem;
  font-weight: ${fontWeightKit.normal};
  margin: 3rem 0;
  color: ${palette.themeDefaultWhite};
  border-radius: 10px;
`;
