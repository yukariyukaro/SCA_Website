import React from 'react';
import TelephoneIcon from '../../../../../components/Icons/Telephone';

const OtherBusesPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">無障礙出行 - 其他巴士</h1>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">冠忠巴士集團：</h2>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(i) 服務內容概括：</h3>
          <p className="text-lg leading-relaxed">
            方便病人往返公立醫院及診所接受康復服務
          </p>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(ii) 服務路線 / 時間：</h3>
          <p className="text-lg leading-relaxed">
            在網頁「路線」一欄有詳細信息
          </p>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(iii) 申請條件：</h3>
          <p className="text-lg leading-relaxed important-text">
            行動不便之人士及其陪同者
          </p>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(iv) 申請流程：</h3>
          <div className="flex items-center text-lg important-text">
            <span>致電</span>
            <TelephoneIcon className="w-5 h-5 mx-1" />
            <span>29798777 或網上登記預約用車</span>
          </div>
          <p className="text-lg leading-relaxed important-text">
            用戶需於用車日 2 至 7 個工作天前預約
          </p>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(v) 費用：</h3>
          <p className="text-lg leading-relaxed important-text">
            $2/人
          </p>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(vi) 網頁版本：</h3>
          <a href="https://www.kcbh.com.hk/rehabus.php" className="text-blue-600 hover:text-blue-800 underline break-all">
            https://www.kcbh.com.hk/rehabus.php
          </a>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">愛心小巴：</h2>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(i) 服務內容概括：</h3>
          <p className="text-lg leading-relaxed">
            定時定點的無障礙巴士服務
          </p>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(ii) 服務地點：</h3>
          <p className="text-lg leading-relaxed important-text">
            居住在港島中西區、南區、東區、新界西 (荃灣、葵涌、青衣)
          </p>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(iii) 服務時間：</h3>
          <p className="text-lg leading-relaxed important-text">
            08:00 - 17:30
          </p>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(iv) 申請條件：</h3>
          <p className="text-lg leading-relaxed important-text">
            領取綜援或經濟有困難的長者 / 傷殘人士；行動不便及無法乘坐一般交通工具之長者。
          </p>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(v) 申請流程：</h3>
          <div className="flex items-center text-lg important-text">
            <span>致電</span>
            <TelephoneIcon className="w-5 h-5 mx-1" />
            <span>2818 7400 登記成為會員 (會費全免)；</span>
          </div>
          <p className="text-lg leading-relaxed important-text">
            或者填妥「愛心小巴服務」申請表格，以郵寄或傳真方式遞交申請。
          </p>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(vi) 費用：</h3>
          <p className="text-lg leading-relaxed important-text">
            服務使用者$10，陪診者$10；貧苦無依長者可向本會提出豁免收費申請。
          </p>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(vii) 網頁版本：</h3>
          <a href="https://cc.sjs.org.hk/zh-hant/our_services/detail/44/" className="text-blue-600 hover:text-blue-800 underline break-all">
            https://cc.sjs.org.hk/zh-hant/our_services/detail/44/
          </a>
        </div>
      </section>
    </div>
  );
};

export default OtherBusesPage;