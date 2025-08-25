import React from 'react';

interface AlertCircleProps {
  className?: string;
  width?: number;
  height?: number;
}

const AlertCircle: React.FC<AlertCircleProps> = ({ 
  className = '', 
  width = 40, 
  height = 40 
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M19.9999 13.333V19.9997M19.9999 26.6663H20.0166M36.6666 19.9997C36.6666 29.2044 29.2047 36.6663 19.9999 36.6663C10.7952 36.6663 3.33325 29.2044 3.33325 19.9997C3.33325 10.7949 10.7952 3.33301 19.9999 3.33301C29.2047 3.33301 36.6666 10.7949 36.6666 19.9997Z" 
        stroke="#682D03" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AlertCircle;