import React from 'react';

const MedicalTrainingPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">住宿照顧（無需中央轉介）</h2>
        <p className="text-lg leading-relaxed important-text">
        為在社區中生活，但在個人照顧方面需要家人協助的殘疾人士提供臨時而短暫的住宿照顧。
        </p>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(i) 殘疾人士及其照顧者可直接向中心申請，亦可經由各醫務社會服務部、綜合家庭服務中心、特殊學校或康復服務的社工轉介。</h3>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(ii) 願意過群體生活，而且沒有影響群體生活的行為問題；及沒有傳染病（需要醫生檢查證明)。</h3>
        </div>
        <div className="space-y-3">
          <p className="text-lg font-semibold important-text">不同宿舍空位情況參考暫託服務/緊急住宿空置名額查詢系統：</p>
          <p className="text-lg ml-4">(ii) 申請人應於入住前由註冊醫生使用「殘疾人士院舍住客體格檢驗報告書」進行健康檢查。</p>
          <a href="https://www.swd.gov.hk/storage/asset/section/709/tc/Operational%20Guideline%20on%20RRS_Oct24_Chi.pdf" className="text-blue-600 hover:text-blue-800 underline break-all ml-4">https://www.swd.gov.hk/storage/asset/section/709/tc/Operational%20Guideline%20on%20RRS_Oct24_Chi.pdf</a>
        </div>
        <div className="space-y-3">
          <p className="text-lg leading-relaxed important-text">服務收費按日計算，不同照顧程度的院舍收費不同：</p>
          <p className="text-lg font-semibold important-text">現時領取傷殘津貼的服務使用者：</p>
          <p className="text-lg font-semibold important-text">現時非領取傷殘津貼的服務使用者：</p>
        </div>
        <div className="my-4">
          <img src="img/资源总览/住宿照顾/image3.png" alt="暫托服務說明" className="w-full sm:w-4/5 lg:w-2/3" />
        </div>

      </section>
    </div>
  );
};

export default MedicalTrainingPage;
