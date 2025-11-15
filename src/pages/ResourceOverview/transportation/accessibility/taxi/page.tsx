import React from 'react';
import TelephoneIcon from '../../../../../components/Icons/Telephone';

const TaxiPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">無障礙出行 - 的士</h1>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">易達轎車（復康會提供）：</h2>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">服務內容：</h3>
          <p className="text-lg leading-relaxed">
            往返醫管局 / 衛生署屬下之醫院 / 診所
          </p>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">預約：</h3>
          <div className="flex items-center text-lg important-text">
            <TelephoneIcon className="w-5 h-5 mr-1" />
            <span className="text-lg">8106 6616 （使用日前的三個月內）</span>
          </div>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">費用：</h3>
          <p className="text-lg leading-relaxed important-text">
            $330-530 （收費由路線決定）
          </p>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">網頁：</h3>
          <a href="https://www.rehabsociety.org.hk/transport/ahc/zh-hans/" className="text-blue-600 hover:text-blue-800 underline break-all">
            https://www.rehabsociety.org.hk/transport/ahc/zh-hans/
          </a>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">鑽的：</h2>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">服務時間：</h3>
          <p className="text-lg leading-relaxed important-text">
            08:00-17:30 - 週六日及特別節日服務（如家庭聚會、掃墓及參與社區活動）
          </p>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">預約：</h3>
          <div className="flex items-center text-lg important-text">
            <TelephoneIcon className="w-5 h-5 mr-1" />
            <span>2760 8771（最早可於使用服務前14天預約）</span>
          </div>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">費用：</h3>
          <ul className="list-disc list-inside ml-4 space-y-1 text-lg important-text">
            <li>點到點收費: 單程由$145元起</li>
            <li>時租收費: 每小時$360元起,最少租用一小時</li>
          </ul>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">網頁：</h3>
          <a href="https://diamondcab.com.hk/zh/" className="text-blue-600 hover:text-blue-800 underline break-all">
            https://diamondcab.com.hk/zh/
          </a>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">康復速的：</h2>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">預約：</h3>
          <div className="flex items-center text-lg important-text">
            <TelephoneIcon className="w-5 h-5 mr-1" />
            <span>6487 8878（WhatsApp 同號）</span>
          </div>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">費用：</h3>
          <p className="text-lg leading-relaxed important-text">
            預約費 $120 + 按市區的士咪錶收費
          </p>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">網頁：</h3>
          <a href="https://www.rehabtaxi.com/contact" className="text-blue-600 hover:text-blue-800 underline break-all">
            https://www.rehabtaxi.com/contact
          </a>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">Rehab-Go：</h2>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">服務時間：</h3>
          <p className="text-lg leading-relaxed important-text">
            星期一至五：08:00-20:00
          </p>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">預約：</h3>
          <div className="flex items-center text-lg important-text">
            <TelephoneIcon className="w-5 h-5 mr-1" />
            <span className="text-lg">5166 8000（WhatsApp 同號）</span>
          </div>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">費用：</h3>
          <p className="text-lg leading-relaxed important-text">
            按市區的士咪錶收費，另加預約費每程 $120
          </p>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">網頁：</h3>
          <a href="https://www.rehab-go.com.hk/" className="text-blue-600 hover:text-blue-800 underline break-all">
            https://www.rehab-go.com.hk/
          </a>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">HKWheelchair：</h2>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">預約：</h3>
          <div className="flex items-center text-lg important-text">
            <TelephoneIcon className="w-5 h-5 mr-1" />
            <span>5184 6193（WhatsApp 同號）並最少提前一天預約</span>
          </div>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">費用：</h3>
          <p className="text-lg leading-relaxed important-text">
            按市區的士咪錶收費，另加預約費每程 $120
          </p>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">網頁：</h3>
          <a href="https://hkwheelchair51846193.com/" className="text-blue-600 hover:text-blue-800 underline break-all">
            https://hkwheelchair51846193.com/
          </a>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">香港輪椅的士：</h2>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">服務內容：</h3>
          <p className="text-lg leading-relaxed">
            各區醫院診所點對點接送
          </p>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">預約：</h3>
          <div className="flex items-center text-lg important-text">
            <TelephoneIcon className="w-5 h-5 mr-1" />
            <span>6290 8987（WhatsApp 同號）可直接電召</span>
          </div>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">費用：</h3>
          <p className="text-lg leading-relaxed important-text">
            按市區的士咪錶收費，另加預約費每程 $120
          </p>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">網頁：</h3>
          <a href="https://www.hkwheelchairtaxi.com/" className="text-blue-600 hover:text-blue-800 underline break-all">
            https://www.hkwheelchairtaxi.com/
          </a>
        </div>
      </section>

    </div>
  );
};

export default TaxiPage;