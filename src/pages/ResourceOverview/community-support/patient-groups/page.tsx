import React from 'react';
import TelephoneIcon from '../../../../components/Icons/Telephone';

const PatientGroupsPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">介紹：</h2>
        <p className="text-lg leading-relaxed important-text">本節收錄之病人組織旨在為罕見病群體及其家屬提供互助支援。</p>
        <p className="text-lg leading-relaxed">
          香港小腦萎縮症協會專為確診患者及家屬設立，秉持「自助互助」核心理念，透過經驗分享與情感支持，協助會員積極面對疾病挑戰；另香港肌健協會專注服務神經肌肉疾病群體。兩組織皆覆蓋全港，不定期舉辦關於治療、復康及生活的各類活動，促進患者之間的互助互勉，致力於建構溫暖的疾病共照網絡。
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">香港小腦萎縮症協會：</h2>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(i) 介紹：</h3>
          <p className="text-lg leading-relaxed important-text">專為小腦萎縮症病友及家屬而設，秉持自助互助的精神，鼓勵會員努力活出生命的光輝。</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(ii) 服務對象：</h3>
          <p className="text-lg ml-4">已確診的小腦萎縮症患者及直系家屬</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(iii) 網頁版本：</h3>
          <a
            href="https://hkscaa.org/mobile"
            className="text-blue-600 hover:text-blue-800 underline break-all ml-4"
          >
            https://hkscaa.org/mobile
          </a>
          <p className="text-lg flex items-center ml-4">
            <TelephoneIcon className="w-5 h-5 mr-2" />
            2336 5639
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">香港肌健協會：</h2>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(i) 介紹：</h3>
          <p className="text-lg leading-relaxed important-text">專為神經 – 肌肉疾病患者及家屬服務的病人互助組織。</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(ii) 服務對象：</h3>
          <p className="text-lg ml-4">確診的肌肉疾病患者及其年齡滿十八歲之直系家屬。</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(iii) 網頁版本（登記成為會員）：</h3>
          <a
            href="https://hknmda.org.hk/加入我們/"
            className="text-blue-600 hover:text-blue-800 underline break-all ml-4"
          >
            加入我們 – HKNMDA – 香港肌健協會
          </a>
          <p className="text-lg flex items-center ml-4">
            <TelephoneIcon className="w-5 h-5 mr-2" />
            2338 4123
          </p>
        </div>
      </section>
    </div>
  );
};

export default PatientGroupsPage;
