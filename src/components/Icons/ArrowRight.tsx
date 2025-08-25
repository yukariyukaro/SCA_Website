import React from 'react';

export interface ArrowRightProps {
  className?: string;
  size?: number;
}

/**
 * Arrow Right Icon Component
 * Returns a right-pointing arrow SVG icon
 */
export const ArrowRight: React.FC<ArrowRightProps> = ({ className = '', size = 20 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
};

export default ArrowRight;