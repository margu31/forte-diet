import MealDialog from "components/MealDialog/MealDialog";
import { Modal } from "components/Modal/Modal";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StyledMealModalContainer } from "./MealModalContainer.styled";

export default function MealModalContainer({ onMealModal }) {
  const { authUser, isAuthed } = useSelector((state) => state.auth);
  const menuList = useSelector((state) => state.menuList);

  const [user, setUser] = useState(authUser);
  const [dialogType, setDialogType] = useState(null);

  useEffect(() => {
    if (isAuthed === true) {
      const menuListData = Object.entries(menuList).map((data) => data[1])[0]
        .meals;
      console.log(menuListData);
    }
  }, []);

  // const onClose = (e) => {};

  // console.log({ closeMealModal });

  return (
    <StyledMealModalContainer>
      <Modal>
        <MealDialog onMealModal={onMealModal}></MealDialog>
      </Modal>
    </StyledMealModalContainer>
  );
}
