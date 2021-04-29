import React, { useState } from 'react';
import { SignUpForm, Portal, Modal } from 'components';
import { signUpWithEmailAndPassword } from 'api/auth';
import { isEmail, isPassword } from 'utils/validation/LogInValidation';
import {
  isHeight,
  isWeight,
  isNickname
} from 'utils/validation/SignUpValidation';

const formValue = {
  password: null,
  email: null,
  gender: null,
  height: null,
  nickname: null,
  weight: null,
  hasError: {
    password: null,
    checkpassword: null,
    email: null,
    gender: null,
    height: null,
    nickname: null,
    weight: null
  }
};

export default function SignUpContainer({ closeModal, ...restProps }) {
  const [state, setState] = useState(formValue);
  const [checkPasswordValue, setCheckPasswordValue] = useState(null);
  const [isShow, setIsShow] = useState(false);

  // const isCheckPassword = (e) => {
  //   e.target ===
  // }

  const onChange = e => {
    if (e.target.name === 'gender') {
      setState({ ...state, [e.target.name]: e.target.value.trim() });
    } else {
      setState({ ...state, [e.target.name]: e.target.value.trim() });
    }
  };

  const emailValid = value => {
    if (!isEmail(value)) {
      setState({
        ...state,
        hasError: {
          ...state.hasError,
          email: '입력 형식에 맞지 않습니다.'
        }
      });
    } else if (value.length === 0) {
      setState({
        ...state,
        hasError: {
          ...state.hasError,
          email: '이메일 형식으로 입력해주세요.'
        }
      });
    } else {
      setState({
        ...state,
        hasError: {
          ...state.hasError,
          email: null
        }
      });
    }
  };

  const passwordlValid = value => {
    if (!isPassword(value)) {
      setState({
        ...state,
        hasError: {
          ...state.hasError,
          password: '입력 형식에 맞지 않습니다.'
        }
      });
    } else {
      setState({
        ...state,
        hasError: {
          ...state.hasError,
          password: null
        }
      });
    }
    setCheckPasswordValue(value);
  };

  const checkPasswordlValid = value => {
    if (value === checkPasswordValue) {
      setState({
        ...state,
        hasError: {
          ...state.hasError,
          checkpassword: null
        }
      });
    } else {
      setState({
        ...state,
        hasError: {
          ...state.hasError,
          checkpassword: '비밀번호를 확인해주세요.'
        }
      });
    }
  };

  const heightlValid = height => {
    if (!isHeight(height)) {
      setState({
        ...state,
        hasError: {
          ...state.hasError,
          height: '입력 형식에 맞지 않습니다.'
        }
      });
    } else {
      setState({
        ...state,
        hasError: {
          ...state.hasError,
          height: null
        }
      });
    }
  };

  const weightValid = weight => {
    if (!isWeight(weight)) {
      setState({
        ...state,
        hasError: {
          ...state.hasError,
          weight: '입력 형식에 맞지 않습니다.'
        }
      });
    } else {
      setState({
        ...state,
        hasError: {
          ...state.hasError,
          weight: null
        }
      });
    }
  };

  const nicknameValid = nickname => {
    if (!isNickname(nickname)) {
      setState({
        ...state,
        hasError: {
          ...state.hasError,
          nickname: '입력 형식에 맞지 않습니다.'
        }
      });
    } else {
      setState({
        ...state,
        hasError: {
          ...state.hasError,
          nickname: null
        }
      });
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    const Formdata = new FormData();
    Object.entries(state).forEach(([key, value]) => {
      Formdata.append(key, value);
      console.log(`${key}, ${value}`);
    });

    const { email, password, weight, height, gender, nickname } = state;

    signUpWithEmailAndPassword(email, password, {
      weight,
      height,
      gender,
      nickname
    });
    closeModal();
  };

  const onBlur = e => {
    if (e.target.name === 'password') {
      passwordlValid(e.target.value);
    } else if (e.target.name === 'email') {
      emailValid(e.target.value);
    } else if (e.target.name === 'height') {
      heightlValid(e.target.value);
    } else if (e.target.name === 'weight') {
      weightValid(e.target.value);
    } else if (e.target.name === 'nickname') {
      nicknameValid(e.target.value);
    } else if (e.target.name === 'checkpassword') {
      checkPasswordlValid(e.target.value);
    }
  };

  const onFocus = e => {
    const targetName = e.target.name;
    if (e.target.value.length === 0) {
      switch (targetName) {
        case 'email':
          setState({
            ...state,
            hasError: {
              ...state.hasError,
              email: '이메일 형식으로 입력해주세요.'
            }
          });
          break;
        case 'password':
          setState({
            ...state,
            hasError: {
              ...state.hasError,
              password:
                '영어, 숫자, 특수문자 포함 6~20자 미만으로 입력해주세요.'
            }
          });
          break;
        case 'nickname':
          setState({
            ...state,
            hasError: {
              ...state.hasError,
              nickname:
                '한글, 영어, 특수문자, 숫자 포함 2~10자 미만으로 작성해주세요'
            }
          });
          break;
        default:
          break;
      }
    }
  };

  const isDisabled =
    state.hasError.email ||
    state.hasError.password ||
    !state.email ||
    !state.password;

  window.addEventListener('keyup', e => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });

  const changePasswordMode = e => {
    e.preventDefault();
    setIsShow(!isShow);
    e.target.focus();
  };

  return (
    <Portal id='modal-dialog'>
      <Modal>
        <SignUpForm
          onChange={onChange}
          onBlur={onBlur}
          onSubmit={onSubmit}
          disabled={isDisabled}
          errorMessage={state.hasError}
          closeModal={closeModal}
          changePasswordMode={changePasswordMode}
          isShow={isShow}
          onFocus={onFocus}
          {...restProps}
        />
      </Modal>
    </Portal>
  );
}
