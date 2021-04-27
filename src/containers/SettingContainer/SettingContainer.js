import Setting from 'components/Setting/Setting';
import Title from 'components/Title/Title';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editUserInfo } from 'api/firestore';
import { editUserAction } from 'redux/modules/auth/auth';
import { isHeight, isNickname, isWeight } from 'utils/validation/SignUpValidation';

const initialError = {
  nicknameError: null,
  heightError: null,
  weightError: null
};

export default function SettingContainer({ history }) {
  const { authUser } = useSelector(state => state.auth);
  const [user, setUser] = useState(authUser);
  const dispatch = useDispatch();
  // console.log("authUser :", authUser);
  // console.log("user :", user);

  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState(initialError);
  const { nicknameError, heightError, weightError } = error;

  useEffect(() => {
    if (authUser) {
      if (nicknameError || heightError || weightError) {
        setIsDisabled(true);
        return;
      } else {
        setIsDisabled(false);
      }

      if (
        authUser.nickname !== user.nickname ||
        authUser.weight !== user.weight ||
        authUser.height !== user.height
      ) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    }
  }, [authUser, user, nicknameError, heightError, weightError]);

  const nicknameValid = nickname => {
    if (!isNickname(nickname)) {
      setError({
        ...error,
        nicknameError:
          // "5~20자 이내로 작성해주세요. (한글, 영문, 특수문자, 숫자 가능)",
          '5~20자 이내 (한글, 영문, 특수문자, 숫자 가능)'
      });
    } else {
      setError({
        ...error,
        nicknameError: null
      });
    }
  };

  const heightValid = height => {
    if (!isHeight(height)) {
      setError({
        ...error,
        heightError: '본인의 키를 입력해주세요!'
      });
    } else {
      setError({
        ...error,
        heightError: null
      });
    }
  };

  const weightValid = weight => {
    if (!isWeight(weight)) {
      setError({
        ...error,
        weightError: '본인의 몸무게를 입력해주세요!'
      });
    } else {
      setError({
        ...error,
        weightError: null
      });
    }
  };

  const onChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const onKeyUp = e => {
    if (e.target.name === 'nickname') {
      nicknameValid(e.target.value);
    }
    if (e.target.name === 'height') heightValid(e.target.value);
    if (e.target.name === 'weight') weightValid(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    const formData = new FormData();

    Object.entries(user).forEach(([key, value]) => {
      if (key === 'dietList') return;
      formData.append(key, value);
    });

    const newFormData = Object.fromEntries(formData.entries());

    editUserInfo(authUser, newFormData);
    dispatch(editUserAction(newFormData));

    history.push('/myPage');
  };

  const goBack = () => {
    history.goBack();
  };

  if (!authUser)
    return (
      <div style={{ fontSize: '3rem', margin: '300px 150px' }}>
        로그인하라~ 이 말입니다. 아시겠어여??????
      </div>
    );

  return (
    <section>
      <Title logoIcon='true'>회원 정보 수정</Title>
      <Setting
        userEmail={user.email}
        userNickname={user.nickname}
        userGender={user.gender}
        userHeight={user.height}
        userWeight={user.weight}
        ErrorMessage={error}
        onChange={onChange}
        onKeyUp={onKeyUp}
        onSubmit={onSubmit}
        goBack={goBack}
        isDisabled={isDisabled}
      />
    </section>
  );
}
