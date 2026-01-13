import React from 'react';

const HomeBasedPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900">嚴重殘疾人士家居照顧服務：</h2>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(i) 簡介：</h3>
          <p className="text-lg leading-relaxed important-text">
            透過提供綜合到戶服務，滿足殘疾人士個人照顧、護理及康復訓練需要，減輕其家人/照顧者的壓力，改善他們的生活質素。
          </p>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(ii) 服務內容及收費：</h3>
          <ul className="list-none space-y-1 text-lg important-text">
            <li>全套服務（每月收費上限）：$1002(月)</li>
            <li>個人照顧、護送服務、到戶暫託服務 （每小時）：$33</li>
            <li>物理治療、職業治療、言語治療訓練 （每節*）：$52</li>
            <li>保健員康復訓練服務 （每小時）：$33</li>
            <li>護士護理服務 （每節*）：$43</li>
            <li className="text-sm italic">*每節服務為45分鐘</li>
          </ul>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(iii) 服務對象：</h3>
          <ul className="list-disc list-inside ml-4 space-y-1 text-lg important-text">
            <li>居住：在家中生活。</li>
            <li>身體狀況：經「嚴重殘疾人士家居照顧服務評估工具」評定為合資格接受服務的嚴重智障及/或肢體傷殘人士；或正在輪候嚴重肢體傷殘人士宿舍、嚴重智障人士宿舍或嚴重殘疾人士護理院等資助住宿照顧服務的嚴重智障及/或肢體傷殘人士。</li>
          </ul>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(iv) 申請流程：</h3>
          <p className="text-lg leading-relaxed important-text">
            直接向提供服務的機構或經社工向服務機構提出申請。
            之後中心會回電安排評估(評估在家中進行)。
            申請表見網頁。
          </p>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(v) 服務提供中心：</h3>
          <ul className="list-none space-y-4">
            <li>
              <p className="text-lg font-semibold important-text">東華三院 - 樂群家居照顧服務</p>
              <p className="text-lg ">1）適用範圍：香港島及離島區</p>
              <a href="https://www.tungwahcsd.org/?content=2282" className="text-blue-600 hover:text-blue-800 underline break-all">https://www.tungwahcsd.org/?content=2282</a>
            </li>
            <li>
              <p className="text-lg font-semibold important-text">循道衛理楊震社會服務處 - 喜晴計劃</p>
              <p className="text-lg ">1）適用範圍：深水埗、九龍城、油尖旺區及將軍澳</p>
              <a href="https://yang.org.hk/kowloon-1-regional-home-care-service-chi/" className="text-blue-600 hover:text-blue-800 underline break-all">https://yang.org.hk/kowloon-1-regional-home-care-service-chi/</a>
            </li>
            <li>
              <p className="text-lg font-semibold important-text">基督教家庭服務中心 - 悅安心</p>
              <p className="text-lg ">1）適用範圍：觀塘及黃大仙</p>
              <a href="https://cfsc.org.hk/rhcs/site/index?lang=zh-TW" className="text-blue-600 hover:text-blue-800 underline break-all">https://cfsc.org.hk/rhcs/site/index?lang=zh-TW</a>
            </li>
            <li>
              <p className="text-lg font-semibold important-text">香港耀能協會 - 家居復康/支援服務</p>
              <p className="text-lg ">1）適用範圍：沙田、大埔及北區、西貢</p>
              <a href="https://www.sahk1963.org.hk/b5_service.php?id=32" className="text-blue-600 hover:text-blue-800 underline break-all">https://www.sahk1963.org.hk/b5_service.php?id=32</a>
            </li>
            <li>
              <p className="text-lg font-semibold important-text">鄰舍輔導會 - 伴航家顧服務計劃</p>
              <p className="text-lg ">1）適用範圍：葵涌、青衣及屯門</p>
              <a href="https://www.naac.org.hk/zh-hant/" className="text-blue-600 hover:text-blue-800 underline break-all">https://www.naac.org.hk/zh-hant/</a>
            </li>
          </ul>
        </div>
      </section>

      <hr className="my-6"/>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900">嚴重肢體傷殘人士綜合支援服務：</h2>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(i) 簡介：</h3>
          <p className="text-lg leading-relaxed important-text">
            除「嚴重殘疾人士家居照顧服務」提供的服務外，為符合要求的嚴重殘疾人士提供醫療器材及醫療消耗品方面的經濟支持（詳見「經濟支援」部分）。
          </p>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(ii) 服務對象要求：</h3>
          <ul className="list-disc list-inside ml-4 space-y-1 text-lg important-text">
            <li>需要依賴指定輔助呼吸醫療儀器、以及現正租用指定輔助呼吸醫療儀器及/或使用指定醫療消耗品；以及</li>
            <li>家庭每月入息不得超過入息上限規定香港住戶每月入息中位數的150%；以及</li>
            <li>家庭的資產不得超過房屋委員會租住公屋申請的資產限額；等。</li>
          </ul>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(iii) 申請流程：</h3>
          <p className="text-lg leading-relaxed important-text">
            直接向提供服務的機構或經社工向服務機構提出申請。之後中心會回電安排評估（評估在家中進行）。
            申請表見網頁。
          </p>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(iv) 服務提供中心：</h3>
          <ul className="list-none space-y-4">
            <li>
              <p className="text-lg font-semibold important-text">循道衛理楊震社會服務處 - 牽晴計劃</p>
              <p className="text-lg ">1）適用範圍：香港島及九龍</p>
              <a href="https://yang.org.hk/integrated-support-service-for-persons-with-severe-physical-disabilities-chi/" className="text-blue-600 hover:text-blue-800 underline break-all">https://yang.org.hk/integrated-support-service-for-persons-with-severe-physical-disabilities-chi/</a>
            </li>
            <li>
              <p className="text-lg font-semibold important-text">嚴重殘疾人士家居照顧服務</p>
              <p className="text-lg ">1）適用範圍：新界</p>
              <a href="https://www.swd.gov.hk/tc/pubsvc/rehab/cat_supportcom/homebase/iss/" className="text-blue-600 hover:text-blue-800 underline break-all">https://www.swd.gov.hk/tc/pubsvc/rehab/cat_supportcom/homebase/iss/</a>
            </li>
          </ul>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(v) 備註：</h3>
          <p className="text-lg leading-relaxed important-text">
            「嚴重殘疾人士家居照顧服務」或「嚴重肢體傷殘人士綜合支援服務」不可重疊使用。
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomeBasedPage;
