import React from 'react';
import { Loader2 } from 'lucide-react';

export const FullPageLoading: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-12 w-12 animate-spin text-[#FFC47E]" />
        <p className="text-lg font-medium text-gray-500 animate-pulse tracking-widest">
          載入中...
        </p>
      </div>
    </div>
  );
};
