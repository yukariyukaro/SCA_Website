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

        {/* Main Content */}
        <div className="relative flex flex-col lg:flex-row gap-4 lg:gap-8 px-4 lg:px-6 my-6 lg:my-12 items-stretch">
          {/* Left Column */}
          <div className="w-full lg:w-2/5 bg-[#FFF2D8] rounded-xl p-3 lg:p-8">
            <div className="flex justify-start mb-3 lg:mb-8">
              {/* 重新设计标题区域 */}
              <div className="relative">
                {/* 白色阴影矩形，位于橙色矩形右下方 */}
                <div className="absolute bg-white rounded-md shadow-md w-full h-full top-2 left-2 sm:top-3 sm:left-3 lg:top-4 lg:left-4"></div>
                {/* 橙色矩形，包含文字 */}
                <div className="relative z-10 bg-[#ffe8a3] rounded-md px-3 py-2 sm:px-4 sm:py-3 lg:px-5 lg:py-4">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#a45a52] leading-tight whitespace-nowrap">我們的<br/>初心......</h2>
                </div>
              </div>
            </div>
            {/* 增加移动端字体大小 */}
            <p className="text-gray-700 leading-relaxed text-base sm:text-xl lg:text-2xl">
              這個網站的誕生，源於我們對小腦萎縮症患者的敬意與關懷。在與患者和家屬的交流中，我們深刻感受到，雖然病的旅程難免孤獨挑戰，但愛與支持讓彼此的腳步不再孤單。我們希望這個網站能像一枚指南針，在你需要時提供一個方向，幫助你找到社區中可依靠的資源與力量。在此，我們懇摯邀請更多同路人加入，互相看見，共同成長！
            </p>
          </div>

          {/* Right Column - Image Carousel */}
          <div className="w-full lg:w-3/5 relative h-48 lg:h-auto">
            {/* 背景色块 - 修改为完全匹配左侧高度 */}
            <div className="absolute inset-0 lg:-left-8 bg-[#FFC47E] rounded-xl z-0 h-full"></div>
            {/* 调整Swiper容器位置为完全居中 */}
            <div className="relative z-10 flex items-center justify-center w-full h-full py-3 lg:py-8">
              <div className="w-4/5 h-4/5 flex items-center justify-center">
                <Swiper
                  modules={swiperModules}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 5000 }}
                  className="w-full h-full rounded-xl overflow-hidden shadow-lg"
                >
                  <SwiperSlide>
                    <img
                      src="/img/home/homeSwiper/Photo1.svg"
                      alt="社區支援活動"
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/img/home/homeSwiper/Photo2.svg"
                      alt="專業醫療支援"
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Home; 