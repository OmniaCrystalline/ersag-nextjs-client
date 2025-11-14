'use client'
import React from 'react'
import Image from 'next/image';

const Modal = ({ img, setmodal, modal }) => {
    return (
      <div className='dropdown-backdrop' onClick={()=>setmodal(!modal)}>
        <button type='button' onClick={() => setmodal(!modal)} className='text-white'>
          X
        </button>
        <Image
          src={`/images/${img}`}
          alt={img}
          width='300'
          height='400'
          className='slide'
        />
      </div>
    );
}

export default Modal
