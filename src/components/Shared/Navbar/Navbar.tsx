"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import dynamic from "next/dynamic";

const Navbar = () => {
  const AuthButton = dynamic(
    () => import("@/components/UI/AuthButton/AuthButton"),
    { ssr: false }
  );
  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h4" component={Link} href="/" fontWeight={600}>
          P
          <Box component="span" color="primary.main">
            H
          </Box>
          Health Care
        </Typography>

        <Stack direction="row" justifyContent="space-between" gap={4}>
          <Typography component={Link} href="/login">
            Consultation
          </Typography>
          <Typography component={Link} href="/login">
            Health Plans
          </Typography>
          <Typography component={Link} href="/login">
            Medicine
          </Typography>
          <Typography component={Link} href="/login">
            Diagonostics
          </Typography>
          <Typography component={Link} href="/login">
            NGOs
          </Typography>
        </Stack>
        <AuthButton />
      </Stack>
    </Container>
  );
};
export default Navbar;
