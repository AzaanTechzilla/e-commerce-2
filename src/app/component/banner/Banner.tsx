'use client'
import H1 from "../typography/H1";
import H6 from "../typography/H6";
import Para from "../typography/Para";
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
// import { increment, decrement, incrementByAmount } from '../../redux/slices/counter/CounterSlice';
export default function Banner() {
  return (
    <>
      <div className="banner-content flex items-start flex-col gap-[1rem] md:gap-[10rem] sm:gap-[0rem]  lg:gap-[14rem]">
        <div className="left-content  mx-3">
          <H1
            title="Step-up Your Stride"
            className=" text-2xl text-black mb-2 sm:text-4xl sm:mb-4 md:text-6xl md:mb-8 lg:text-8xl lg:mb-12 font-semibold"
          />
          <Para
            title="Premium Athletic Footwear"
            className="text-sm mb-2 text-black sm:text-md sm:mb-2 md:text-lg md:mb-2 lg:text-2xl lg:mb-3"
          />
          <button className="uppercase flex self-start bg-black px-3 py-2 text-sm sm:text-md font-bold text-[rgb(254,199,79)] sm:px-4 sm:py-2 rounded-full">
            shop now
          </button>
        </div>
        <div className="rightbox max-w-[450px] flex border-[1px] rounded-xl bg-white p-3 self-end flex-row mx-3 gap-5">
          <div className="basis-[70%]">
            <figure className="">
              <img
                src="/assets/image/bannershoes.webp"
                alt="shoes"
                className="w-full h-auto"
              />
            </figure>
          </div>
          <div className="basis-[30%] flex flex-col justify-between items-center">
            <div className="">
              <H6 title="Marathon Master" className="text-lg text-black font-bold mb-3" />
              <Para title="$140.00" className="text-black text-sm" />
            </div>
            <button className="uppercase border-[1px] text-black border-black rounded-full px-2 py-1 text-sm ">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
