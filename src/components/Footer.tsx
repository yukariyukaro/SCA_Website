import React from "react";

export default function Footer() {
  return (
    <div className="w-full py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
          {/* 第一行：策劃及合辦 + 教育夥伴 */}
          <div className="flex flex-col lg:flex-row justify-between items-start mb-8 md:mb-12">
            
            {/* 策劃及合辦 */}
            <div className="flex flex-col md:flex-row items-start mb-6 md:mb-0 lg:w-[45%]">
              <div className="text-gray-800 text-base md:text-lg font-light mb-3 md:mb-0 md:mr-4 min-w-[5em]">
                策劃及合辦：
              </div>
              <div className="flex flex-col w-full space-y-4"> {/* 增加垂直间距 */}
                <div>
                  <img 
                    src="/img/partners/香港復康會.svg" 
                    alt="香港復康會" 
                    className="w-full max-w-[260px] md:max-w-[300px] h-auto"
                  />
                </div>
                <div className="flex flex-col space-y-4"> {/* 确保垂直排列时不重叠 */}
                  <div className="flex flex-wrap gap-4"> {/* 使用flex-wrap和gap确保不重叠 */}
                    <img 
                      src="/img/partners/生科院3.svg" 
                      alt="生科院3" 
                      className="w-[65px] md:w-[75px] h-auto"
                    />
                    <img 
                      src="/img/partners/生科院2.svg" 
                      alt="生科院2" 
                      className="w-[160px] md:w-[180px] h-auto"
                    />
                  </div>
                  <img 
                    src="/img/partners/生科院1.svg" 
                    alt="生科院1" 
                    className="w-[250px] md:w-[280px] h-auto"
                  />
                </div>
              </div>
            </div>

            {/* 教育夥伴 */}
            <div className="flex flex-col md:flex-row items-start lg:w-[45%] ml-4 md:ml-8 lg:ml-12">
              <div className="text-gray-800 text-base md:text-lg font-light mb-3 md:mb-0 md:mr-4 min-w-[5em]">
                教育夥伴：
              </div>
              <img 
                src="/img/partners/善衡書院.svg" 
                alt="善衡書院" 
                className="w-full max-w-[270px] md:w-[310px] h-auto"
              />
            </div>
          </div>

          {/* 第二行：資助 + 協力 */}
          <div className="flex flex-col lg:flex-row justify-between items-start">
            
            {/* 資助 */}
            <div className="flex flex-col md:flex-row items-start mb-6 md:mb-0 lg:w-[45%]">
              <div className="text-gray-800 text-base md:text-lg font-light mb-3 md:mb-0 md:mr-4 min-w-[5em]">
                資助：
              </div>
              <img 
                src="/img/partners/研究及知識轉移處.svg" 
                alt="研究及知識轉移處" 
                className="w-full max-w-[270px] md:max-w-[310px] h-auto"
              />
            </div>

            {/* 協力 */}
            <div className="flex flex-col md:flex-row items-start lg:w-[45%] ml-4 md:ml-8 lg:ml-12">
              <div className="text-gray-800 text-base md:text-lg font-light mb-3 md:mb-0 md:mr-4 min-w-[5em]">
                協力：
              </div>
              <img 
                src="/img/partners/小腦萎縮症協會.svg" 
                alt="小腦萎縮症協會" 
                className="w-full max-w-[200px] md:max-w-[230px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}