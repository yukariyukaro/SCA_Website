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
    <div className="relative w-full h-[377px] bg-white" id="partners-section">
      {/* 背景底色 */}
      <div className="absolute bg-white h-full w-full" />
      
      {/* 香港復康會 */}
      <div className="absolute h-[138.564px] left-[220.18px] top-[30.72px] w-[355.687px]">
        <img src="/img/partners/香港復康會.svg" alt="香港復康會" className="w-full h-full object-contain" />
      </div>
      
      {/* 生科院1 */}
      <div className="absolute h-[84.293px] left-[648.64px] top-[94.35px] w-[344.439px]">
        <img src="/img/partners/生科院1.svg" alt="生科院1" className="w-full h-full object-contain" />
      </div>
      
      {/* 生科院2 */}
      <div className="absolute h-[80.829px] left-[759.42px] top-[34.59px] w-[225.274px]">
        <img src="/img/partners/生科院2.svg" alt="生科院1" className="w-full h-full object-contain" />
" alt="生科院2" className="w-full h-full object-contain" />
      </div>
      
      {/* 生科院3 */}
      <div className="absolute h-[80.829px] left-[651.84px] top-[34.59px] w-[92.696px]">
        <img src="/img/partners/生科院3.svg" alt="生科院3" className="w-full h-full object-contain" />
      </div>
      
      {/* 善衡書院 */}
      <div className="absolute h-[118.934px] left-[1470.4px] top-[27.03px] w-[367.195px]">
        <img src="/img/partners/善衡書院.svg" alt="善衡書院" className="w-full h-full object-contain" />
      </div>
      
      {/* 研究及知識轉移處 */}
      <div className="absolute h-[110.851px] left-[208.96px] top-[215.57px] w-[365.809px]">
        <img src="/img/partners/研究及知識轉移處.svg" alt="研究及知識轉移處" className="w-full h-full object-contain" />
      </div>
      
      {/* 小腦萎縮症協會 */}
      <div className="absolute h-[173.205px] left-[1517.81px] top-[177.4px] w-[273.322px]">
        <img src="/img/partners/小腦萎縮症協會.svg" alt="小腦萎縮症協會" className="w-full h-full object-contain" />
      </div>
      
      {/* 策劃及合辦 */}
      <div className="absolute font-light left-[36.67px] text-black text-[24px] top-[62px]">
        <p>策劃及合辦：</p>
      </div>
      
      {/* 教育夥伴 */}
      <div className="absolute font-light left-[1310px] text-black text-[24px] top-[62px]">
        <p>教育</p>
        <p>夥伴：</p>
      </div>
      
      {/* 資助 */}
      <div className="absolute font-light left-[36.67px] text-black text-[24px] top-[268px]">
        <p>資助：</p>
      </div>
      
      {/* 協力 */}
      <div className="absolute font-light left-[1310px] text-black text-[24px] top-[268px]">
        <p>協力：</p>
      </div>
    </div>
  );
}
