"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import SpecialistModal from "./components/specialistModal";
import { useState } from "react";

const SpecialitiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalOpen(true)}>Create Speciality</Button>
        <SpecialistModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField size="small" placeholder="Search Specialities" />
      </Stack>
    </Box>
  );
};
export default SpecialitiesPage;
