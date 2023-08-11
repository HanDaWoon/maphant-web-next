import Image from "next/image";
import React, { useRef,useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

import styles from "./ImgList.module.css";

type ImgType = {
  url: string;
  index: number;
};
type fileListType = {
  imgFile: File[];
  imgURL: string[];
};

const ImgList = () => {
  const [fileList, setFileList] = useState<fileListType>();
  const fileRef = useRef<HTMLInputElement>(null);
  const uploadBtnRef = useRef<HTMLButtonElement>(null);


  const uploadEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const URLArray = Array.from(files, (file) =>
        window.URL.createObjectURL(file)
      );
      if (fileList) {
        setFileList({
          imgFile: [...fileList.imgFile, ...files],
          imgURL: [...fileList.imgURL, ...URLArray],
        });
      } else {
        setFileList({
          imgFile: files,
          imgURL: URLArray,
        });
      }
    }
  };

  const uploadBtnEvent = () => {
    if (fileList) {
      if (fileList.imgFile.length >= 5)
        alert("사진은 최대 5개까지 등록 할 수 있습니다.");
      else fileRef.current?.click();
    } else fileRef.current?.click();
  };

  const imgDel = (index: number, url: string) => {
    if (fileList) {
      setFileList({
        imgFile: fileList.imgFile.filter((_, i) => {
          return i != index;
        }),
        imgURL: fileList.imgURL.filter((i) => {
          return i !== url;
        }),
      });
    }
  };

  const Imgs = ({ url, index }: ImgType) => {
    return (
      <div className={styles.imgItem} onClick={(e) => imgDel(index, url)}>
        <Image src={url} alt="" fill />
        <IoMdCloseCircleOutline className={styles.delBtn} size="1.5rem" />
      </div>
    );
  };

//--------렌더링 될 때마다 파일 5개넘는지 체크 
  if (fileList && fileList.imgFile.length > 5) {
    setFileList({
      imgFile: fileList.imgFile.slice(0, 5),
      imgURL: fileList.imgURL.slice(0, 5),
    });
  }

  return (
    <div className={styles.imgListBox}>
      <button
        ref={uploadBtnRef}
        className={styles.imgUploadBtn}
        onClick={uploadBtnEvent}
      >
        +
      </button>
      {fileList &&
        fileList?.imgURL.map((url, i) => <Imgs url={url} index={i} key={i} />)}
      <input
        type="file"
        ref={fileRef}
        style={{ display: "none" }}
        onChange={uploadEvent}
        multiple
        accept="image/*"
      />
    </div>
  );
};

export default ImgList;