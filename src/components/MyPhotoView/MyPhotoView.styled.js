import styled from "styled-components";
import { palette } from "styles";

export const MyPhotoViewContainer = styled.div`
  display: flex;
  background-color: transparent;
  width: 500px;
  height: 200px;
`;

export const MyPhotoViewImg = styled.img`
  margin: auto;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 7px solid;
  border-color: ${palette.themePrimary};
`;
