import React from 'react';

const HomeHeader: React.FC = () => {
  return (
    <header className="relative bg-[#FFC47E] overflow-visible">
      <div className="relative flex flex-col py-2 lg:py-4 px-4 lg:px-6">
        <div className="flex items-start justify-start gap-2 lg:gap-3 w-full">
          <img
            src="/img/home/logo.svg"
            alt="logo"
            className="h-10 lg:h-16 w-10 lg:w-16 object-contain rounded-full border-2 lg:border-3 border-white bg-white"
          />
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight" style={{fontFamily: 'Source Han Serif TW, serif'}}>
            「攜手同行」小腦萎縮症社區資源包
          </h1>
        </div>
        {/* 花朵装饰 */}
        <div className="absolute right-3 lg:right-6 h-full w-16 sm:w-24 md:w-40 lg:w-48">
          <img
            src="/img/home/flower1.svg"
            alt="花朵装饰1"
            className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[48px] md:h-[48px] lg:w-[58px] lg:h-[58px] absolute -top-2 lg:-top-4 right-[40%] z-10"
          />
          <img
            src="/img/home/flower3.svg"
            alt="花朵装饰3"
            className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[48px] md:h-[48px] lg:w-[58px] lg:h-[58px] absolute top-[20%] right-0 z-10"
          />
          <img
            src="/img/home/flower2.svg"
            alt="花朵装饰2"
            className="w-[30px] h-[30px] sm:w-[36px] sm:h-[36px] md:w-[44px] md:h-[44px] lg:w-[52px] lg:h-[52px] absolute -bottom-3 lg:-bottom-5 right-[30%] z-10"
          />
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;


