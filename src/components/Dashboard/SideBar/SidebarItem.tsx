"use client"; // if this is a client component

import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { DrawerItem } from "@/types";
import { usePathname } from "next/navigation";

type IProps = {
  item: DrawerItem;
};

const SidebarItem = ({ item }: IProps) => {
  const linkPath = `/dashboard/${item.path}`;
  const pathName = usePathname();
  const isActive = pathName === linkPath;

  return (
    <ListItem disablePadding>
      <Link href={linkPath} passHref legacyBehavior>
        <ListItemButton
          component="a"
          sx={{
            borderRight: isActive ? "3px solid #1586FD" : undefined,
            color: isActive ? "#1586FD" : "inherit",
            "& svg": {
              color: isActive ? "#1586FD" : "inherit",
            },
          }}
        >
          <ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </Link>
    </ListItem>
  );
};

export default SidebarItem;
