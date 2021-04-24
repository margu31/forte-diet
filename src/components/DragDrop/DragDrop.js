import {
  StyledDefaultView,
  StyledFileWrapper,
  StyledHoverView,
} from "./DragDrop.styled";
// import { ReactComponent as Picture } from "assets/icons/InputIcons/picture.svg";
import { ReactComponent as Photo } from "assets/icons/InputIcons/photo.svg";
import { ReactComponent as Upload } from "assets/icons/InputIcons/framing.svg";
import { useRef, useState } from "react";

const DragDrop = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadedFile, setLoadedFile] = useState(false);

  const imgRef = useRef();

  const onDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // console.log("Drag Enter");
  };

  const onDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // console.log("Drag Over");
    setIsDragging(true);
  };

  const onDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // console.log("Drag Leave");
    setIsDragging(false);
  };

  const onDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // console.log("Drop");
    setIsLoaded(true);
    setIsDragging(false);
    // console.log(e.dataTransfer.files);
    const file = e.dataTransfer.files;
    // console.log(file);

    const reader = new FileReader();

    reader.onload = (e) => {
      // console.log(e.target.result);
      imgRef.current.src = e.target.result;
    };

    reader.readAsDataURL(file[0]);
  };

  const onDragEnd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const onChangeFile = (e) => {
    // console.log(e.target);
    // console.log("change");
    setLoadedFile(true);
    console.log(e.target.files);
    console.log(e.target.files[0]);
    // console.log(e.target.files[0].name);
    // console.log(imgRef.current);

    const reader = new FileReader();

    reader.onload = (e) => {
      imgRef.current.src = e.target.result;
      // console.log("result: ", e.target.result);
    };

    reader.readAsDataURL(e.target.files[0]);
  };

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
      {/* <img src="" alt="" ref={imgRef} /> */}
      {(isLoaded && !isDragging) || (loadedFile && !isDragging) ? (
        <img src="" alt="" ref={imgRef} />
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
