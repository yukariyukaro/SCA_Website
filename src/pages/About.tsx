import React from 'react';
import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="relative flex items-center justify-between py-4 px-6 bg-[#FFC47E] overflow-visible">
          <div className="flex items-center gap-3">
            <img src="/img/home/logo.svg" alt="logo" className="h-20 w-20 object-contain rounded-full border-4 border-white bg-white" />
            <h1 className="text-4xl font-bold text-white">關於我們</h1>
          </div>
        </header>

        {/* Main Content */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-[#a45a52] mb-6">我們的故事</h2>
          <p className="text-gray-700 text-xl mb-4">這裡是關於我們團隊與使命的介紹...</p>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default About; 