import { Card, FormControl, Button, Box } from "@chakra-ui/react";
import SettingInput from "./SettingInput";
function SettingInputs() {
  return (
    <FormControl mt="3">
      <Box minH="500">
        <Card minH="500" maxH="500" overflowY="auto">
          <SettingInput
            name="Username"
            placeholder="Username"
            type="text"
            size="sm"
          />
          <SettingInput
            name="Email"
            placeholder="Email"
            type="text"
            size="sm"
          />
          <SettingInput
            name="Status"
            placeholder="Status"
            type="Select"
            options={["Employed", "Unemployed", "Student", "Other"]}
            size="sm"
          />
        </Card>
      </Box>
      <Box display="flex" justifyContent="center" mt="3">
        <Button>Save</Button>
      </Box>
    </FormControl>
  );
}

export default SettingInputs;
