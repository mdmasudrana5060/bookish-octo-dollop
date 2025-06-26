import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebookIcon from "@/assets/icons/facebook-1-svgrepo-com.svg";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17,26,34)" py={5}>
      <Container>
        <Stack direction="row" justifyContent="center" gap={4}>
          <Typography color="#fff" component={Link} href="/login">
            Consultation
          </Typography>
          <Typography color="#fff" component={Link} href="/login">
            Health Plans
          </Typography>
          <Typography color="#fff" component={Link} href="/login">
            Medicine
          </Typography>
          <Typography color="#fff" component={Link} href="/login">
            Diagonostics
          </Typography>
          <Typography color="#fff" component={Link} href="/login">
            NGOs
          </Typography>
        </Stack>
        <Stack direction="row" gap={2} justifyContent="center" py={3}>
          <Image
            src={facebookIcon}
            width={30}
            height={30}
            alt="facebook Icon"
          />
          <Image
            src={facebookIcon}
            width={30}
            height={30}
            alt="facebook Icon"
          />
          <Image
            src={facebookIcon}
            width={30}
            height={30}
            alt="facebook Icon"
          />
          <Image
            src={facebookIcon}
            width={30}
            height={30}
            alt="facebook Icon"
          />
        </Stack>
        <div className="border-b-[1px] border-dashed"></div>
        <Stack
          direction="row"
          gap={2}
          justifyContent="space-between"
          alignItems="center"
          py={3}
        >
          <Typography component="p" color="white">
            @copy:2024 Ph HealthCare.All Rights Reserved.
          </Typography>
          <Typography
            color="white"
            variant="h4"
            component={Link}
            href="/"
            fontWeight={600}
          >
            P
            <Box component="span" color="primary.main">
              H
            </Box>{" "}
            Health Care
          </Typography>
          <Typography component="p" color="white">
            Privacy Policy! Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};
export default Footer;
