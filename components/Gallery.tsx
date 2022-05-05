import styles from "../styles/Gallery.module.css";
import { useState } from "react";

interface ImageI {
  imageUrl: string;
  text: string;
  vertical?: boolean | undefined;
}

interface Props {
  images: ImageI[];
  currentIndex: number;
  setCurrentIndex: (i: number) => void;
}

interface GalleryModalProps {
  closeModal: (e: any) => void;
  findNext: (e: any) => void;
  findPrev: (e: any) => void;
  hasPrev: boolean;
  openModal: boolean;
  hasNext: boolean;
  image: ImageI;
}

const GalleryModal = (props: GalleryModalProps) => {
  const { openModal, closeModal, hasNext, hasPrev, findNext, findPrev, image } =
    props;
  const { imageUrl, text } = image;
  const handleKeyDown = (e: any) => {
    if (e.keyCode === 27) closeModal(e);
    if (e.keyCode === 37 && hasPrev) findPrev(e);
    if (e.keyCode === 39 && hasNext) findNext(e);
  };
  return (
    <div hidden={!openModal}>
      <div className={styles.modalOverlay} onClick={closeModal}></div>
      <div className={styles.modal}>
        <div className={styles.modalBody}>
          <a
            href="#"
            className={styles.modalClose}
            onClick={closeModal}
            onKeyDown={handleKeyDown}
          >
            &times;
          </a>
          {hasPrev && (
            <a
              href="#"
              className={styles.modalPrev}
              onClick={findPrev}
              onKeyDown={handleKeyDown}
            >
              &lsaquo;
            </a>
          )}
          {hasNext && (
            <a
              href="#"
              className={styles.modalNext}
              onClick={findNext}
              onKeyDown={handleKeyDown}
            >
              &rsaquo;
            </a>
          )}
          <img src={imageUrl} />
        </div>
      </div>
    </div>
  );
};

const Gallery = ({ images, currentIndex, setCurrentIndex }: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const viewPhoto = (idx: number) => {
    setOpenModal(true);
    setCurrentIndex(idx);
  };

  const renderImageContent = (image: ImageI, idx: number) => {
    const { imageUrl } = image;
    return (
      <div
        className={styles.gridItem}
        onClick={(e: any) => {
          viewPhoto(idx);
        }}
        key={idx}
      >
        <img src={imageUrl} />
      </div>
    );
  };

  const closeModal = (e: any) => {
    if (e != undefined) {
      e.preventDefault();
    }

    setOpenModal(false);
  };

  const setNewIndex = (e: any, idx: number) => {
    if (e != undefined) {
      e.preventDefault();
    }

    setCurrentIndex(idx);
  };

  return (
    <div className={styles.container}>
      <div className={styles.galleryContainer}>
        <div className={styles.galleryGrid}>
          {images.map((image, index) => renderImageContent(image, index))}
        </div>
        <GalleryModal
          closeModal={(e: any) => {
            closeModal(e);
          }}
          findPrev={(e: any) => {
            setNewIndex(e, currentIndex - 1);
          }}
          findNext={(e: any) => {
            setNewIndex(e, currentIndex + 1);
          }}
          hasPrev={currentIndex > 0}
          hasNext={currentIndex + 1 < images.length}
          openModal={openModal}
          image={images[currentIndex]}
        />
      </div>
    </div>
  );
};

export default Gallery;
