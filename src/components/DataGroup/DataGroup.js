import DragDrop from 'components/DragDrop/DragDrop';
import Input from 'components/Input/Input';
import RadioGroup from 'components/RadioGroup/RadioGroup';
import StyledDataGroup from './DataGroup.styled';

const DataGroup = ({
  onChange,
  onBlur,
  onKeyPress,
  errorMessage,
  maxDate,
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
  fileRef
}) => {
  // const today = new Date();
  // const year = today.getFullYear();
  // const getMonth = today.getMonth() + 1;
  // const month = getMonth >= 10 ? getMonth : "0" + getMonth;
  // const date = today.getDate();

  // const maxDate = `${year}-${month}-${date}`;

  return (
    <StyledDataGroup>
      {/* <Input
        type="file"
        id="postingFile"
        name="postingFile"
        label="사진 등록"
        accept="image/*"
        onChange={onChange}
      /> */}
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
      />
      <div className='collection'>
        <Input
          type='date'
          id='postingDate'
          name='date'
          label='Date'
          onChange={onChange}
          max={maxDate}
          defaultValue={maxDate.toString()}
        />
        <RadioGroup groupTitle='Type' onChange={onChange} />
        <Input
          type='number'
          id='mealCalories'
          name='calories'
          label='Calories'
          placeholder='칼로리를 입력하세요!'
          onChange={onChange}
          onKeyPress={onKeyPress}
          min='0'
        />
        <Input
          type='text'
          id='mealTitle'
          placeholder='오늘의 메뉴를 입력하세요! (10자 이내)'
          name='title'
          label='Menu'
          onChange={onChange}
          // onBlur={onBlur}
          onKeyUp={onKeyUp}
          errorMessage={errorMessage}
          maxLength='10'
        />
      </div>
    </StyledDataGroup>
  );
};

export default DataGroup;
