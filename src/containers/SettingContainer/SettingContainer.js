import Setting from "components/Setting/Setting";
import Title from "components/Title/Title";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function SettingContainer({ history }) {
  const { authUser } = useSelector((state) => state.auth);
  const [user, setUser] = useState(authUser);
  console.log(authUser);

  const goBack = () => {
    history.goBack();
  };

  return (
    <section>
      <Title logoIcon="true">회원 정보 수정</Title>
      <Setting
        // userEmail={authUser.email}
        // userNickname={authUser.nickname}
        // userGender={authUser.gender}
        // userHeight={authUser.height}
        // userWeight={authUser.weight}
        userId={authUser.uid}
        goBack={goBack}
      />
    </section>
  );
}
