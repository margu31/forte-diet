import Input from "components/Input/Input";
import RadioGroup from "components/RadioGroup/RadioGroup";
import StyledDataGroup from "./DataGroup.styled";

const DataGroup = ({ onChange, onBlur, onKeyPress, errorMessage }) => {
  const today = new Date();
  const year = today.getFullYear();
  const getMonth = today.getMonth() + 1;
  const month = getMonth >= 10 ? getMonth : "0" + getMonth;
  const date = today.getDate();

  const maxDate = `${year}-${month}-${date}`;

  return (
    <StyledDataGroup>
      <Input
        type="file"
        id="postingFile"
        name="postingFile"
        label="사진 등록"
        onChange={onChange}
      />
      <div className="collection">
        <Input
          type="date"
          id="postingDate"
          name="date"
          label="Date"
          onChange={onChange}
          max={maxDate}
          value={maxDate.toString()}
        />
        <RadioGroup groupTitle="Type" onChange={onChange} />
        <Input
          type="number"
          id="mealCalories"
          name="calories"
          label="Calories"
          placeholder="칼로리를 입력하세요!"
          onChange={onChange}
          onKeyPress={onKeyPress}
          min="0"
        />
        <Input
          type="text"
          id="mealTitle"
          placeholder="오늘의 메뉴를 입력하세요! (8자 이내)"
          name="title"
          label="Menu"
          onChange={onChange}
          onBlur={onBlur}
          errorMessage={errorMessage}
          autocomplete="off"
          maxLength="8"
        />
      </div>
    </StyledDataGroup>
  );
};

export default DataGroup;
