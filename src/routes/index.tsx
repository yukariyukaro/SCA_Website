import React from 'react';
import { Outlet } from 'react-router-dom';

// 懒加载页面组件
const AppLayout = React.lazy(() => import('../components/AppLayout'));
const Home = React.lazy(() => import('../pages/Home'));
const AboutLayout = React.lazy(() => import('../pages/About/layout'));
const AboutIndex = React.lazy(() => import('../pages/About/index/page'));
const AboutMission = React.lazy(() => import('../pages/About/mission/page'));
const AboutTeam = React.lazy(() => import('../pages/About/team/page'));
const AboutPartners = React.lazy(() => import('../pages/About/partners/page'));
const AboutContact = React.lazy(() => import('../pages/About/contact/page'));
const ResourceOverviewLayout = React.lazy(() => import('../pages/ResourceOverview/layout'));
const ResourceOverviewIndex = React.lazy(() => import('../pages/ResourceOverview/index/page'));
const DisabilityCertificate = React.lazy(() => import('../pages/ResourceOverview/disability-certificate/page'));
const Transportation = React.lazy(() => import('../pages/ResourceOverview/transportation/page'));
const ResidentialCare = React.lazy(() => import('../pages/ResourceOverview/residential-care/page'));
const MedicalRehabilitation = React.lazy(() => import('../pages/ResourceOverview/medical-rehabilitation/page'));
const CommunitySupport = React.lazy(() => import('../pages/ResourceOverview/community-support/page'));
const EmploymentTraining = React.lazy(() => import('../pages/ResourceOverview/employment-training/page'));
const DownloadLayout = React.lazy(() => import('../pages/download/layout'));
const DownloadIndex = React.lazy(() => import('../pages/download/index/page'));

export const routes = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },

      // About 分类：父级 + 子路由（保持临时同一组件，后续拆分到各自 page.tsx）
      {
        path: 'about',
        element: <AboutLayout />,
        children: [
          { index: true, element: <AboutIndex /> },
          { path: 'mission', element: <AboutMission /> },
          { path: 'team', element: <AboutTeam /> },
          { path: 'partners', element: <AboutPartners /> },
          { path: 'contact', element: <AboutContact /> },
        ],
      },

      // Resources 分类
      {
        path: 'resources',
        element: <ResourceOverviewLayout />,
        children: [
          { index: true, element: <ResourceOverviewIndex /> },
          { path: 'disability-certificate', element: <DisabilityCertificate /> },
          { path: 'transportation', element: <Transportation /> },
          { path: 'residential-care', element: <ResidentialCare /> },
          { path: 'medical-rehabilitation', element: <MedicalRehabilitation /> },
          { path: 'community-support', element: <CommunitySupport /> },
          { path: 'employment-training', element: <EmploymentTraining /> },
        ],
      },

      // Download 分类
      {
        path: 'download',
        element: <DownloadLayout />,
        children: [
          { index: true, element: <DownloadIndex /> },
        ],
      },
    ],
  },
];

export default routes;


