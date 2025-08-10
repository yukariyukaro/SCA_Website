import React from 'react';

const DownloadIndex: React.FC = () => {
  return (
    <div>
      <p className="text-gray-700 text-xl mb-6">
        歡迎下載小腦萎縮症社區資源包相關手冊和指南文檔
      </p>
      
      <div className="space-y-6">
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">患者指南</h3>
          <p className="text-gray-600 mb-4">
            專為小腦萎縮症患者設計的實用指南，包含疾病知識、日常護理建議和資源連結。
          </p>
          <button className="bg-[#a45a52] text-white px-6 py-2 rounded-lg hover:bg-[#8a4a42] transition-colors">
            下載 PDF
          </button>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">照護者手冊</h3>
          <p className="text-gray-600 mb-4">
            為家屬和照護者提供全面的照護指導，包括實用技巧、心理支持和資源資訊。
          </p>
          <button className="bg-[#a45a52] text-white px-6 py-2 rounded-lg hover:bg-[#8a4a42] transition-colors">
            下載 PDF
          </button>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">運動指南</h3>
          <p className="text-gray-600 mb-4">
            適合小腦萎縮症患者的運動和復健指導，幫助維持身體機能和改善生活品質。
          </p>
          <button className="bg-[#a45a52] text-white px-6 py-2 rounded-lg hover:bg-[#8a4a42] transition-colors">
            下載 PDF
          </button>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">資源清單</h3>
          <p className="text-gray-600 mb-4">
            完整的社區資源列表，包含醫療服務、社會支援、交通出行等各方面的實用資訊。
          </p>
          <button className="bg-[#a45a52] text-white px-6 py-2 rounded-lg hover:bg-[#8a4a42] transition-colors">
            下載 PDF
          </button>
        </div>
      </div>

      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-blue-800 text-sm">
          <strong>注意：</strong>所有文檔均為繁體中文版本，如需其他語言版本或有任何問題，請聯繫我們的支援團隊。
        </p>
      </div>
    </div>
  );
};

export default DownloadIndex;
