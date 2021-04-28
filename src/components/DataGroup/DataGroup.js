import DragDrop from "components/DragDrop/DragDrop";
import Input from "components/Input/Input";
import RadioGroup from "components/RadioGroup/RadioGroup";
import { useRef } from "react";
import StyledDataGroup from "./DataGroup.styled";

const DataGroup = ({
  onChange,
  onKeyPress,
  errorMessage,
  maxDate,
  isEditing,
  defaultDate,
  defaultUrl,
  defaultType,
  defaultCalories,
  defaultTitle,
  onKeyUp,
  onDragEnd,
  onDragEnter,
  onDragLeave,
  onDragOver,
  onDrop,
  onChangeFile,
  isLoaded,
  isDragging,
  loadedFile,
  imgRef,
  fileRef,
}) => {
  const inputNextRadioRef = useRef();
  const onMoveNextInput = (e) => {
    if (e.keyCode === 13) {
      e.stopPropagation();
      e.target.click();
      inputNextRadioRef.current.focus();
    }
  };

  return (
    <StyledDataGroup>
      <DragDrop
        onDragEnter={onDragEnter}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        onDragEnd={onDragEnd}
        onChangeFile={onChangeFile}
        isLoaded={isLoaded}
        isDragging={isDragging}
        loadedFile={loadedFile}
        imgRef={imgRef}
        fileRef={fileRef}
        defaultUrl={isEditing ? defaultUrl : null}
      />
      <div className="collection">
        <Input
          type="date"
          id="postingDate"
          name="date"
          label="Date"
          onChange={onChange}
          max={maxDate}
          defaultValue={isEditing ? defaultDate : maxDate.toString()}
          disabled={isEditing ? "disabled" : null}
        />
        <RadioGroup
          groupTitle="Type"
          onChange={onChange}
          isEditing={isEditing}
          defaultType={isEditing ? defaultType : null}
          onMoveNextInput={onMoveNextInput}
        />
        <Input
          type="number"
          id="mealCalories"
          name="calories"
          label="Calories"
          placeholder="칼로리를 입력하세요!"
          onChange={onChange}
          onKeyPress={onKeyPress}
          min="0"
          value={isEditing ? defaultCalories : null}
          ref={inputNextRadioRef}
        />
        <Input
          type="text"
          id="mealTitle"
          placeholder="오늘의 메뉴를 입력하세요! (10자 이내)"
          name="title"
          label="Menu"
          onChange={onChange}
          onKeyUp={onKeyUp}
          errorMessage={errorMessage}
          maxLength="10"
          defaultValue={isEditing ? defaultTitle : null}
        />
      </div>
    </StyledDataGroup>
  );
};

export default DataGroup;
