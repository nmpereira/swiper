import {
  Card,
  Center,
  Input,
  FormControl,
  InputGroup,
  Button,
  Text,
} from "@chakra-ui/react";

import SettingInputs from "./SettingInputs";
function Settings() {
  return (
    <Card minH="600" maxH="600" overflowY="auto">
      <Center>
        <h1>Settings</h1>
      </Center>
      <SettingInputs />
    </Card>
  );
}

export default Settings;
