/** @format */
import Image from "next/image";

const BasketItem = ({ e, handledelete, handlequantity }) => {
  return (
    <>
      {handledelete && handlequantity && (
        <div
          key={e._id}
          className='grid grid-cols-2 shadow-md rounded md:grid-cols-8 align-middle p-2 gap-2'>
          <h3 className='text-center m-auto bg-opacity-30 rounded p-1 col-span-2 font-medium text-accent2'>
            {e.title}
          </h3>
          <div className='container grid md:overflow-hidden justify-center h-full'>
            <Image
              width='50'
              height='100'
              src={`/images/${e.img}`}
              alt={e.title}
              className='rounded m-auto h-[50px] w-auto'
            />
          </div>
          <p className='text-center m-auto'>
            {e.weight}
            <span className='md:hidden'>гр/мл</span>
          </p>
          <p className='m-auto'>
            <span className='md:hidden'>вартість: </span>
            {e.price} <span className='md:hidden'>грн</span>
          </p>
          <input
            type='number'
            placeholder={e.quantity}
            className='w-full h-10 m-auto p-3 text-center border-accent2 border-2 rounded outline-none focus:border-4'
            onChange={(event) =>
              handlequantity(event.currentTarget.value, e._id)
            }></input>
          <p className='m-auto'>
            <span className='md:hidden'>сума: </span>
            {e.quantity * e.price}
            <span className='md:hidden'>грн</span>
          </p>
          <button
            type='button'
            className='m-auto px-3'
            onClick={() => handledelete(e._id)}>
            x
          </button>
        </div>
      )}
    </>
  );
};

export default BasketItem;
