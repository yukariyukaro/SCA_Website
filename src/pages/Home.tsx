import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

// 导入花朵SVG图片

import 'swiper/css';
import 'swiper/css/pagination';


const Home: React.FC = () => {
  const swiperModules = [Pagination, Autoplay];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header，设置为100%宽度 */}
      <header className="relative bg-[#FFC47E] overflow-visible">
        <div className="relative mx-auto max-w-7xl flex flex-col items-center py-2 lg:py-4 px-4 lg:px-6">
          <div className="flex items-center justify-center gap-2 lg:gap-3 w-full">
            <img src="/img/home/logo.svg" alt="logo" className="h-12 lg:h-20 w-12 lg:w-20 object-contain rounded-full border-2 lg:border-4 border-white bg-white" />
            <h1 className="text-lg lg:text-4xl sm:text-5xl font-bold text-white leading-tight">「攜手同行」小腦萎縮症社區資源包</h1>
          </div>
          {/* 花朵装饰 - 恢复其位置 */}
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

      {/* 页面主要内容容器 */}
      <div className="mx-auto max-w-7xl">
        {/* Navigation */}
        <nav className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 my-8">
          {[
            { icon: 'fas fa-book-open', text: '資源總覽', path: '/resources' },
            { icon: 'fas fa-users', text: '關於我們', path: '/about' },
            { icon: 'fas fa-download', text: '手冊下載', path: '/download' }
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 bg-[#FFB876] text-white rounded-full hover:bg-[#FF9F4D] transition-colors duration-300 !rounded-button whitespace-nowrap text-lg sm:text-xl md:text-2xl font-semibold shadow-lg min-w-[140px] sm:min-w-[160px] md:min-w-[180px] min-h-[48px] sm:min-h-[56px] md:min-h-[64px]"
            >
              <i className={`${item.icon} text-xl sm:text-2xl md:text-3xl`}></i>
              <span>{item.text}</span>
            </Link>
          ))}
        </nav>

          {/* Main Content - 只修改橙色背景部分 */}
        <div className="relative flex flex-col lg:flex-row gap-4 lg:gap-8 px-4 lg:px-6 my-6 lg:my-12 items-stretch">
          {/* Left Column - 完全不变 */}
          <div className="w-full lg:w-2/5 bg-[#FFF2D8] rounded-xl p-3 lg:p-8">
            {/* ... 原有左侧内容代码 ... */}
          </div>

          {/* Right Column - 只修改橙色背景 */}
          <div className="w-full lg:w-3/5 relative h-48 lg:h-auto">
            {/* 修改橙色背景宽度 */}
            <div 
              className="absolute inset-y-0 bg-[#FFC47E] rounded-xl z-0 h-full"
              style={{
                left: 'calc(50% - 50vw + 1rem)',
                right: 'calc(50% - 50vw + 1rem)'
              }}
            />
            
            {/* 轮播图部分 - 完全不变 */}
            <div className="relative z-10 flex items-center justify-center w-full h-full py-3 lg:py-8">
              <div className="w-4/5 h-4/5 flex items-center justify-center">
                <Swiper
                  modules={swiperModules}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 5000 }}
                  className="w-full h-full rounded-xl overflow-hidden shadow-lg"
                >
                  {/* ... 原有轮播图代码 ... */}
                </Swiper>
              </div>
            </div>
          </div>
        </div>

        {/* Footer部分 - 完全不变 */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;