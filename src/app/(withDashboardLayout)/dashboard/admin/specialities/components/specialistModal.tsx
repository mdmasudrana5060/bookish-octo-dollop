import PHFileUploader from "@/components/Forms/PHFIleUoploader";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import PHModal from "@/components/Shared/PHModal/PHModal";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialistModal = ({ open, setOpen }: TProps) => {
  const handleSubmit = (values: FieldValues) => {
    console.log(values);
  };

  return (
    <PHModal open={open} setOpen={setOpen} title="Create a Speciality">
      <PHForm onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid size={6}>
            <PHFileUploader name="file" label="Upload File" />
          </Grid>
          <Grid size={6}>
            <PHInput name="title" label="Title" />
          </Grid>
        </Grid>
        <Button type="submit" sx={{ mt: 2 }} variant="contained">
          Create
        </Button>
      </PHForm>
    </PHModal>
  );
};

export default SpecialistModal;
