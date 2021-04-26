import {
  StyledDefaultView,
  StyledFileWrapper,
  StyledHoverView,
} from "./DragDrop.styled";
// import { ReactComponent as Picture } from "assets/icons/InputIcons/picture.svg";
import { ReactComponent as Photo } from "assets/icons/InputIcons/photo.svg";
import { ReactComponent as Upload } from "assets/icons/InputIcons/framing.svg";

const DragDrop = ({
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
  canvasRef,
}) => {
  return (
    <StyledFileWrapper
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      onDragEnd={onDragEnd}
    >
      <label htmlFor="fileUpload">사진 업로드</label>
      <input
        type="file"
        id="fileUpload"
        name="photo"
        accept="image/*"
        onChange={onChangeFile}
      />
      {(isLoaded && !isDragging) || (loadedFile && !isDragging) ? (
        <>
          <img src="" alt="" ref={imgRef} />
          <canvas ref={canvasRef}></canvas>
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
