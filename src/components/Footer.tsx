// import React from "react";

// export default function Footer() {
//   return (
//       <footer className="bg-white py-10">
//         <div className="container mx-auto px-6 max-w-5xl">
//         {/* 第一行 */}
//         <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-16 gap-6 lg:gap-0 mb-8">
//           {/* 左侧：策劃及合辦 */}
//           <div className="flex flex-col sm:flex-row lg:flex-shrink-0">
//             <div className="text-gray-800 text-lg font-light mb-2 sm:mb-0 sm:mr-4 min-w-[4em] self-start">
//               策劃及<br />合辦：
//             </div>
//             <div className="flex flex-col sm:flex-row items-start gap-4">
//               <img src="/img/partners/香港復康會.svg" alt="香港復康會" className="h-16 sm:h-20 w-auto object-contain" />
//               <div className="flex flex-col justify-between gap-2">
//                 <div className="flex items-start gap-2">
//                   <img src="/img/partners/生科院3.svg" alt="生科院3" className="h-12 sm:h-14 w-auto object-contain" />
//                   <img src="/img/partners/生科院2.svg" alt="生科院2" className="h-12 sm:h-14 w-auto object-contain" />
//                 </div>
//                 <img src="/img/partners/生科院1.svg" alt="生科院1" className="h-12 sm:h-14 w-auto object-contain" />
//               </div>
//             </div>
//           </div>

//           {/* 右侧：教育夥伴 */}
//           <div className="flex flex-col sm:flex-row items-start lg:flex-shrink-0">
//             <div className="text-gray-800 text-lg font-light mb-2 sm:mb-0 sm:mr-4 min-w-[4em]">
//               教育<br />夥伴：
//             </div>
//             <img src="/img/partners/善衡書院.svg" alt="善衡書院" className="h-16 sm:h-20 w-auto max-w-[200px] sm:max-w-[250px] object-contain" />
//           </div>
//         </div>

//         {/* 第二行 */}
//         <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-16 gap-6 lg:gap-0">
//           {/* 左侧：資助 */}
//           <div className="flex flex-col sm:flex-row items-start lg:flex-shrink-0">
//             <div className="text-gray-800 text-lg font-light mb-2 sm:mb-0 sm:mr-4 min-w-[4em]">
//               資助：
//             </div>
//             <img src="/img/partners/研究及知識轉移處.svg" alt="研究及知識轉移處" className="h-14 sm:h-16 w-auto object-contain" />
//           </div>

//           {/* 右侧：協力 */}
//           <div className="flex flex-col sm:flex-row items-start lg:flex-shrink-0">
//             <div className="text-gray-800 text-lg font-light mb-2 sm:mb-0 sm:mr-4 min-w-[4em]">
//               協力：
//             </div>
//             <img src="/img/partners/小腦萎縮症協會.svg" alt="小腦萎縮症協會" className="h-16 sm:h-20 w-auto max-w-[200px] sm:max-w-[250px] object-contain" />
//           </div>
//         </div>

//         {/* 版权信息 */}
//         <div className="border-t border-gray-200 mt-8 pt-4 text-center">
//           <p className="text-gray-700">&copy; 2024 . All Rights Reserved.</p>
//         </div>
//         </div>
//       </footer>
//   );
// } 
import React from "react";

export default function Footer() {
  return (
    <div className="relative w-full bg-white py-10" id="partners-section">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* 第一行 */}
        <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-16 gap-6 lg:gap-0 mb-8">
          {/* 左侧：策劃及合辦 */}
          <div className="flex flex-col sm:flex-row lg:flex-shrink-0">
            <div className="text-gray-800 text-lg font-light mb-2 sm:mb-0 sm:mr-4 min-w-[4em] self-start">
              策劃及<br />合辦：
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <img 
                src="/img/partners/香港復康會.svg" 
                alt="香港復康會" 
                className="h-[138.564px] w-[355.687px] object-contain" 
              />
              <div className="flex flex-col justify-between gap-2">
                <div className="flex items-start gap-2">
                  <img 
                    src="/img/partners/生科院3.svg" 
                    alt="生科院3" 
                    className="h-[80.829px] w-[92.696px] object-contain" 
                  />
                  <img 
                    src="/img/partners/生科院2.svg" 
                    alt="生科院2" 
                    className="h-[80.829px] w-[225.274px] object-contain" 
                  />
                </div>
                <img 
                  src="/img/partners/生科院1.svg" 
                  alt="生科院1" 
                  className="h-[84.293px] w-[344.439px] object-contain" 
                />
              </div>
            </div>
          </div>

          {/* 右侧：教育夥伴 */}
          <div className="flex flex-col sm:flex-row items-start lg:flex-shrink-0">
            <div className="text-gray-800 text-lg font-light mb-2 sm:mb-0 sm:mr-4 min-w-[4em]">
              教育<br />夥伴：
            </div>
            <img 
              src="/img/partners/善衡書院.svg" 
              alt="善衡書院" 
              className="h-[118.934px] w-[367.195px] object-contain" 
            />
          </div>
        </div>

        {/* 第二行 */}
        <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-16 gap-6 lg:gap-0">
          {/* 左侧：資助 */}
          <div className="flex flex-col sm:flex-row items-start lg:flex-shrink-0">
            <div className="text-gray-800 text-lg font-light mb-2 sm:mb-0 sm:mr-4 min-w-[4em]">
              資助：
            </div>
            <img 
              src="/img/partners/研究及知識轉移處.svg" 
              alt="研究及知識轉移處" 
              className="h-[110.851px] w-[365.809px] object-contain" 
            />
          </div>

          {/* 右侧：協力 */}
          <div className="flex flex-col sm:flex-row items-start lg:flex-shrink-0">
            <div className="text-gray-800 text-lg font-light mb-2 sm:mb-0 sm:mr-4 min-w-[4em]">
              協力：
            </div>
            <img 
              src="/img/partners/小腦萎縮症協會.svg" 
              alt="小腦萎縮症協會" 
              className="h-[173.205px] w-[273.322px] object-contain" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
