import React from 'react';
import TelephoneIcon from '../../../../../components/Icons/Telephone';

const CentralReferralPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">住宿照顧：</h2>
        <p className="text-lg leading-relaxed important-text">
        許多院舍為有需要的人士提供含有起居照顧及護理服務的住宿服務，患者可按需選擇不同規格、照顧程度及收費標準的宿舍。
        </p>

      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">康復服務中央轉介系統（CRSRehab）：</h2>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(i) 簡介：</h3>
          <p className="text-lg leading-relaxed important-text">
          康復服務中央轉介系統統一管理殘疾人士日間及住宿服務的輪候名單，確保轉介程序及入住標準清晰一致。除特別註明外，申請有關服務須經由社工轉介，方可登記。
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(ii) 申請流程：</h3>
          <p className="text-lg font-semibold important-text">醫生寫紙證明患者肢體傷殘，有入住院舍的需要證明書要包括以下部分：</p>
          <ul className="list-disc list-inside ml-4 space-y-2 text-lg">
            <li>1）診斷</li>
            <li>2）是否符合「嚴重肢體傷殘」</li>
            <li>3）是否需坐輪椅</li>
            <li>4）有住宿院舍需要</li>
          </ul>
          <p className="text-lg font-semibold important-text">2a. 非住院患者：</p>
          <p className="text-lg ml-4">找到住處附近的社署綜合家庭服務中心*，打電話向社工咨詢殘疾人士住宿服務，安排評估（通常為社工到戶評估）</p>
          <p className="text-lg ml-4">* 綜合家庭服務中心位置及聯絡方式查詢：</p>
          <a href="https://www.swd.gov.hk/tc/pubsvc/rehab/cat_crsrehab/centralref/" className="text-blue-600 hover:text-blue-800 underline break-all ml-4">https://www.swd.gov.hk/tc/pubsvc/rehab/cat_crsrehab/centralref/</a>
          <p className="text-lg font-semibold important-text">2b. 如患者正住院：</p>
          <p className="text-lg ml-4">聯絡該醫院的社署醫務社會服務單位提出申請。</p>
          <p className="text-lg ml-4">評估後，參與政府住宿和/或買位計劃的輪候。</p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(iii) 所需文件：</h3>
          <ul className="list-disc list-inside ml-4 space-y-2 text-lg">
            <li>殘疾人士證明</li>
            <li>證明肢體傷殘程度及情況的醫生紙</li>
            <li>過往康復紀錄</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(iv) 諮詢：</h3>
          <p className="text-lg ml-4">向社署熱線咨詢有關計劃：</p>
          <p className="text-lg flex items-center ml-4">
            <TelephoneIcon className="w-5 h-5 mr-2" />
            2343 2255（撥通後,按「0」轉人工）
          </p>
        </div>
        <div className="my-4">
          <img src={`${import.meta.env.BASE_URL}img/资源总览/住宿照顾/image1.png`} alt="住宿照顧服務" className="w-full sm:w-4/5 lg:w-2/3" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">嚴重殘疾人士護理院（26間）：</h2>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(i) 服務內容：</h3>
          <p className="text-lg leading-relaxed important-text">為不適合日間訓練服務的嚴重智障或嚴重肢體傷殘人士，提供家居式住宿服務。服務使用者需要接受護理和深入起居照顧，但無須療養院程度的服務。</p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(ii) 申請資格 ：</h3>
          <p className="text-lg font-semibold important-text">身體狀況：</p>
          <p className="text-lg ml-4">嚴重智障或嚴重肢體傷殘人士；</p>
          <p className="text-lg font-semibold important-text">生活狀況：</p>
          <p className="text-lg ml-4">需要深入起居照顧，例如在穿衣、如廁及進食方面都需要協助；及無需長期臥床或需要經常接受醫療/護理照顧。</p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(iii) 大致輪候時間 *：</h3>
          <p className="text-lg ml-4">如對宿舍無要求：約5-6年</p>
          <p className="text-lg ml-4">通常：10年以上</p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(iv) 收費標準：</h3>
          <p className="text-lg ml-4">50%殘疾程度成人，每月$1,660；</p>
          <p className="text-lg ml-4">100%殘疾成人或領取傷殘津貼者，每月$1,871。</p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(v) 網頁版本：</h3>
          <a href="https://www.swd.gov.hk/tc/pubsvc/rehab/cat_residcare/resserphymenthandi/careattcasd/" className="text-blue-600 hover:text-blue-800 underline break-all ml-4">https://www.swd.gov.hk/tc/pubsvc/rehab/cat_residcare/resserphymenthandi/careattcasd/</a>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">輔助宿舍（30+間）：</h2>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(i) 服務內容：</h3>
          <p className="text-lg leading-relaxed important-text">為有能力過半獨立生活的殘疾人士，提供家庭式的住宿服務，並在日常生活上提供有限度的職員協助。</p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(ii) 申請資格 ：</h3>
          <p className="text-lg font-semibold important-text">身體狀況：</p>
          <p className="text-lg ml-4">殘疾人士；</p>
          <p className="text-lg font-semibold important-text">生活狀況：</p>
          <p className="text-lg ml-4">有自我照顧能力，但需要協助社區生活活動或家務，如煮食、洗滌或購物；</p>
          <p className="text-lg ml-4">目前正就業或接受日間訓練；及身體和精神狀況都適合過群體生活。</p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(iii) 大致輪候時間 *：</h3>
          <p className="text-lg ml-4">如對宿舍無要求：約5-6年</p>
          <p className="text-lg ml-4">通常：10年以上</p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(iv) 收費標準：</h3>
          <p className="text-lg ml-4">50%殘疾程度成人，每月$897；</p>
          <p className="text-lg ml-4">100%殘疾成人或領取傷殘津貼者，每月$977。</p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(v) 網頁版本：</h3>
          <a href="https://www.swd.gov.hk/tc/pubsvc/rehab/cat_residcare/resserphymenthandi/supportedh/" className="text-blue-600 hover:text-blue-800 underline break-all ml-4">https://www.swd.gov.hk/tc/pubsvc/rehab/cat_residcare/resserphymenthandi/supportedh/</a>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">私營殘疾人士院舍買位計劃：</h2>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(i) 服務內容：</h3>
          <p className="text-lg leading-relaxed important-text">社署在私營殘疾人士院舍買位，增加資助宿位的供應。</p>

        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(ii) 12間高度照顧級別 ：</h3>
          <p className="text-lg font-semibold important-text">申請資格 ：</p>
          <p className="text-lg ml-4">透過社署「康復服務中央轉介系統」輪候長期護理院或中度智障人士宿舍的申請人</p>
          <p className="text-lg font-semibold important-text">收費標準：</p>
          <p className="text-lg ml-4">每月$1,656</p>
          <p className="text-lg font-semibold important-text">大致輪候時間 * :</p>
          <p className="text-lg ml-4">通常：3-4年</p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(iii) 12間中度照顧級別 ：</h3>
          <p className="text-lg font-semibold important-text">申請資格 ：</p>
          <p className="text-lg ml-4">透過社署「康復服務中央轉介系統」輪候中途宿舍或輔助宿舍的申請人</p>
          <p className="text-lg font-semibold important-text">收費標準：</p>
          <p className="text-lg ml-4">每月$1,079</p>
          <p className="text-lg font-semibold important-text">大致輪候時間 * :</p>
          <p className="text-lg ml-4">通常：3-4年</p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(iv) 網頁版本：</h3>
          <a href="https://www.swd.gov.hk/tc/pubsvc/rehab/cat_residcare/bps/" className="text-blue-600 hover:text-blue-800 underline break-all ml-4">https://www.swd.gov.hk/tc/pubsvc/rehab/cat_residcare/bps/</a>
          {/* Image placeholder for id: 412:388 */}
        </div>
      </section>

      <footer className="mt-8 pt-4 border-t border-gray-200 text-lg text-gray-500">
        <p>* 中央轉介「大致輪侯時間」由社署社工提供，僅作參考。</p>
        <div className="my-4">
          <img src="img/资源总览/住宿照顾/image2.png" alt="私營殘疾人士院舍買位計劃" className="w-full sm:w-4/5 lg:w-2/3" />
        </div>
      </footer>
    </div>
  );
};

export default CentralReferralPage;