import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Skeleton } from './skeleton';
import { ImageOff } from 'lucide-react';

interface ImageWithStateProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
}

export const ImageWithState: React.FC<ImageWithStateProps> = ({
  src,
  alt,
  className,
  containerClassName,
  onLoad,
  onError,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoading(false);
    onLoad?.(e);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoading(false);
    setError(true);
    onError?.(e);
  };

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {/* 加载状态：显示骨架屏 */}
      {isLoading && (
        <Skeleton className="absolute inset-0 z-10 h-full w-full rounded-none" />
      )}

      {/* 错误状态：显示错误图标 */}
      {error && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-gray-100 text-gray-400">
          <ImageOff className="h-1/3 w-1/3 mb-2" />
        </div>
      )}

      {/* 图片本体 */}
      <img
        src={src}
        alt={alt}
        className={cn(
          "h-full w-full object-cover transition-opacity duration-500",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  );
};
