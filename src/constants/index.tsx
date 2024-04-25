import {
  Schedule,
  Ads,
  Apps,
  Analytics,
  CMSUsers,
  EngagementUnits,
  Roles,
  Stories,
  UserGuide,
} from "@/assets/svg";
import { IMenuItem } from "@/modules";

export const menuGroups: IMenuItem[][] = [
  [
    {
      label: "Schedule",
      icon: <Schedule />,
      key: "/schedule",
    },
    {
      label: "Analytics",
      icon: <Analytics />,
      key: "/analytics",
    },
    {
      label: "Stories",
      icon: <Stories />,
      key: "/stories",
    },
    {
      label: "EngagementUnits",
      icon: <EngagementUnits />,
      key: "/units",
    },
    {
      label: "Ads",
      icon: <Ads />,
      key: "/ads",
    },
  ],
  [
    {
      label: "CMSUsers",
      icon: <CMSUsers />,
      key: "/users",
    },
    {
      label: "Roles",
      icon: <Roles />,
      key: "/roles",
    },
    {
      label: "Apps",
      icon: <Apps />,
      key: "/apps",
    },
  ],
  [
    {
      label: "UserGuide",
      icon: <UserGuide />,
      key: "/guide",
    },
  ],
];
