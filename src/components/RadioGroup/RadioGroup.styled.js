import styled from 'styled-components';
import { palette } from '../../styles';

const StyledRadioTitle = styled.p`
  font-size: 1.1.rem;
  margin: 0.5rem 0;
  text-indent: 1rem;
`;

const StyledRadioGroup = styled.div`
  background-color: ${palette.themeBirghtYellow};
  border: 1px solid ${palette.themePrimary};
  width: 342px;
  margin-bottom: 1rem;

  input:checked + label {
    background-color: ${palette.themePrimary};
    color: ${palette.themeDefaultWhite};
  }

  display: inline-block;
  border-radius: 5px;
`;

export { StyledRadioGroup, StyledRadioTitle };
