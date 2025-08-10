import React from 'react';

const HomeHeader: React.FC = () => {
  return (
    <header className="relative bg-[#FFC47E] overflow-visible">
      <div className="relative mx-auto max-w-7xl flex flex-col items-center py-2 lg:py-4 px-4 lg:px-6">
        <div className="flex items-center justify-center gap-2 lg:gap-3 w-full">
          <img
            src="/img/home/logo.svg"
            alt="logo"
            className="h-12 lg:h-20 w-12 lg:w-20 object-contain rounded-full border-2 lg:border-4 border-white bg-white"
          />
          <h1 className="text-lg lg:text-4xl sm:text-5xl font-bold text-white leading-tight">
            「攜手同行」小腦萎縮症社區資源包
          </h1>
        </div>
        {/* 花朵装饰 */}
        <div className="absolute right-3 lg:right-6 h-full w-20 sm:w-32 md:w-52 lg:w-64">
          <img
            src="/img/home/flower1.svg"
            alt="花朵装饰1"
            className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] lg:w-[73px] lg:h-[73px] absolute -top-3 lg:-top-5 right-[40%] z-10"
          />
          <img
            src="/img/home/flower3.svg"
            alt="花朵装饰3"
            className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] lg:w-[73px] lg:h-[73px] absolute top-[20%] right-0 z-10"
          />
          <img
            src="/img/home/flower2.svg"
            alt="花朵装饰2"
            className="w-[25px] h-[25px] sm:w-[45px] sm:h-[45px] md:w-[55px] md:h-[55px] lg:w-[66px] lg:h-[66px] absolute -bottom-4 lg:-bottom-6 right-[30%] z-10"
          />
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;


