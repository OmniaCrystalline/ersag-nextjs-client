/** @format */

const BasketHeader = () => {
  return (
    <div className='p-1 grid-cols-2 shadow-lg rounded md:grid-cols-8 gap-1 align-middle hidden md:grid bg-accent1 bg-opacity-80 text-bg'>
      <span className='text-center col-span-2'>назва</span>
      <span className='text-center'>фото</span>
      <span className='text-center'>вага/об`єм</span>
      <span className='text-center'>вартість, грн</span>
      <span className='text-center'>кількість</span>
      <span className='text-center'>сума, грн</span>
      <span className='text-center'>видалити</span>
    </div>
  );
};

export default BasketHeader