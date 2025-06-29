import { List } from "@mui/material";
import Box from "@mui/material/Box";

// import Image from "next/image";
import { drawerItems } from "@/utils/drawerItems";
import { UserRole } from "@/types";
import SidebarItem from "./SidebarItem";
// import assets from "@/assets";

const SideBar = () => {
  return (
    <Box>
      {/* <Stack>
        <Image
          src={assets.icons.check}
          height={40}
          width={40}
          alt="logo of ph health care"
        ></Image>
        <Typography variant="h6" component="h1">
          PH Health Care
        </Typography>
      </Stack> */}
      <List>
        {drawerItems("super_admin" as UserRole).map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};
export default SideBar;
