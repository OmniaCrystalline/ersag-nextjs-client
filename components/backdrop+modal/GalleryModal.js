/** @format */

"use client";
import React, { useState } from "react";
import { GoEyeClosed } from "react-icons/go";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import BlurImage from "./BlurImage";

const GalleryModal = ({ img, setmodal, modal, imglist }) => {
  const [current, setcurrent] = useState(imglist.find((e) => e.img === img));

  const handleBackdrop = (event) => {
    if (event.currentTarget === event.target) setmodal(!modal);
  };

  const handleChange = (event) => {
    const index = imglist.findIndex((e) => e.img === current.img);
    const btnClicked = event.currentTarget.classList.value;
    if (btnClicked === "next")
      index < imglist.length - 1
        ? setcurrent({ ...imglist[index + 1] })
        : setcurrent({ ...imglist[0] });

    if (btnClicked === "previous")
      index > 0
        ? setcurrent(imglist[index - 1])
        : setcurrent(imglist[imglist.length - 1]);
  };

  return (
    <div className='dropdown-backdrop' onClick={handleBackdrop}>
      <button
        type='button'
        onClick={() => setmodal(!modal)}
        className='text-white p-2'>
        <GoEyeClosed className="text-bg"/>
      </button>
      <div className='slide'>
        <BlurImage image={`/images/${current.img}`}></BlurImage>
        <p className='text-bg text-center mt-2 text-lg'>{current.title}</p>``
      </div>
      <button type='button' onClick={handleChange} className='next'>
        <IoIosArrowForward className='text-bg' />
      </button>
      <button type='button' onClick={handleChange} className='previous'>
        <IoIosArrowBack className='text-bg' />
      </button>
    </div>
  );
};

export default GalleryModal;
