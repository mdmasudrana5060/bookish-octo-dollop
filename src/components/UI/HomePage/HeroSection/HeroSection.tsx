import { Box, Container } from "@mui/material";

const HeroSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        direction: "row",
        my: 16,
      }}
    >
      <Box
        sx={{
          flex: 1,
          position: "relative",
        }}
      >
        <Box>{/* <Image src="" alt=""/> */}</Box>
      </Box>
      <Box>Righ</Box>
    </Container>
  );
};
export default HeroSection;
