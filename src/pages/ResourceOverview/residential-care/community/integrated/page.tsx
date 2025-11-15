import React from 'react';
import TelephoneIcon from '../../../../../components/Icons/Telephone';

const IntegratedPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900">綜合社區康復中心（試驗計劃）：</h2>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(i) 簡介：</h3>
          <p className="text-lg leading-relaxed important-text">
            社會福利署獲獎券基金撥款推行綜合社區康復中心試驗計劃（「試驗計劃」），透過兩間綜合社區康復中心為有高度照顧需要並在家中生活的嚴重殘疾人士提供連貫連續、互相銜接的社區支援服務，並為他們的照顧者提供支援。試驗計劃下設立的綜合社區康復中心會靈活地融合日間護理中心及家居照顧服務，按嚴重殘疾人士的實際缺損程度及服務需要的轉變提供服務。
          </p>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(ii) 服務對象：</h3>
          <p className="text-lg leading-relaxed important-text">在家中生活的嚴重殘疾人士（包括部份屬中度缺損程度的殘疾人士）</p>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(iii) 服務提供中心：</h3>
          <ul className="list-none space-y-4">
            <li>
              <p className="text-lg font-semibold important-text">基督教家庭服務中心綜合社區康復中心（九龍東）</p>
              <p className="text-lg">1）適用範圍：九龍城、黃大仙、西貢、觀塘</p>
              <a href="https://icrc.cfsc.org.hk/" className="text-blue-600 hover:text-blue-800 underline break-all">2）網頁版本：https://icrc.cfsc.org.hk/</a>
              <p className="text-lg">3）中心地址：九龍九龍灣臨樂街19號南豐商業中心18樓4-8室。</p>
              <p className="text-lg flex items-center">
                <TelephoneIcon className="w-5 h-5 mr-2" />
                3579 8151
              </p>
            </li>
            <li>
              <p className="text-lg font-semibold important-text">香港耀能協會新界西綜合社區康復中心</p>
              <p className="text-lg">1）適用範圍：荃灣、葵涌、青衣、元朗、屯門</p>
              <a href="https://css.sahk1963.org.hk/中心簡介/新界西綜合社區康復中心/" className="text-blue-600 hover:text-blue-800 underline break-all">2）網頁版本： https://css.sahk1963.org.hk/中心簡介/新界西綜合社區康復中心/</a>
              <p className="text-lg">3）服務內容及收費 *： * 摘自社會福利署網頁，僅供參考，以網頁為準 全套服務（每月收費上限） — $1,002(月) 中心為本服務 中心日間照顧服務: 每日(包括午膳) — $61 半日(包括午膳)* — $30 半日(不包括午膳)* — $20 物理治療、職業治療、言語治療訓練 (每節45分鐘) — $61 日間暫託服務 (每小時) — $5 接載服務 (僅用於往返中心)(每程) — $10 護士護理服務 (每節45分鐘)* — $43 家居為本服務 個人照顧、護送服務、到戶暫託服務 (每小時) — $33 物理治療、職業治療、言語治療訓練 (每節45分鐘) — $52 保健員康復訓練服務 (每小時) — $33 護士護理服務 (每節45分鐘) — $43</p>
              <p className="text-lg">4）申請流程：致電中心瞭解服務、預約評估，若評估為適合接受服務即可使用服務。</p>
              <p className="text-lg">5）備註：適用範圍、服務單位、地點見網頁「殘疾人士地區支援中心」表格。</p>
            </li>
          </ul>
        </div>
      </section>

      <hr className="my-6"/>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900">殘疾人士地區支援中心（21間）：</h2>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(i) 簡介：</h3>
          <p className="text-lg leading-relaxed important-text">
            為居住在社區中的殘疾人士、其家人和照顧者提供一站式服務和支援,強化殘疾人士的家居及社區生活技能，協助他們融入社區。中心並為殘疾人士的家人/照顧者提供訓練及支援,提升他們照顧殘疾人士的能力,紓緩他們的壓力。
          </p>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(ii) 備註：</h3>
          <p className="text-lg leading-relaxed important-text">
            該計劃不能與社署/政府資助的其他計劃重合；與醫管局提供的職業治療等服務可以重合。如果對不同計劃都感興趣，可以先同時試用多個計劃，但需要在試用期（通常為兩個月）結束後選擇其中一個計劃。
            未來有機會在各區設立綜合社區康復中心,將「試驗計劃」轉為恆常化的計劃。
          </p>
        </div>
        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(iii) 網頁版本：</h3>
          <a href="https://www.swd.gov.hk/tc/pubsvc/rehab/cat_supportcom/centrebase/dsc/" className="text-blue-600 hover:text-blue-800 underline break-all">
            https://www.swd.gov.hk/tc/pubsvc/rehab/cat_supportcom/centrebase/dsc/
          </a>
          <p className="text-lg">服務單位、地點見網頁「殘疾人士地區支援中心」表格</p>
           <p className="text-lg flex items-center">
            <TelephoneIcon className="w-5 h-5 mr-2" />
            3166 2600
          </p>
        </div>
      </section>
    </div>
  );
};

export default IntegratedPage;