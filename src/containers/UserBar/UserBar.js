import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth as Auth, createOrGetAuthUser, handleSignOut } from '../../api/auth';
import UserNavigation from 'components/UserNavigation/UserNavigation';
import { signInAction, signOutAction } from 'redux/modules/auth/auth';

export default function UserBar() {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  // 인증 상태 감지 이벤트
  React.useEffect(() => {
    // 이벤츠 해제 함수 참조
    const unsubscribe = Auth.onAuthStateChanged(async currentUser => {
      if (currentUser) {
        const userRef = await createOrGetAuthUser(currentUser);

        userRef.onSnapshot(
          snapshot => {
            dispatch(
              signInAction({
                uid: snapshot.id,
                ...snapshot.data()
                /* email: snapshot.email,
              displayName: snapshot.name, */
              })
            );
          },
          // 참고: https://firebase.google.com/docs/firestore/query-data/listen#handle_listen_errors
          error => console.error(error.message)
        );
      } else {
        signOutAction();
      }
    });
    // 클린업
    return () => unsubscribe();
  }, []);

  const onSignOut = () => {
    dispatch(handleSignOut(signOutAction));
  };

  return <UserNavigation auth={auth} onSignOut={onSignOut} />;
}
