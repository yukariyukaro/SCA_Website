import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

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
const DiscountPage = React.lazy(() => import('../pages/ResourceOverview/transportation/discount/page'));
const AccessibilityPage = React.lazy(() => import('../pages/ResourceOverview/transportation/accessibility/page'));
const RehabusPage = React.lazy(() => import('../pages/ResourceOverview/transportation/accessibility/rehabus/page'));
const OtherBusesPage = React.lazy(() => import('../pages/ResourceOverview/transportation/accessibility/other-buses/page'));
const TaxiPage = React.lazy(() => import('../pages/ResourceOverview/transportation/accessibility/taxi/page'));


const NoCentralReferralPage = React.lazy(() => import('../pages/ResourceOverview/residential-care/accommodation/no-central-referral/page'));
const CentralReferralPage = React.lazy(() => import('../pages/ResourceOverview/residential-care/accommodation/central-referral/page'));
const CommunityCareIndexPage = React.lazy(() => import('../pages/ResourceOverview/residential-care/community/index/page'));
const CenterBasedPage = React.lazy(() => import('../pages/ResourceOverview/residential-care/community/center-based/page'));
const HomeBasedPage = React.lazy(() => import('../pages/ResourceOverview/residential-care/community/home-based/page'));
const IntegratedPage = React.lazy(() => import('../pages/ResourceOverview/residential-care/community/integrated/page'));
const NonSwdPage = React.lazy(() => import('../pages/ResourceOverview/residential-care/community/non-swd/page'));

const MedicalEquipment = React.lazy(() => import('../pages/ResourceOverview/medical-rehabilitation/equipment/page'));
const MedicalTraining = React.lazy(() => import('../pages/ResourceOverview/medical-rehabilitation/training/page'));

const PatientGroupsPage = React.lazy(() => import('../pages/ResourceOverview/community-support/patient-groups/page'));
const PsychologicalSupportPage = React.lazy(() => import('../pages/ResourceOverview/community-support/psychological/page'));
const CaregiverTrainingPage = React.lazy(() => import('../pages/ResourceOverview/employment-training/caregiver/page'));
const VocationalRehabilitationPage = React.lazy(() => import('../pages/ResourceOverview/employment-training/vocational/page'));
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
          { 
            path: 'transportation', 
            element: <Outlet />,
            children: [
              { index: true, element: <Navigate to="discount" replace /> },
              { path: 'discount', element: <DiscountPage /> },
              { 
                path: 'accessibility', 
                element: <Outlet />,
                children: [
                  { index: true, element: <AccessibilityPage /> },
                  { path: 'rehabus', element: <RehabusPage /> },
                  { path: 'other-buses', element: <OtherBusesPage /> },
                  { path: 'taxi', element: <TaxiPage /> }
                ]
              }
            ]
          },
          { 
            path: 'residential-care', 
            element: <Outlet />,
            children: [
              { index: true, element: <Navigate to="community" replace /> },
              { 
                path: 'community', 
                element: <Outlet />,
                children: [
                  { index: true, element: <CommunityCareIndexPage /> },
                  { path: 'center-based', element: <CenterBasedPage /> },
                  { path: 'home-based', element: <HomeBasedPage /> },
                  { path: 'integrated', element: <IntegratedPage /> },
                  { path: 'non-swd', element: <NonSwdPage /> }
                ]
              },
              { 
                path: 'accommodation', 
                element: <Outlet />,
                children: [
                  { index: true, element: <Navigate to="central-referral" replace /> },
                  { path: 'no-central-referral', element: <NoCentralReferralPage /> },
                  { path: 'central-referral', element: <CentralReferralPage /> }
                ]
              }

            ]
          },
          { 
            path: 'medical-rehabilitation', 
            element: <Outlet />,
            children: [
              { index: true, element: <Navigate to="equipment" replace /> },
              { path: 'equipment', element: <MedicalEquipment /> },
              { path: 'training', element: <MedicalTraining /> }
            ]
          },
          { 
            path: 'community-support', 
            element: <Outlet />,
            children: [
              { index: true, element: <Navigate to="patient-groups" replace /> },
              { path: 'patient-groups', element: <PatientGroupsPage /> },
              { path: 'psychological', element: <PsychologicalSupportPage /> },
            ],
          },
          { 
            path: 'employment-training', 
            element: <Outlet />,
            children: [
              { index: true, element: <Navigate to="caregiver" replace /> },
              { path: 'caregiver', element: <CaregiverTrainingPage /> },
              { path: 'vocational', element: <VocationalRehabilitationPage /> },
            ],
          },
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
