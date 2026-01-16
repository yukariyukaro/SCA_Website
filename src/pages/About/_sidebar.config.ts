import type { SidebarMenuItem } from "../../components/SidebarMenu/SidebarMenu";

export const aboutSidebarItems: SidebarMenuItem[] = [
  {
    id: "team",
    label: "我們的團隊",
    path: "/about/team",
    description: "團隊成員介紹",
  },
  { id: "faq", label: "Q&A", path: "/about/faq", description: "常見問題" },
];
