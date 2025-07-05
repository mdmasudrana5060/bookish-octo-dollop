import { USER_ROLE } from "@/constants/role";
import { DrawerItem, UserRole } from "@/types";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";
import EventIcon from "@mui/icons-material/Event";
import SettingsIcon from "@mui/icons-material/Settings";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MedicationIcon from "@mui/icons-material/Medication";
import CategoryIcon from "@mui/icons-material/Category";

export const drawerItems = (role: UserRole): DrawerItem[] => {
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
          title: "Manage Admins",
          path: `${role}/manage-admins`,
          icon: GroupIcon,
        },
        {
          title: "System Settings",
          path: `${role}/settings`,
          icon: SettingsIcon,
        },
        {
          title: "Audit Logs",
          path: `${role}/logs`,
          icon: ListAltIcon,
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
          path: `${role}/manageDoctor`,
          icon: GroupIcon,
        },
        {
          title: "Specialities",
          path: `${role}/specialities`,
          icon: CategoryIcon,
        },
        {
          title: "Manage Patients",
          path: `${role}/manage-patient`,
          icon: PersonIcon,
        },
        {
          title: "Appointments",
          path: `${role}/appointments`,
          icon: EventIcon,
        }
      );
      break;

    case USER_ROLE.DOCTOR:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "My Appointments",
          path: `${role}/appointments`,
          icon: CalendarMonthIcon,
        },
        {
          title: "Patient Records",
          path: `${role}/patients`,
          icon: DescriptionIcon,
        },
        {
          title: "Prescriptions",
          path: `${role}/prescriptions`,
          icon: MedicationIcon,
        }
      );
      break;

    case USER_ROLE.PATIENT:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Find Doctor",
          path: `${role}/find-doctor`,
          icon: SearchIcon,
        },
        {
          title: "My Appointments",
          path: `${role}/appointments`,
          icon: EventIcon,
        },
        {
          title: "Prescriptions",
          path: `${role}/prescriptions`,
          icon: DescriptionIcon,
        },
        {
          title: "Medical Records",
          path: `${role}/records`,
          icon: FolderSharedIcon,
        }
      );
      break;

    default:
      break;
  }

  return [...roleMenus];
};
