import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import HomeHeader from '../components/HomeHeader';
import { NavigationButton } from '../components/NavigationButton';
import type { NavigationConfig } from '../types/navigation';

import 'swiper/css';
import 'swiper/css/pagination';


const Home: React.FC = () => {
  const swiperModules = [Pagination, Autoplay];
  const navigate = useNavigate();

  // 导航按钮配置数据
  const navigationConfigs: NavigationConfig[] = [
    {
      icon: 'fas fa-book-open',
      text: '資源總覽',
      menuItems: [
        {
          id: 'disability-certificate',
          label: '殘疾人士證明',
          contentId: '/resources/disability-certificate',
          description: '殘疾人士證明申請和相關服務'
        },
        {
          id: 'transportation',
          label: '交通出行',
          contentId: '/resources/transportation',
          description: '無障礙交通和出行支援服務'
        },
        {
          id: 'residential-care',
          label: '居住&日間照顧',
          contentId: '/resources/residential-care',
          description: '住宿和日間照顧服務'
        },
        {
          id: 'medical-rehabilitation',
          label: '醫療&復康',
          contentId: '/resources/medical-rehabilitation',
          description: '醫療和復康治療服務'
        },
        {
          id: 'community-support',
          label: '攜手共行',
          contentId: '/resources/community-support',
          description: '社區支援和互助服務'
        },
        {
          id: 'employment-training',
          label: '就業&培訓',
          contentId: '/resources/employment-training',
          description: '就業支援和職業培訓服務'
        }
      ]
    },
    {
      icon: 'fas fa-users',
      text: '關於我們',
      menuItems: [
        {
          id: 'mission',
          label: '項目使命',
          contentId: '/about/mission',
          description: '項目目標和願景介紹'
        },
        {
          id: 'team',
          label: '團隊介紹',
          contentId: '/about/team',
          description: '核心團隊成員信息'
        },
        {
          id: 'partners',
          label: '合作夥伴',
          contentId: '/about/partners',
          description: '協作機構和組織展示'
        },
        {
          id: 'contact',
          label: '聯絡方式',
          contentId: '/about/contact',
          description: '聯繫信息和地址'
        }
      ]
    },
    {
      icon: 'fas fa-download',
      text: '手冊下載',
      menuItems: [
        {
          id: 'patient-guide',
          label: '患者收测',
          contentId: '/download',
          description: '小腦萎縮症患者收测手冊'
        }
      ]
    }
  ];

  // 处理菜单项点击
  const handleItemClick = (item: any) => {
    navigate(item.contentId);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <HomeHeader />

      {/* 页面主要内容容器 */}
      <div className="mx-auto max-w-7xl">
        {/* Navigation */}
        <nav className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 my-8">
          {navigationConfigs.map((config, index) => (
            <NavigationButton
              key={index}
              config={config}
              className=""
              onItemClick={handleItemClick}
            />
          ))}
        </nav>

          {/* Main Content - 只修改橙色背景部分 */}
        <div className="relative flex flex-col lg:flex-row gap-4 lg:gap-8 px-4 lg:px-6 my-6 lg:my-12 items-stretch">
  {/* 左侧黄色板块 - 完全不变（包含所有文字） */}
  <div className="w-full lg:w-2/5 bg-[#FFF2D8] rounded-xl p-3 lg:p-8 z-10">
    <div className="flex justify-start mb-3 lg:mb-8">
      <div className="relative">
        <div className="absolute bg-white rounded-md shadow-md w-full h-full top-2 left-2 sm:top-3 sm:left-3 lg:top-4 lg:left-4"></div>
        <div className="relative z-10 bg-[#ffe8a3] rounded-md px-3 py-2 sm:px-4 sm:py-3 lg:px-5 lg:py-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#a45a52] leading-tight whitespace-nowrap">
            我們的<br/>初心......
          </h2>
        </div>
      </div>
    </div>
    <p className="text-gray-700 leading-relaxed text-base sm:text-xl lg:text-2xl">
      這個網站的誕生，源於我們對小腦萎縮症患者的敬意與關懷。在與患者和家屬的交流中，我們深刻感受到，雖然病的旅程難免孤獨挑戰，但愛與支持讓彼此的腳步不再孤單。我們希望這個網站能像一枚指南針，在你需要時提供一個方向，幫助你找到社區中可依靠的資源與力量。在此，我們懇摯邀請更多同路人加入，互相看見，共同成長！
    </p>
  </div>

  {/* 右侧区域 - 只修改橙色背景 */}
  <div className="w-full lg:w-3/5 relative h-48 lg:h-auto">
    {/* 修改后的橙色背景（向左延伸） */}
    <div className="absolute inset-y-0 bg-[#FFC47E] rounded-xl z-0 h-full" 
         style={{ left: '-50px', right: '0' }} />
    
    {/* 轮播图 - 完全不变 */}
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