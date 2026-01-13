import React from 'react';
import TelephoneIcon from '../../../../components/Icons/Telephone';

const CaregiverTrainingPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">介紹：</h2>
        <p className="text-lg leading-relaxed important-text">
          由專業人士負責培訓，培訓內容涵蓋照顧殘疾人士及長者的基本知識和技巧，如起居照顧、溝通技巧、日常護理、輔具使用等。
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">殘疾人士：社署 – 外傭照顧殘疾人士培訓試驗計劃：</h2>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(i) 申請資格：</h3>
          <p className="text-lg ml-4">各中心情況有別，需致電查詢。</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(ii) 報名方式：</h3>
          <p className="text-lg ml-4">致電該區殘疾人士地區支援中心報名。</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(iii) 收費標準：</h3>
          <p className="text-lg ml-4">全免。</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(iv) 殘疾人士地區支援中心名單：</h3>
          <a
            href="https://www.swd.gov.hk/storage/asset/section/690/tc/List_of_21_DSCs_4.1.2024_TC&E.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline break-all ml-4"
          >
            https://www.swd.gov.hk/storage/asset/section/690/tc/List_of_21_DSCs_4.1.2024_TC&E.pdf
          </a>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">長者：社署 – 外傭護老培訓試驗計劃：</h2>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(i) 申請資格：</h3>
          <p className="text-lg ml-4">
            照顧體弱長者的外傭（需先獲僱主推薦/允許，其僱主亦需已購買法定要求的僱員補償保險）。
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(ii) 報名方式：</h3>
          <p className="text-lg ml-4">致電推行試驗計劃的長者地區中心查詢。</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(iii) 收費標準：</h3>
          <p className="text-lg ml-4">全免。</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(iv) 服務特色：</h3>
          <p className="text-lg ml-4">外傭上課時提供長者暫託服務。</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(v) 網頁版本：</h3>
          <a
            href="https://www.swd.gov.hk/tc/pubsvc/elderly/cat_careersupp/psfdh/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline break-all ml-4"
          >
            https://www.swd.gov.hk/tc/pubsvc/elderly/cat_careersupp/psfdh/index.html
          </a>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">香港傷殘青年協會 – 照顧者天地：</h2>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(i) 上課地點：</h3>
          <p className="text-lg ml-4">樂富。</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(ii) 申請資格：</h3>
          <p className="text-lg ml-4">肢體殘疾人士同住家人或直系親屬。</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(iii) 報名方式：</h3>
          <p className="text-lg ml-4">現場登記 / 網上登記。</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(iv) 收費標準：</h3>
          <p className="text-lg ml-4">單次收費，會員享有優惠。</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(v) 網頁版本（照顧者支援服務介紹，包含網上登記連結）：</h3>
          <p className="text-lg ml-4">照顧者天地(2025-2026) - 照顧者資訊網</p>
          <p className="text-lg flex items-center ml-4">
            <TelephoneIcon className="w-5 h-5 mr-2" />
            2337 9311
          </p>
          <p className="text-lg ml-4">wthpo1@hkfhy.org.hk</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">明愛賽馬會照顧者資源及支援中心 – 照顧者培訓課程：</h2>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(i) 上課地點：</h3>
          <p className="text-lg ml-4">Zoom或調景嶺。</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(ii) 申請資格：</h3>
          <p className="text-lg ml-4">已登記成為會員。</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(iii) 報名方式：</h3>
          <p className="text-lg ml-4">填寫報名表格（不接受電話報名）。</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(iv) 收費標準：</h3>
          <p className="text-lg ml-4">$550以下，會員全免。</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(v) 網頁版本（會員登記）：</h3>
          <a
            href="https://sws.caritas.org.hk/onlinepayment/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline break-all ml-4"
          >
            https://sws.caritas.org.hk/onlinepayment/login
          </a>
          <p className="text-lg flex items-center ml-4">
            <TelephoneIcon className="w-5 h-5 mr-2" />
            3892 0100
          </p>
          <p className="text-lg ml-4">osrscc@caritassws.org.hk</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">香港聖約翰救傷會 – 課程：</h2>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(i) 上課地點：</h3>
          <p className="text-lg ml-4">港島至新界各區。</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(ii) 申請資格：</h3>
          <p className="text-lg ml-4">已獲聘的外傭、體弱（半自助）長者照顧者。</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(iii) 報名方式：</h3>
          <p className="text-lg ml-4">現場登記 / 填妥報名表格後郵寄、傳真或電郵報名。</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(iv) 收費標準：</h3>
          <p className="text-lg ml-4">$800/位。</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(v) 網頁版本（課程報讀說明，包含報名表格）：</h3>
          <a
            href="https://www.stjohn.org.hk/sites/default/files/webform/Chinese/AFI.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline break-all ml-4"
          >
            https://www.stjohn.org.hk/sites/default/files/webform/Chinese/AFI.pdf
          </a>
          <p className="text-lg flex items-center ml-4">
            <TelephoneIcon className="w-5 h-5 mr-2" />
            2530 8020 – 8024
          </p>
          <p className="text-lg ml-4">assn.pps@stjohn.org.hk</p>
        </div>
      </section>
    </div>
  );
};

export default CaregiverTrainingPage;
