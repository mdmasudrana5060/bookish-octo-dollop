import PHFileUploader from "@/components/Forms/PHFIleUoploader";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import PHModal from "@/components/Shared/PHModal/PHModal";
import { useCreateSpecialityMutation } from "@/redux/api/specialitiesAPi";
import { modifyPayload } from "@/utils/modifyPayload";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialistModal = ({ open, setOpen }: TProps) => {
  const [createSpeciality] = useCreateSpecialityMutation();
  const handleSubmit = async (values: FieldValues) => {
    console.log(values);
    const data = modifyPayload(values);
    try {
      const res = await createSpeciality(data).unwrap();
      if (res?.id) {
        toast.success("Speciality create successfully");
        setOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
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
