import React from 'react';
import AlertCircle from '../Icons/AlertCircle';

interface AttentionProps {
  message: string;
  className?: string;
}

const Attention: React.FC<AttentionProps> = ({ 
  message, 
  className = '' 
}) => {
  return (
    <div 
      className={`inline-flex items-center gap-4 p-3 rounded-lg border border-[#a45a52] bg-[#fffbeb] max-w-fit ${className}`}>
      <AlertCircle 
        className="flex-shrink-0" 
        width={25} 
        height={25} 
      />
      <div 
        className="text-[#682d03] text-right font-black leading-tight"
style={{
          fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif',
          fontWeight: 860,
          fontSize: 'var(--font-size-base)', // use global responsive font size
          lineHeight: '1.5rem',
          letterSpacing: '0px'
        }}
      >
        {message}
      </div>
    </div>
  );
};

export default Attention;