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
      const pdfUrl = '_小腦萎縮症 小冊子-FINAL.pdf';
      
      // 使用fetch下载文件
      const response = await fetch(encodeURI(pdfUrl));
      
      if (!response.ok) {
        throw new Error(`下載失敗: ${response.status} ${response.statusText}`);
      }

      // 获取文件内容
      const blob = await response.blob();
      
      // 创建下载链接
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = '小腦萎縮症 小冊子-FINAL.pdf'; // 设置下载文件名
      
      // 触发下载
      document.body.appendChild(link);
      link.click();
      
      // 清理
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      setDownloadProgress(100);
      
  
      
    } catch (error) {
      console.error('下載錯誤:', error);
      const message = error instanceof Error ? error.message : String(error);
      alert(`下載失敗: ${message}`);
    } finally {
      setIsDownloading(false);
      setDownloadProgress(0);
    }
  };

  return (
    <div>
      <p className="text-gray-700 text-xl mb-6">
        歡迎下載小腦萎縮症社區資源包
      </p>
      
      <div className="space-y-6">
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">社區資源包</h3>
          <p className="text-gray-600 mb-4">
            小腦萎縮症社區資源包中包含了交通出行、日間照顧、醫療復康等社區資源，希望這些資源可以從生活的多個方面幫到患者和照顧者朋友們。
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
          <div className="mt-4">
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-[#a45a52]" style={{ width: `${downloadProgress}%` }} />
            </div>
            <p className="text-sm text-gray-500 mt-2">進度：{downloadProgress}%</p>
          </div>
          
        </div>
      </div>

      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-blue-800 text-sm">
        2025年8月更新
        </p>
      </div>
    </div>
  );
};

export default DownloadIndex;
