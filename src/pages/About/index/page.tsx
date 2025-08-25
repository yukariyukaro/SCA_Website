import React from 'react';

const AboutIndexPage: React.FC = () => {
  return (
    <div className="prose max-w-none">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">我們的故事</h2>
      <p className="text-gray-700 text-lg mb-4">
        攜手同行是一個致力於為殘疾人士提供全方位支持的平台。我們相信每個人都應該有平等的機會參與社會活動，享受高品質的生活。
      </p>
      
      <h3 className="text-xl font-semibold text-gray-800 mb-3">我們的使命</h3>
      <p className="text-gray-700 mb-4">
        通過整合社會資源，為殘疾人士提供醫療康復、就業培訓、社區支持等服務，幫助他們實現自立自強，融入社會。
      </p>
      
      <h3 className="text-xl font-semibold text-gray-800 mb-3">我們的願景</h3>
      <p className="text-gray-700 mb-4">
        建立一個包容、友善的社會環境，讓每個人都能發揮潛能，實現夢想。
      </p>
      
      <div className="bg-blue-50 p-4 rounded-lg mt-6">
        <p className="text-blue-800 text-sm">
          💡 <strong>提示：</strong> 在移動端，您可以點擊左側欄的菜單按鈕來打開導航菜單。
        </p>
      </div>
    </div>
  );
};

export default AboutIndexPage;



