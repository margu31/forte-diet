import styled from 'styled-components';
import { fontSizeKit, palette } from 'styles';

export const MyReViewContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: transparent;
  border-top: 1px solid ${palette.themePrimary};
  border-bottom: 1px solid ${palette.themePrimary};
  padding: 15px 10px;
  width: 350px;
  height: 150px;
`;

export const MyReViewtext = styled.p`
  color: ${palette.themeFont};
  width: 350px;
  height: auto;
  text-align: left;
  font-size: ${fontSizeKit.large};
  line-height: 1.5;
  font-size: 2rem;
  font-weight: 700;
`;
