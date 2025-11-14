/** @format */
import { useState } from "react";
import Image from "next/image";

export default function BlurImage({ image }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <a href={image.href} className='group '>
      <div className='overflow-hidden rounded-lg bg-gray-200 h-[90%]'>
        <Image
          alt={image}
          src={image}
          width={200}
          height={300}
          className={`
              duration-7 ease-in-out group-hover:opacity-75 h-full w-auto m-auto
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale z-0"
                  : "scale-100 blur-0 grayscale-0 z-0"
              })`}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
    </a>
  );
}
