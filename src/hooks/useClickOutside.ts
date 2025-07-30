import { useEffect, useRef } from 'react';
import type { UseClickOutsideReturn } from '../types/navigation';

/**
 * 点击外部关闭Hook
 * 当用户点击指定元素外部时，执行回调函数
 * 
 * @param callback 点击外部时执行的回调函数
 * @returns 包含ref的对象，需要绑定到目标元素
 */
export function useClickOutside(
  callback: () => void
): UseClickOutsideReturn {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // 如果点击的元素不在ref指向的元素内部，则执行回调
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    // 添加事件监听器
    document.addEventListener('mousedown', handleClickOutside);
    
    // 清理函数：移除事件监听器
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback]);

  return { ref };
}