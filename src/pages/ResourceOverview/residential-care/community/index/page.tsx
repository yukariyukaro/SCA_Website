import React from 'react';

const CommunityIndexPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">介紹：</h2>
        <p className="text-lg leading-relaxed important-text">
          香港有多家中心為在家中居住的殘疾人士提供日間照顧、暫托、護理和復康訓練等服務，以幫助患者復康、減輕照顧者的負擔。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">服務分類：</h2>
        
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(i) 社會福利署提供/資助的服務：</h3>
          <ul className="list-decimal list-inside ml-4 space-y-1 text-lg">
            <li className="font-bold text-gray-800">中心為本</li>
            <p className="text-lg leading-relaxed ml-6 ">用者需前往中心參加服務，建議用者提前瞭解前往中心的交通方式，以及中心是否可提供接送。</p>
            <li className="font-bold text-gray-800">家居為本</li>
            <p className="text-lg leading-relaxed ml-6 ">用者居家參加到戶服務，對出行不便的用者更為友好。</p>
            <li className="font-bold text-gray-800">綜合中心與家居</li>
            <p className="text-lg leading-relaxed ml-6 ">中心結合評估情況為用者靈活安排中心為本或家居為本的服務。</p>
          </ul>
        </div>

        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(ii) 非社署提供的服務：</h3>
          <p className="text-lg leading-relaxed important-text">
            除網站上的服務外,香港還有很多慈善團體及社企提供復康訓練及到戶的照護服務,雖然較社署收費高,但服務門檻較低、預約及使用更便利。本冊列出一部分服務供用者參考。
          </p>
        </div>

        <div className="space-y-2 ml-4">
            <p className="text-lg leading-relaxed important-text">
                <span className="font-bold text-red-600">*</span> 備註：服務對象通常為15歲以上人士。
            </p>
        </div>
      </section>
    </div>
  );
};

export default CommunityIndexPage;