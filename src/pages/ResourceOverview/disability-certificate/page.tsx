import React from 'react';
import Attention from '../../../components/specialFont/Attention';
import TelephoneIcon from '../../../components/Icons/Telephone';
const DisabilityCertificatePage: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* 温馨提示 */}
      <Attention message="溫馨提示 : 殘疾人士證明很重要,建議患者朋友們早點申請。" />
      
      {/* 主要内容 */}
      <div className="space-y-4  text-gray-800">
          <p className="text-lg leading-relaxed">
          小腦萎縮症患者屬於身體機能暫時受損人士, 除非另有醫生證明, 否則需要每2年續証。
        </p>
        
        <p className="text-lg leading-relaxed font-medium">
          首次簽發或續証都無需繳費。
        </p>
        
        {/* 首次签发 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-900">首次簽發：</h2>
          
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-800">(i) 申請方式：</h3>
            
            <div className="space-y-2 ml-4">
              <div>
                <span className="font-medium text-lg important-text">方式一：網上申請，請點擊下方鏈接</span>
                <br />
                <a href="https://crr1.lwb.gov.hk/crr_public/chi/guidance.htm" 
                   className="text-blue-600 hover:text-blue-800 underline break-all">
                  https://crr1.lwb.gov.hk/crr_public/chi/guidance.htm
                </a>
              </div>
              
              <div>
                <span className="font-medium text-lg important-text">方式二：郵寄</span>
                <ol className="list-decimal list-inside ml-4 space-y-1 text-lg mt-2">
                  <li>
                    下載申請表 (編號CRR3)
                    <br />
                    <a href="https://www.lwb.gov.hk/tc/servicedesk/crr_rc/download_crr.html" 
                       className="text-blue-600 text-lg hover:text-blue-800 underline break-all">
                      https://www.lwb.gov.hk/tc/servicedesk/crr_rc/download_crr.html
                    </a>
                  </li>
                  <li>
                    申請表格 + 所需文件 (見下文第ii部) 寄交:
                    <br />
                    <span className="text-gray-700 text-lg">
                      香港黃竹坑業勤街23號The Hub 10樓1001室勞工及福利局康復服務中央檔案室
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-800">(ii) 所需文件：</h3>
            
            <ol className="list-decimal list-inside ml-4 space-y-3">
              <li className="font-medium text-lg important-text">身份證明文件</li>
              
              <li>
                <span className="font-medium text-lg important-text">殘疾證明文件</span>
                <div className="ml-4 mt-2">
                  <p className="font-medium mb-2 text-lg">例子：</p>
                  <ol className="list-decimal list-inside space-y-1 text-lg">
                    <li>殘疾證明: 由香港註冊醫生(公營或私立)簽發。</li>
                    <li>傷殘類別證明書: 由香港註冊醫生、社會福利署資助的康復機構、職業訓練局轄下展亮技能發展中心的主管簽發。</li>
                    <li>殘疾駕駛人士證明: 由運輸署、社會福利署簽發。</li>
                  </ol>
                  
                  <div className="mt-3 text-lg text-gray-600">
                    <p className="font-medium mb-1 text-lg">註：</p>
                    <ol className="list-decimal list-inside space-y-1">
                      <li>須於最近6個月內簽發; 並列明申請人的每項殘疾類別及有關殘疾情況可能持續的時間。</li>
                      <li>醫生必須為病人診症後,才可發出殘疾證明。</li>
                      <li>未涵蓋到的殘疾證明文件請聯絡: 2180 9384</li>
                    </ol>
                  </div>
                </div>
              </li>
              
              <li>
                <span className="font-medium text-lg important-text">一張彩色近照</span>
                <div className="ml-4 mt-2">
                  <p className="text-lg font-medium mb-2">要求：</p>
                  <ol className="list-decimal list-inside space-y-1 text-lg">
                    <li>近半年彩色證件相片；</li>
                    <li>護照尺寸的照片；</li>
                    <li>以純藍/紅褐色背景為佳。</li>
                  </ol>
                </div>
              </li>
            </ol>
            
             <div className="mt-3 text-lg text-gray-600">
              <span className="font-medium important-text">代申請人：需提交與申請者關係的證明文件副本。</span>
       
            </div>
          </div>
        </section>
        
        {/* 续证 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-900">續証：</h2>
          
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-800">(i) 溫馨提示：</h3>
             <p className="text-lg leading-relaxed ml-4 important-text">
              須於該證有效日期屆滿前2個月內, 提出續證申請, 否則該證件到期後便會自動失效。
            </p>
            <div className="ml-4">
              <p className="font-medium mb-2">例子：</p>
              <p className="text-lg text-gray-700">
                有效日期是12月31日,患者須於11月1日至12月30日內續証。
              </p>
            </div>
          </div>
          
          <div className="space-y-2">
             <h3 className="text-lg font-semibold text-gray-800 ">(ii) 續証方式：</h3>
            <div className="ml-4 space-y-2">
              <div>
                <span className="font-medium important-text">方式一：網上申請，請點擊下方鏈接</span>
                <br />
                <a href="https://crr1.lwb.gov.hk/crr_public/chi/guidance.htm" 
                   className="text-blue-600 hover:text-blue-800 underline break-all">
                  https://crr1.lwb.gov.hk/crr_public/chi/guidance.htm
                </a>
              </div>
              <div>
                <span className="font-medium text-lg important-text">方式二：郵寄</span>
                <br />
                <span className="text-gray-700">見上文第i部</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-800">(iii) 所需文件：</h3>
            <ol className="list-decimal list-inside ml-4 space-y-2">
              <li className="font-medium text-lg important-text">身份證明文件</li>
              <li>
                <span className="font-medium text-lg important-text">殘疾證明文件</span>
                <br />
                <span className="text-lg text-gray-700">例子：見上文第ii部</span>
              </li>
              <li>
                <span className="font-medium text-lg important-text">一張彩色近照</span>
                <br />
                <span className="text-lg text-gray-700">要求：見上文第ii部</span>
              </li>
            </ol>
            
            <div className="mt-3 text-lg important-text text-gray-600">
              如提前申請續證,患者須另外提交一封陳述提前續證理由的信件。
            </div>
          </div>
        </section>
        
        {/* 备注 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-900">備註：</h2>
          <div className="space-y-2 ml-4">
            <p className="text-lg leading-relaxed">
              如遺失該證明, 須遞交申請表格、身份證明文件副本及陳述補領理由的信件。
            </p>
            <p className="text-lg leading-relaxed">
              補領費用為港幣58元, 費用會按時調整。如有經濟困難, 可申請豁免補領費用。
            </p>
            <div className="space-y-1">
              <p className="font-medium text-lg important-text">詳情見:</p>
              <a href="https://crr1.lwb.gov.hk/crr_public/chi/guidance.htm" 
                 className="text-blue-600 hover:text-blue-800 underline break-all">
                https://crr1.lwb.gov.hk/crr_public/chi/guidance.htm
              </a>
              
            </div>
          </div>
        </section>
        
        {/* 资料参考 */}
        <footer className="mt-8 pt-4 border-t border-gray-200">
        <p className="font-medium text-lg"> <TelephoneIcon className="inline-block w-6 h-6 mr-1 " /> 2180 9384</p>
          <p className="text-lg text-gray-600 italic">
            資料參考 :《殘疾人士登記證》申請指引
          </p>
        </footer>
      </div>
    </div>
  );
};

export default DisabilityCertificatePage;
