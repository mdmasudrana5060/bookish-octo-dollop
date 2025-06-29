import { USER_ROLE } from "@/constants/role";
import { DrawerItem, UserRole } from "@/types";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
export const drawerItems = (role: UserRole): DrawerItem[] => {
  console.log(role);
  const roleMenus: DrawerItem[] = [];
  switch (role) {
    case USER_ROLE.SUPER_ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Manage Admin",
          path: `${role}/manage-admins`,
          icon: GroupIcon,
        }
      );
      break;
    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Manage Doctors",
          path: `${role}/manage-doctor`,
          icon: GroupIcon,
        }
      );
      break;
    default:
  }

  return [...roleMenus];
};
