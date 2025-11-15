import React from 'react';
import TelephoneIcon from '../../../../../components/Icons/Telephone';

const RehabusPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">無障礙出行 - 復康巴</h1>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">復康巴：</h2>
        <p className="text-lg leading-relaxed">
          復康巴士由香港復康會營運，為行動不便人士提供無障礙的交通接載服務，包括上下學、覆診、上班或參與社交活動。所有申請者須先註冊成為復康巴士客戶，方可使用服務。下文介紹了針對不同情況使用的三項服務，詳情參考網頁「我們的服務」。
        </p>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(ii) 申請條件：</h3>
          <ol className="list-decimal list-inside ml-4 space-y-1 text-lg ">
            <li className="important-text">持有香港身份證的行動不便人士；</li>
            <li className="important-text">需提供有效的醫生證明或殘疾人士登記證；</li>
            <li className="important-text">完成用戶註冊後,方可預約服務。</li>
          </ol>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(iii) ICOMS程式：</h3>
          <p className="text-lg leading-relaxed">
            ICOMS 是復康巴士的網上及手機系統平台，讓已登記的客戶可自行辦理服務申請、查閱行程安排、接收通知等，方便快捷，適合經常使用服務的行動不便人士。
          </p>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800 ">(iv) 網頁版本：</h3>
          <a href="https://icoms.hksr.org.hk/RB/cust/index" className="text-blue-600 hover:text-blue-800 underline break-all">
            https://icoms.hksr.org.hk/RB/cust/index
          </a>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(v) 手機應用程式：</h3>
          <p className="text-lg leading-relaxed">
            於 App Store 或 Play 商店搜尋「復康巴士」下載 (支援 iOS 12/Android 8 或以上)
          </p>
        </div>
        <p className="text-lg important-text">
          <TelephoneIcon className="inline-block w-5 h-5 mr-1" />
          查詢熱線 ： 2824 6500
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">復康巴固定路線服務：</h2>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(i) 服務內容概括：</h3>
          <p className="text-lg leading-relaxed">
            於平日早晚繁忙時間，為需要乘車上班、上學及前往接受訓練的用戶提供的定時定點接載服務。通常每星期申請使用5程或以上。
          </p>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800 ">(ii) 服務時間：</h3>
          <ul className="list-disc list-inside ml-4 space-y-1 text-lg important-text">
            <li>星期一至五：06:30 - 10:00, 15:00 - 19:00</li>
            <li>星期六：06:30 - 10:00, 12:00 - 14:00, 15:00 - 19:00</li>
            <li>星期日及公眾假期：不設服務</li>
          </ul>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(iii) 申請條件：</h3>
          <p className="text-lg leading-relaxed">
            有固定的上落車時間及地點；及每星期申請使用5程或以上。
          </p>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(iv) 申請流程：</h3>
          <p className="text-lg leading-relaxed">
            ICOMS 平台或郵寄表格 (FES/01c)*
          </p>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(v) 費用：</h3>
          <p className="text-lg font-semibold">全月票：</p>
          <ul className="list-disc list-inside ml-4 space-y-1 text-lg">
            <li>（1）一般線(非過海線)：$184</li>
            <li>（2）過海線(收費過海隧道 / 收費道路線)： $264</li>
          </ul>
          <p className="text-lg font-semibold">半月票：</p>
          <ul className="list-disc list-inside ml-4 space-y-1 text-lg">
            <li>（1）一般線(非過海線)：$92</li>
            <li>（2）過海線(收費過海隧道 / 收費道路線)： $132</li>
          </ul>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">復康巴電召服務：</h2>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(i) 服務內容概括：</h3>
          <p className="text-lg leading-relaxed">
            全年365日的點到點交通接載服務，以便覆診或參與社交活動。
          </p>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(ii) 服務時間：</h3>
          <p className="text-lg leading-relaxed">
            全年（最早可於乘車日前3個月預約）
          </p>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(iii) 申請條件：</h3>
          <div className="flex items-center text-lg important-text">
            <span>ICOMS 平台 或 致電熱線</span>
            <TelephoneIcon className="w-5 h-5 mx-1" />
            <span>2824 6500</span>
          </div>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(iv) 費用：</h3>
          <p className="text-lg leading-relaxed">
            總收費 = 服務時間 (最少半小時) + 里數 + $5服務預約費
          </p>
          <img src="/img/资源总览/残疾人交通优惠/复康巴.png" alt="復康巴收費" className="w-full md:w-10/12" />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">復康巴聯載服務：</h2>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(i) 服務內容概括：</h3>
          <p className="text-lg leading-relaxed">
            為用戶（特別是寄宿人士）提供每星期兩程的定時定點接載共乘服務，以便往返學校、工場宿舍和居所。
          </p>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(ii) 服務時間：</h3>
          <ul className="list-disc list-inside ml-4 space-y-1 text-lg important-text">
            <li>星期五或星期六（接載回家）</li>
            <li>星期日或星期一（接載回學校或工場宿舍）</li>
          </ul>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(iii) 申請條件：</h3>
          <p className="text-lg leading-relaxed important-text">
            有固定的上落車時間及地點
          </p>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(iv) 申請流程：</h3>
          <p className="text-lg leading-relaxed important-text">
            ICOMS 平台或郵寄表格 (FES/01c)*
          </p>
          <p className="text-sm text-gray-600 important-text">
            * 表格見網頁「表格下載」；表格上附有郵寄地址。
          </p>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(v) 費用：</h3>
          <p className="text-lg leading-relaxed">
            每月港幣 160 元。
          </p>
        </div>
      </section>
    </div>
  );
};

export default RehabusPage;