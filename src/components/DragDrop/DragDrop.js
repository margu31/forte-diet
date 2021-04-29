import { StyledDefaultView, StyledFileWrapper, StyledHoverView } from './DragDrop.styled';
import { ReactComponent as Photo } from 'assets/icons/InputIcons/photo.svg';
import { ReactComponent as Upload } from 'assets/icons/InputIcons/framing.svg';

const DragDrop = ({
  defaultUrl,
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
  return (
    <StyledFileWrapper
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      onDragEnd={onDragEnd}
    >
      <label htmlFor='fileUpload'>사진 업로드</label>
      <input
        type='file'
        id='fileUpload'
        name='photo'
        accept='image/*'
        onChange={onChangeFile}
        ref={fileRef}
      />
      {(isLoaded && !isDragging) || (loadedFile && !isDragging) || defaultUrl ? (
        <>
          <img src={defaultUrl} alt='' ref={imgRef} />
        </>
      ) : null}
      <StyledDefaultView>
        {/* <Picture /> */}
        <Photo />
        <p>사진 등록</p>
      </StyledDefaultView>
      {isDragging ? (
        <StyledHoverView>
          <Upload />
          <p>여기에 사진을 드래그 해주세요!</p>
        </StyledHoverView>
      ) : null}
    </StyledFileWrapper>
  );
};

export default DragDrop;
