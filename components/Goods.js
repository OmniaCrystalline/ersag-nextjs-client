/** @format */

//import dbConnect from "@/lib/mongo/connect";
import React from "react";
import Link from "next/link";
import GalleryTrigger from "./backdrop+modal/GalleryTrigger";
import ErsagProduct from "../lib/mongo/models.products";
import ButtonAdd from "./ButtonAdd";

const Goods = async () => {
  const data = await ErsagProduct.find();
  const newData = data.map((e) => {
    return {
      ...e._doc,
      _id: e._id.toString(),
    };
  });
  const imglist = newData.map((e) => {
    return {
      img: e.img,
      title: e.title,
    };
  });

  return (
    <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-4 max-w-5xl '>
      {newData &&
        newData.length > 0 &&
        newData.map((e) => (
          <div
            key={e._id.toString()}
            className='grid shadow-lg bg-white rounded gap-3 h-auto m-auto w-full p-5 '>
            <h3 className='text-center h-12 font-semibold rounded'>{e.title}</h3>
            <GalleryTrigger img={e.img} imglist={imglist} />
            <p>вага/об`єм: {e.weight} гр/мл</p>
            <p>{e.price} грн</p>
            <div className='flex justify-between align-bottom'>
              <ButtonAdd elem={e} />
              <Link href={`/${e._id}`} className='text-accent2'>
                детальніше...
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Goods;
