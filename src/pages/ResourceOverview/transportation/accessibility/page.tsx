import React from 'react';
import TelephoneIcon from '../../../../components/Icons/Telephone';

const AccessibilityPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">無障礙出行</h1>
      
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">殘疾人八達通：</h2>
        
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(i) 服務內容：</h3>
          <p className="text-lg leading-relaxed">
            司機在限制區內上落乘客，乃屬違法。不過，為方便殘疾人士出入，警方同意酌情容許司機在限制區（快速公路和 24 小時限制區除外）上落殘疾乘客。殘疾乘客可將一份填妥的「殘疾乘客在限制區上落車證明書」交給司機，上面列出有關該次車程的資料（日期、間及上落車地點）和車牌號碼。司機倘遭警務人員查問，可出示該張證明書。
          </p>
        </div>

        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(ii) 申請條件：</h3>
          <ol className="list-decimal list-inside ml-4 space-y-1 text-lg">
            <li>行動不便人士，例如輪椅使用者或使用輔助步行器人士；</li>
            <li>視障人士。</li>
          </ol>
        </div>

        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(iii) 申請流程：</h3>
          <p className="text-lg leading-relaxed">
            殘疾人士可向復康機構或老人社區服務中心（ 詳見「申請聯絡機構」） 申請。如有相關問題， 申請人可致電香港社會服務聯會( 2864 2934) 查詢。
          </p>
        </div>

        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">申請聯絡機構：</h3>
          <a href="https://www.td.gov.hk/sc/public_services/services_for_the_people_with_disabilities/index.html"
             className="text-blue-600 hover:text-blue-800 underline break-all">
            https://www.td.gov.hk/sc/public_services/services_for_the_people_with_disabilities/index.html
          </a>
        </div>

        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">詳細信息：「生活貼士：殘疾人士公共交通指南：殘疾乘客在限制區上落車證明書」</h3>
          <a href="https://cyberable.swd.gov.hk/tc/facility_1_intro.html"
             className="text-blue-600 hover:text-blue-800 underline break-all">
            https://cyberable.swd.gov.hk/tc/facility_1_intro.html
          </a>
          <p className="text-lg important-text">
            <TelephoneIcon className="inline-block w-5 h-5 mr-1" />
            3842 5828 或 3842 1823
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">司機接載行動不便的殘疾人士泊車證明書申請表：</h2>
        <div className="ml-4">
          <p className="text-lg leading-relaxed important-text">
            詳情見網頁：「司機接載行動不便的殘疾人士泊車證明書新措施」。
          </p>
          <a href="https://www.td.gov.hk/sc/public_services/services_for_the_people_with_disabilities/index.html"
             className="text-blue-600 hover:text-blue-800 underline break-all">
            https://www.td.gov.hk/sc/public_services/services_for_the_people_with_disabilities/index.html
          </a>
        </div>
      </section>
    </div>
  );
};

export default AccessibilityPage;