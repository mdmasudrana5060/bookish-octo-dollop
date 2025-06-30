import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const registerPage = () => {
  // react hook form and in react hook form we useregisterPatient
  return (
    <Container
      sx={{
        padding: "50px",
      }}
    >
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <Box>
              <Image src={assets.} />
            </Box> */}
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Patient Register
              </Typography>
            </Box>
          </Stack>
          <Box>
            <form>
              <Grid container spacing={2} my={1}>
                <Grid size={12}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                  ></TextField>
                </Grid>
                <Grid size={6}>
                  <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                  ></TextField>
                </Grid>
                <Grid size={6}>
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                  ></TextField>
                </Grid>
                <Grid size={6}>
                  <TextField
                    label="Contact No"
                    type="tel"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                  ></TextField>
                </Grid>
                <Grid size={6}>
                  <TextField
                    label="Address"
                    type="text"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                  ></TextField>
                </Grid>
              </Grid>
              <Button
                sx={{
                  marging: "10px  0px",
                }}
                fullWidth={true}
              >
                Register
              </Button>
              <Typography component="p" fontWeight={600}>
                Do you already have an account? <Link href="/login">Login</Link>
              </Typography>
            </form>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};
export default registerPage;
