import {
  StyledDefaultView,
  StyledFileWrapper,
  StyledHoverView,
} from "./DragDrop.styled";
// import { ReactComponent as Picture } from "assets/icons/InputIcons/picture.svg";
import { ReactComponent as Photo } from "assets/icons/InputIcons/photo.svg";
import { ReactComponent as Upload } from "assets/icons/InputIcons/framing.svg";
import { useState } from "react";

const DragDrop = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadedFile, setLoadedFile] = useState(false);

  const onDragEnter = (e) => {
    e.preventDefault();
    console.log("Drag Enter");
  };

  const onDragOver = (e) => {
    e.preventDefault();
    console.log("Drag Over");
    setIsDragging(true);
  };

  const onDragLeave = (e) => {
    e.preventDefault();
    console.log("Drag Leave");
    setIsDragging(false);
  };

  const onDrop = (e) => {
    e.preventDefault();
    console.log("Drop");
    setIsLoaded(true);
    setIsDragging(false);
  };

  const onChangeFile = (e) => {
    console.log(e.target);
    setLoadedFile(true);
  };

  return (
    <StyledFileWrapper
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <label htmlFor="fileUpload">사진 업로드</label>
      <input type="file" id="fileUpload" name="photo" onChange={onChangeFile} />
      {(isLoaded && !isDragging) || loadedFile ? (
        <img src="/peaches-1522680_1920.jpg" alt="" />
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
