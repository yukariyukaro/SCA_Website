import type { SidebarMenuItem } from '../../components/SidebarMenu/SidebarMenu';

export const resourceSidebarItems: SidebarMenuItem[] = [
  { id: 'disability-certificate', label: '殘疾人士證明', path: '/resources/disability-certificate', description: '殘疾人士證明申請和相關服務' },
  { id: 'transportation', label: '交通出行', path: '/resources/transportation', description: '無障礙交通和出行支援服務' },
  { id: 'residential-care', label: '居住&日間照顧', path: '/resources/residential-care', description: '住宿和日間照顧服務' },
  { id: 'medical-rehabilitation', label: '醫療&復康', path: '/resources/medical-rehabilitation', description: '醫療和復康治療服務' },
  { id: 'community-support', label: '攜手共行', path: '/resources/community-support', description: '社區支援和互助服務' },
  { id: 'employment-training', label: '就業&培訓', path: '/resources/employment-training', description: '就業支援和職業培訓服務' }
];
