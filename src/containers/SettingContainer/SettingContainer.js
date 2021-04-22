import Setting from "components/Setting/Setting";
import Title from "components/Title/Title";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUserInfo } from "api/firestore";
import { editUserAction } from "redux/modules/auth/auth";
import {
  isHeight,
  isNickname,
  isWeight,
} from "utils/validation/SignUpValidation";

const initialError = {
  nicknameError: null,
  heightError: null,
  weightError: null,
};

export default function SettingContainer({ history }) {
  const { authUser } = useSelector((state) => state.auth);
  const [user, setUser] = useState(authUser);
  const dispatch = useDispatch();
  // console.log(authUser);

  const [error, setError] = useState(initialError);

  const nicknameValid = (nickname) => {
    if (!isNickname(nickname)) {
      setError({
        ...error,
        nicknameError:
          "5자 이상, 20자 미만으로 작성해주세요. (한글, 영문, 특수문자, 숫자 가능)",
      });
    } else {
      setError({
        ...error,
        nicknameError: null,
      });
    }
  };

  const heightValid = (height) => {
    if (!isHeight(height)) {
      setError({
        ...error,
        heightError: "본인의 키를 입력해주세요!",
      });
    } else {
      setError({
        ...error,
        heightError: null,
      });
    }
  };

  const weightValid = (weight) => {
    if (!isWeight(weight)) {
      setError({
        ...error,
        weightError: "본인의 몸무게를 입력해주세요!",
      });
    } else {
      setError({
        ...error,
        weightError: null,
      });
    }
  };

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onKeyUp = (e) => {
    if (e.target.name === "nickname") {
      nicknameValid(e.target.value);
    }
    if (e.target.name === "height") heightValid(e.target.value);
    if (e.target.name === "weight") weightValid(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    Object.entries(user).forEach(([key, value]) => {
      formData.append(key, value);
      console.log(`${key}: ${value}`);
    });

    const newFormData = Object.fromEntries(formData.entries());
    console.log(newFormData);

    // editUserInfo(authUser, newFormData);
    // dispatch(editUserAction(newFormData));

    // history.push("/myPage");
  };

  const isDisabled =
    !user.nickname ||
    !user.height ||
    !user.weight ||
    error.nicknameError ||
    error.heightError ||
    error.weightError;

  const goBack = () => {
    history.goBack();
  };

  if (!authUser)
    return (
      <div style={{ fontSize: "3rem", margin: "300px 150px" }}>
        로그인하라~ 이 말입니다. 아시겠어여??????
      </div>
    );

  return (
    <section>
      <Title logoIcon="true">회원 정보 수정</Title>
      <Setting
        userEmail={authUser.email}
        userNickname={authUser.nickname}
        userGender={authUser.gender}
        userHeight={authUser.height}
        userWeight={authUser.weight}
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
