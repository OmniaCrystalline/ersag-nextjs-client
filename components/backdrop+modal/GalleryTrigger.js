'use client'
import React, {useState} from 'react'
import GalleryModal from './GalleryModal';
import Image from 'next/image';

const GalleryTrigger = ({ img, imglist }) => {
  const [modal, setmodal] = useState(false);
    const handleClick = () => {
      setmodal(!modal);
    };
  return (
    <>
      {modal && (
        <GalleryModal
          img={img}
          setmodal={setmodal}
          modal={modal}
          imglist={imglist}
        />
      )}
      <button
        onClick={handleClick}
        className='container md:h-auto md:overflow-hidden w-full '>
        <Image
          src={`/images/${img}`}
          alt={img}
          width={200}
          height={300}
          className='rounded m-auto w-auto h-auto'
          placeholder='empty'></Image>
      </button>
    </>
  );
}

export default GalleryTrigger;




