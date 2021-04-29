import styled from 'styled-components';
import { Form } from 'components';
import { palette } from 'styles';

export const StyledMealModalDialogContainer = styled.div`
  background-color: ${palette.themeBright};
  border: 3px solid;
  border-color: ${palette.themePrimary};
  border-radius: 20px;
  padding-top: 30px;
  width: 500px;
`;

export const StyledMealModalDialogForm = styled(Form)`
  position: relative;
`;
