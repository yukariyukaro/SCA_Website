import React, { useState } from 'react';

const DownloadIndex: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);

  // 下载PDF文件的函数
  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      setDownloadProgress(0);

      // 获取PDF文件的URL
      const pdfUrl = '/_SCA小冊子(1).pdf';
      
      // 使用fetch下载文件
      const response = await fetch(pdfUrl);
      
      if (!response.ok) {
        throw new Error(`下载失败: ${response.status} ${response.statusText}`);
      }

      // 获取文件内容
      const blob = await response.blob();
      
      // 创建下载链接
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'SCA小冊子.pdf'; // 设置下载文件名
      
      // 触发下载
      document.body.appendChild(link);
      link.click();
      
      // 清理
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      setDownloadProgress(100);
      
  
      
    } catch (error) {
      console.error('下载错误:', error);
      alert(`下載失敗: ${error.message}`);
    } finally {
      setIsDownloading(false);
      setDownloadProgress(0);
    }
  };

  return (
    <div>
      <p className="text-gray-700 text-xl mb-6">
        歡迎下載小腦萎縮症患者手冊
      </p>
      
      <div className="space-y-6">
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">患者手冊</h3>
          <p className="text-gray-600 mb-4">
            專為小腦萎縮症患者設計的手冊，包含疾病知識、日常護理建議、運動指導和社區資源連結等實用資訊。
          </p>
          
          {/* 下载按钮 */}
          <button 
            onClick={handleDownload}
            disabled={isDownloading}
            className={`px-6 py-2 rounded-lg transition-colors ${
              isDownloading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-[#a45a52] hover:bg-[#8a4a42]'
            } text-white`}
          >
            {isDownloading ? '下載中...' : '下載 PDF'}
          </button>
          
          {/* 下载进度条 */}
          
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
