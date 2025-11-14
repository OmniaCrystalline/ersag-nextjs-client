'use client'
import React, {useState} from 'react'
import Image from 'next/image';
import Modal from './ModalProduct';

const ImageTrigger = ({ img }) => {
    const [modal, setmodal] = useState(false)

    const handleClick = () => {
        setmodal(!modal)
    }

  return (
    <>
      {modal && <Modal img={img} setmodal={setmodal} modal={modal} />}
      <button onClick={handleClick} className='w-full md:float-left md:w-1/3'>
        <Image
          src={`/images/${img}`}
          width='300'
          height='400'
          alt='product'
          className='float-left p-3 w-full'
        />
      </button>
    </>
  );
}

export default ImageTrigger
