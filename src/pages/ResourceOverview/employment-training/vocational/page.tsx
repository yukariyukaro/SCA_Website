import React from 'react';

const VocationalRehabilitationPage: React.FC = () => {
  return (
    <div className="space-y-8">

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">介紹：</h2>
        <p className="text-lg leading-relaxed important-text">
          為殘疾人士提供全面且系統化的職業技能培訓和就業支援服務，幫助他們進入公開就業市場並發揮潛能。
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">服務說明：</h2>
        <ul className="list-decimal list-inside ml-4 space-y-2 text-lg">
          <li>以下服務全部免費。</li>
          <li>參與服務需評估，小腦萎縮症可與相關醫生、職業治療師、社工做服務瞭解。</li>
          <li>申請所需文件：身份證、殘疾人士登記證明、復診資料。</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">殘疾人士輔助就業培訓：</h2>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(i) 服務對象：</h3>
          <ul className="list-decimal list-inside ml-4 space-y-2 text-lg">
            <li>年齡為15歲或以上，具自理能力的殘疾人士。</li>
            <li>在缺乏支援的情況下無法適應公開競爭的職業市場的殘疾人士轉介。</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(ii) 就業輔導及工作技能訓練：</h3>
          <p className="text-lg leading-relaxed important-text ml-4">
            職業分析、就業選配、就業技能訓練、在職訓練和督導，及向各參加者提供職業輔導及意見；及可賺取訓練津貼的工作技能訓練。
          </p>
          <p className="text-lg ml-4">（註：服務單位和學員之間並無僱傭關係）</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(iii) 見習：</h3>
          <p className="text-lg leading-relaxed important-text ml-4">
            每位參加者將被安排為期最長3個月的見習。在見習期內，參加者如出勤率能符合要求，便會獲發每月2,000元的見習津貼；完成見習後，服務機構會協助參加者在公開市場尋找合適工作或在職試用職位。
          </p>
          <p className="text-lg ml-4">（註：參加者與提供見習的機構並無僱傭關係）。</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(iv) 在職試用：</h3>
          <p className="text-lg leading-relaxed important-text ml-4">
            僱主可通過在職試用計劃試用參加者，參加者在試用期內已屬僱員身份，享有《僱傭條例》及《最低工資條例》等所規定的一般僱員福利；及參加者如完成見習後找到工作，便無須參與在職試用。
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(v) 就業後跟進服務：</h3>
          <p className="text-lg ml-4">每位找到工作的參加者將被提供不少於12個月的跟進服務。</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(vi) 申請辦法：</h3>
          <ul className="list-decimal list-inside ml-4 space-y-2 text-lg">
            <li>直接向服務機構申請服務。</li>
            <li>或具認證非政府機構的獲授權人士經社署康復服務中央轉介系統轉介。</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(vii) 網頁版本：</h3>
          <a
            href="https://www.swd.gov.hk/tc/pubsvc/rehab/cat_vocatdaytrain/set/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline break-all ml-4"
          >
            https://www.swd.gov.hk/tc/pubsvc/rehab/cat_vocatdaytrain/set/
          </a>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(viii) 全港服務機構名單：</h3>
          <a
            href="https://www.swd.gov.hk/storage/asset/section/1381/tc/List%20of%20Service%20Unit_%20SET_Bilingual%20(Sep%202024).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline break-all ml-4"
          >
            https://www.swd.gov.hk/storage/asset/section/1381/tc/List%20of%20Service%20Unit_%20SET_Bilingual%20(Sep%202024).pdf
          </a>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">綜合職業康復服務中心：</h2>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(i) 服務對象：</h3>
          <ul className="list-decimal list-inside ml-4 space-y-2 text-lg">
            <li>年齡15歲或以上。</li>
            <li>需要職業訓練或支援以便在公開市場就業的殘疾人士。</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(ii) 職業技能訓練包括：</h3>
          <div className="space-y-3 ml-4">
            <p className="text-lg">【中心為本訓練】：簡單加工、包裝及裝配；桌面印刷及洗衣服務等。</p>
            <p className="text-lg">【戶外工作訓練】：汽車美容、辦公室清潔、送遞服務、零售及派發傳單等。</p>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>安排就業、就業選配、在職督導及持續支援。</li>
              <li>提供在職培訓，包括就業見習、在職試用及就業後跟進服務等。</li>
              <li>提供再培訓及其他職業訓練服務；及</li>
              <li>
                提供可賺取訓練津貼的工作技能訓練（訓練津貼一般按學員所接受的工作訓練類別及參與程度計算）。
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(iii) 申請辦法：</h3>
          <ul className="list-decimal list-inside ml-4 space-y-2 text-lg">
            <li>直接向服務機構申請服務。</li>
            <li>或由具認證非政府機構的獲授權人士經社署康復服務中央轉介系統轉介。</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(iv) 網頁版本：</h3>
          <a
            href="https://www.swd.gov.hk/tc/pubsvc/rehab/cat_vocatdaytrain/intivrsc/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline break-all ml-4"
          >
            https://www.swd.gov.hk/tc/pubsvc/rehab/cat_vocatdaytrain/intivrsc/
          </a>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(v) 全港服務機構名單：</h3>
          <a
            href="https://www.swd.gov.hk/storage/asset/section/312/tc/IVRSC_bilingual_202410.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline break-all ml-4"
          >
            https://www.swd.gov.hk/storage/asset/section/312/tc/IVRSC_bilingual_202410.pdf
          </a>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">綜合職業訓練中心 － 日間服務：</h2>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(i) 服務對象：</h3>
          <ul className="list-decimal list-inside ml-4 space-y-2 text-lg">
            <li>年齡15歲或以上。</li>
            <li>需要接受職業訓練及康復服務的殘疾人士。</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(ii) 職業技能訓練包括：</h3>
          <ul className="list-disc list-inside ml-4 space-y-2 text-lg">
            <li>提供技能訓練、再培訓及輔助就業等服務，以協助學員發展職業技能及培養良好的工作習慣。</li>
            <li>
              安排就業見習，讓學員在實際工作環境中獲取及應用就業技能（註：學員與提供見習的機構並無僱傭關係）。
            </li>
            <li>安排職業分析及就業選配。</li>
            <li>提供多方面的生活技能訓練及活動。</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(iii) 申請辦法：</h3>
          <ul className="list-decimal list-inside ml-4 space-y-2 text-lg">
            <li>直接聯絡服務單位申請服務。</li>
            <li>或由服務機構轉介申請。</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(iv) 網頁版本：</h3>
          <a
            href="https://www.swd.gov.hk/tc/pubsvc/rehab/cat_vocatdaytrain/intivtc/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline break-all ml-4"
          >
            https://www.swd.gov.hk/tc/pubsvc/rehab/cat_vocatdaytrain/intivtc/
          </a>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(v) 綜合職業訓練中心（日間服務）名單：</h3>
          <a
            href="https://www.swd.gov.hk/storage/asset/section/313/tc/IVTC_bilingual_202104.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline break-all ml-4"
          >
            https://www.swd.gov.hk/storage/asset/section/313/tc/IVTC_bilingual_202104.pdf
          </a>
        </div>
      </section>
    </div>
  );
};

export default VocationalRehabilitationPage;
