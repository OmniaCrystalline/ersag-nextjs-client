/** @format */

import React from "react";
import ErsagProduct from "../../lib/mongo/models.products";
import Image from "next/image";
import dbConnect from "@/lib/mongo/connect";
import ButtonAdd from "@/components/ButtonAdd";

const GoodItem = async ({ params }) => {
  await dbConnect();
  const data = await ErsagProduct.findOne({ _id: params.id });
  const id = data._id.toString();
  const newdata = { ...data };
  const datatopath = { ...newdata._doc, _id: id };
  const { title, img, usage, description, weight, price } = datatopath;

  return (
    <div className='grid container p-3 gap-1 m-auto'>
      <h1 className='w-full text-center font-medium text-accent1'>{title}</h1>
      <div>
        <Image
          src={`/images/${img}`}
          width='150'
          height='200'
          className='w-[150px] h-auto float-left p-3 rounded'
          alt={title}></Image>
        <h3 className='text-accent2'>Метод використання:</h3>
        <p>{usage}</p>
        <h3 className='text-accent2'>Опис:</h3>
        <p>{description}</p>
        <div className='flex gap-3 mt-3'>
          <p>{weight} гр/мл</p>
          <p>{price} грн</p>
          <ButtonAdd elem={datatopath} />
        </div>
      </div>
    </div>
  );
};

export default GoodItem;
