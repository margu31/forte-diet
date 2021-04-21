import Setting from "components/Setting/Setting";
import Title from "components/Title/Title";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function SettingContainer({ history }) {
  const { authUser } = useSelector((state) => state.auth);
  const [user, setUser] = useState(authUser);
  console.log(authUser);

  // const [inputs, setInputs] = useState({});

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    Object.entries(user).forEach(([key, value]) => {
      formData.append(key, value);
      console.log(`${key}: ${value}`);
    });

    history.push("/myPage");
  };

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
        // userId={authUser.uid}
        onChange={onChange}
        onSubmit={onSubmit}
        goBack={goBack}
      />
    </section>
  );
}
