import { getUserInfo, removeUser } from "@/app/service/authService";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
const AuthButton = () => {
  const userInfo = getUserInfo();
  const router = useRouter();
  const handleLogOut = () => {
    removeUser();
    router.refresh();
  };
  return (
    <>
      {userInfo?.email ? (
        <Button color="error" onClick={handleLogOut}>
          Log out
        </Button>
      ) : (
        <Button component={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};
export default AuthButton;
