import { useRef } from 'react';
import {
  StyledButtonGroup,
  StyledRadio,
  StyledSettingInput,
  StyledInputWrapper,
  StyledFormWrapper,
  StyledImage,
  StyledError
} from './Setting.styled';
import { Button, Form, Input, InputRadio } from 'components';
import { ReactComponent as Edit } from 'assets/icons/InputIcons/edit_black.svg';

const Setting = ({
  userEmail,
  userNickname,
  userGender,
  userHeight,
  userWeight,
  onChange,
  onKeyUp,
  onSubmit,
  goBack,
  ErrorMessage,
  isDisabled
}) => {
  const nicknameRef = useRef();
  const heightRef = useRef();
  const weightRef = useRef();

  const onNicknameEdit = () => {
    nicknameRef.current.disabled = false;
  };
  const onHeightEdit = () => {
    heightRef.current.disabled = false;
  };
  const onWeightEdit = () => {
    weightRef.current.disabled = false;
  };

  const onEditNickname = e => {
    if (e.keyCode === 13) {
      onNicknameEdit();
      nicknameRef.current.focus();
    }
  };

  const onEditHeight = e => {
    if (e.keyCode === 13) {
      onHeightEdit();
      heightRef.current.focus();
    }
  };

  const onEditWeight = e => {
    if (e.keyCode === 13) {
      onWeightEdit();
      weightRef.current.focus();
    }
  };

  return (
    <StyledFormWrapper>
      <Form legend='정보 수정'>
        <StyledInputWrapper>
          <StyledSettingInput>
            <Input
              type='text'
              id='email'
              name='email'
              label='이메일'
              disabled='true'
              defaultValue={userEmail}
            />
          </StyledSettingInput>
          <StyledSettingInput>
            <label htmlFor='nickname'>
              <Edit
                onClick={onNicknameEdit}
                tabIndex='0'
                aria-label='닉네임 수정 버튼'
                onKeyDown={onEditNickname}
              />
            </label>
            <Input
              type='text'
              id='nickname'
              name='nickname'
              label='닉네임'
              defaultValue={userNickname}
              onChange={onChange}
              onKeyUp={onKeyUp}
              disabled='true'
              ref={nicknameRef}
            />
            {ErrorMessage.nicknameError !== null && (
              <StyledError>{ErrorMessage.nicknameError}</StyledError>
            )}
          </StyledSettingInput>
          <StyledRadio>
            <p>성별</p>
            <InputRadio
              id='male'
              name='gender'
              value='male'
              label='남성'
              // onChange={onChange}
              checked={userGender === 'male' ? true : false}
            />
            <InputRadio
              id='female'
              name='gender'
              value='female'
              label='여성'
              // onChange={onChange}
              checked={userGender === 'female' ? true : false}
            />
          </StyledRadio>
          <StyledSettingInput>
            <label htmlFor='height'>
              <Edit
                onClick={onHeightEdit}
                tabIndex='0'
                aria-label='신장 정보 수정 버튼'
                onKeyDown={onEditHeight}
              />
            </label>
            <Input
              type='text'
              id='height'
              name='height'
              label='신장'
              onChange={onChange}
              onKeyUp={onKeyUp}
              defaultValue={userHeight}
              disabled='true'
              ref={heightRef}
            />
            {ErrorMessage.heightError !== null && (
              <StyledError>{ErrorMessage.heightError}</StyledError>
            )}
          </StyledSettingInput>
          <StyledSettingInput>
            <label htmlFor='weight'>
              <Edit
                onClick={onWeightEdit}
                tabIndex='0'
                aria-label='몸무게 정보 수정 버튼'
                onKeyDown={onEditWeight}
              />
            </label>
            <Input
              type='text'
              id='weight'
              name='weight'
              label='몸무게'
              onChange={onChange}
              onKeyUp={onKeyUp}
              defaultValue={userWeight}
              disabled='true'
              ref={weightRef}
            />
            {ErrorMessage.weightError && <StyledError>{ErrorMessage.weightError}</StyledError>}
          </StyledSettingInput>
        </StyledInputWrapper>
        <StyledButtonGroup>
          <Button type='button' onSubmit={goBack}>
            취소
          </Button>
          <Button onSubmit={onSubmit} disabled={isDisabled}>
            수정
          </Button>
        </StyledButtonGroup>
      </Form>
      <StyledImage />
    </StyledFormWrapper>
  );
};

export default Setting;
