import React from 'react';
import Attention from '../../../../components/specialFont/Attention';
import TelephoneIcon from '../../../../components/Icons/Telephone';

const DiscountPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <Attention message="溫馨提示：長者和合資格殘疾人士使用指定公共交通工具及服務時只需2元。" />

      <div className="space-y-12">
        {/* 殘疾人八達通 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">殘疾人八達通</h2>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-700">(i) 申請對象：</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-600">
              <li className="important-text">60歲以下合資格殘障人士：</li>
              <ul className="list-decimal list-inside ml-8 space-y-2 text-lg">
                <li>殘障程度達100%的綜合社會安全援助（綜援）計畫受助者；</li>
                <li>傷殘津貼受惠人。</li>
              </ul>
            </ul>
          </div>
          <div className="space-y-3 text-lg">
            <h3 className=" font-semibold text-gray-700">(ii) 申請流程：</h3>
            <ol className="list-decimal list-inside ml-4 space-y-2 text-gray-600">
              <li>社會福利署（社署）完成批核綜合社會保障援助（綜援）計劃或傷殘津貼的申請或續期後，會向合資格殘疾人士或其家長 / 監護人寄出「殘疾人士身分」個人八達通申請表。</li>
              <li>
                如沒有收到社署寄出的已核實申請人資格的「殘疾人士身份」個人八達通申請表，可向所屬的社會保障辦事處補領；或到港鐵客務中心索取申請表。
                <div className="ml-4 text-gray-600">
                  <p className="text-lg">社會保障辦事處：</p>
                  <a href="https://www.swd.gov.hk/storage/asset/section/248/sc/SSFUsc_20230220.pdf" className="text-blue-600 hover:text-blue-800 underline break-all">https://www.swd.gov.hk/storage/asset/section/248/sc/SSFUsc_20230220.pdf</a>
                </div>
              </li>
              <li>申請人須將已填妥的申請表遞交到港鐵客務中心。</li>
              <li>申請「殘疾人士身份」個人八達通須同時繳交八達通按金50元。</li>
            </ol>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-700">(iii) 詳情見網站：</h3>
            <div className="ml-4">
              <a href="https://www.octopus.com.hk/sc/consumer/octopus-cards/products/on-loan/joyyou.html" className="text-blue-600 hover:text-blue-800 underline break-all">https://www.octopus.com.hk/sc/consumer/octopus-cards/products/on-loan/joyyou.html</a>
            </div>
          </div>
        </section>

        {/* 二元優惠計劃 – 樂悠咭 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">二元優惠計劃 – 樂悠咭</h2>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-700">(i) 申請對象：</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-600">
              <li className="text-lg">60歲或以上香港居民</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-700">(ii) 申請流程：</h3>
            <div className="ml-4 space-y-4 text-gray-600">
              <div>
                <p className="font-medium important-text">方式一：透過八達通App申請，詳細申請流程請參考樂悠咭網頁：</p>
                <a href="https://www.octopus.com.hk/sc/consumer/octopus-cards/products/on-loan/joyyou.html" className="text-blue-600 hover:text-blue-800 underline break-all">https://www.octopus.com.hk/sc/consumer/octopus-cards/products/on-loan/joyyou.html</a>
              </div>
              <div>
                <p className="font-medium important-text">方式二：索取申請表以郵遞方式申請</p>
                <ol className="list-decimal list-inside ml-4 space-y-2">
                  <li>經港鐵客務中心、社會福利署社會保障辦公室等指定派發地點(具體請參考樂悠咭網頁)索取附有免郵費回郵信封的申請表格</li>
                  <li>郵遞寄出：填妥申請表格後，請將表格的第2頁剪下，並使用隨附的免郵費回郵信封將表格寄回</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-700">(iii) 備註：</h3>
            <ul className=" ml-4 space-y-2 ">
                <li className="important-text">收到申請後，會收到短訊並附有申請參考編號。請記錄此申請參考編號。</li>
                <li className="important-text">請留意，申請人切勿透過短訊提交任何個人資料或費用。八達通卡有限公司亦不會以Whatsapp方式向申請人發送訊息。</li>
                <li className="important-text">如申請資料及/或證明文件不齊或不正確，會收到由八達通卡有限公司發出的短訊、電郵或信件，要求你通過郵寄、電郵，或八達通顧客服務熱線提交補充資料及/或所須證明文件。</li>
                <li className="important-text">提交補充資料及/或證明文件時，請註明申請編號。</li>
            </ul>
          </div>
        </section>
      </div>

      <footer className="mt-8 pt-4 border-t border-gray-200 text-lg text-gray-500">
        <p><TelephoneIcon className="inline-block w-6 h-6 mr-1 " />八達通顧客服務專線：2266 2222</p>
        <p><TelephoneIcon className="inline-block w-6 h-6 mr-1 " />樂悠咭自動值服務申請：2266 2338</p>
        <p><TelephoneIcon className="inline-block w-6 h-6 mr-1 " />港鐵熱線：2881 8888</p>
      </footer>
    </div>
  );
};

export default DiscountPage;