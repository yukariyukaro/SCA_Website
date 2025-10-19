import type { SidebarMenuItem } from '../../components/SidebarMenu/SidebarMenu';

export const resourceSidebarItems: SidebarMenuItem[] = [
  { 
    id: 'disability-certificate', 
    label: '殘疾人士證明', 
    path: '/resources/disability-certificate', 
    description: '殘疾人士證明申請和相關服務' 
  },
  { 
    id: 'transportation', 
    label: '交通出行', 
    description: '無障礙交通和出行支援服務',
    children: [
      { id: 'transportation-discount', label: '殘疾人交通優惠', path: '/resources/transportation/discount', description: '殘疾人士交通優惠政策和申請' },
      { id: 'transportation-accessibility', label: '無障礙出行', path: '/resources/transportation/accessibility', description: '無障礙交通設施和服務' }
    ]
  },
  { 
    id: 'residential-care', 
    label: '居住&日間照顧', 
    path: '/resources/residential-care', 
    description: '住宿和日間照顧服務',
    children: [
      { id: 'residential-community-care', label: '社區日間照顧及支援', path: '/resources/residential-care/community', description: '社區日間照顧和支援服務' },
      { id: 'residential-accommodation', label: '住宿照顧', path: '/resources/residential-care/accommodation', description: '住宿照顧服務和設施' }
    ]
  },
  { 
    id: 'medical-rehabilitation', 
    label: '醫療&復康', 
    path: '/resources/medical-rehabilitation', 
    description: '醫療和復康治療服務',
    children: [
      { id: 'medical-equipment-rental', label: '醫療器材租借', path: '/resources/medical-rehabilitation/equipment', description: '醫療器材租借服務' },
      { id: 'medical-resources-training', label: '醫療資源及康復訓練', path: '/resources/medical-rehabilitation/training', description: '醫療資源和康復訓練服務' }
    ]
  },
  { 
    id: 'community-support', 
    label: '攜手共行', 
    path: '/resources/community-support', 
    description: '社區支援和互助服務',
    children: [
      { id: 'community-patient-groups', label: '病人互助組織', path: '/resources/community-support/patient-groups', description: '病人互助組織和支援網絡' },
      { id: 'community-psychological-support', label: '心理與社交支持', path: '/resources/community-support/psychological', description: '心理健康和社交支持服務' }
    ]
  },
  { 
    id: 'employment-training', 
    label: '就業&培訓', 
    path: '/resources/employment-training', 
    description: '就業支援和職業培訓服務',
    children: [
      { id: 'employment-caregiver-training', label: '照顧者培訓', path: '/resources/employment-training/caregiver', description: '照顧者技能培訓課程' },
      { id: 'employment-vocational-rehabilitation', label: '職業康復及輔助就業', path: '/resources/employment-training/vocational', description: '職業康復和輔助就業服務' }
    ]
  }
];
