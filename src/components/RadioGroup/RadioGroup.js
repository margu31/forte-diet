import { StyledRadioGroup, StyledRadioTitle } from './RadioGroup.styled';
import { InputRadio } from 'components';

const RadioGroup = ({
  groupTitle,
  onChange,
  isEditing,
  defaultType,
  onMoveNextInput,
  labelTitle
}) => {
  return (
    <>
      <StyledRadioTitle>{groupTitle}</StyledRadioTitle>
      <StyledRadioGroup>
        <InputRadio
          id='breakfast'
          name='type'
          value='아침'
          label='아침'
          onChange={onChange}
          checked={isEditing ? (defaultType === '아침' ? true : false) : null}
          onMoveNextInput={onMoveNextInput}
          labelTitle={labelTitle}
        />
        <InputRadio
          id='lunch'
          name='type'
          value='점심'
          label='점심'
          onChange={onChange}
          checked={isEditing ? (defaultType === '점심' ? true : false) : null}
          onMoveNextInput={onMoveNextInput}
          labelTitle={labelTitle}
        />
        <InputRadio
          id='dinner'
          name='type'
          value='저녁'
          label='저녁'
          onChange={onChange}
          checked={isEditing ? (defaultType === '저녁' ? true : false) : null}
          onMoveNextInput={onMoveNextInput}
          labelTitle={labelTitle}
        />
        <InputRadio
          id='snack'
          name='type'
          value='간식'
          label='간식'
          onChange={onChange}
          checked={isEditing ? (defaultType === '간식' ? true : false) : null}
          onMoveNextInput={onMoveNextInput}
          labelTitle={labelTitle}
        />
      </StyledRadioGroup>
    </>
  );
};

export default RadioGroup;
