import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// 面包屑项接口
export interface BreadcrumbItem {
  label: string;
  path?: string;
}

// 面包屑组件Props
export interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  className?: string;
}

/**
 * 面包屑导航组件
 * 显示当前路由位置，样式参考Figma设计稿中的Compass部分
 */
export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  const location = useLocation();
  
  // 如果没有传入items，根据当前路径自动生成
  const breadcrumbItems = items || generateBreadcrumbFromPath(location.pathname);
  
  if (breadcrumbItems.length === 0) {
    return null;
  }

  return (
    <nav className={`bg-[#FFFBCC] rounded-lg px-4 py-3 ${className}`} aria-label="面包屑导航">
      <ol className="flex items-center space-x-2 text-[#A45A52]" style={{fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif'}}>
        {breadcrumbItems.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <span className="mx-2 text-[#A45A52] font-medium">{'>'}</span>
            )}
            {item.path && index < breadcrumbItems.length - 1 ? (
              <Link 
                to={item.path} 
                className="text-[#A45A52] hover:text-[#8B4A42] transition-colors duration-200 font-medium text-lg"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-[#A45A52] font-medium text-lg">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

/**
 * 根据路径自动生成面包屑项
 */
function generateBreadcrumbFromPath(pathname: string): BreadcrumbItem[] {
  const pathSegments = pathname.split('/').filter(segment => segment !== '');
  const breadcrumbs: BreadcrumbItem[] = [
    { label: '首頁', path: '/' }
  ];
  
  // 路径映射
  const pathMap: Record<string, string> = {
    'resources': '資源總覽',
    'disability-certificate': '殘疾人士證明',
    'transportation': '交通出行',
    'residential-care': '居住&日間照顧',
    'medical-rehabilitation': '醫療&復康',
    'community-support': '攜手共行',
    'employment-training': '就業&培訓',
    'about': '關於我們',
    'mission': '項目使命',
    'team': '團隊介紹',
    'partners': '合作夥伴',
    'contact': '聯絡方式',
    'download': '手冊下載'
  };
  
  let currentPath = '';
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const label = pathMap[segment] || segment;
    
    // 最后一个项目不需要链接
    if (index === pathSegments.length - 1) {
      breadcrumbs.push({ label });
    } else {
      breadcrumbs.push({ label, path: currentPath });
    }
  });
  
  return breadcrumbs;
}

export default Breadcrumb;