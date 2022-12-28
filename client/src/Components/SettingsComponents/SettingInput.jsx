import { Box, Center, Input, Tag, InputGroup, Select } from "@chakra-ui/react";

function SettingInput(props) {
  return (
    <Box>
      <InputGroup mt="1">
        <Box>
          <Tag
            colorScheme={props.tagColorScheme ? props.tagColorScheme : "blue"}
            m="1"
            borderRadius={props.borderRadius ? props.borderRadius : "20"}
          >
            {props.name}
          </Tag>
        </Box>
        {props.type === "text" ? (
          <Input
            type={props.type ? props.type : "text"}
            placeholder={props.placeholder ? props.placeholder : "..."}
            fontSize={props.fontSize ? props.fontSize : "10"}
            size={props.size ? props.size : "md"}
            w={props.w ? props.w : "100"}
            borderRadius={props.borderRadius ? props.borderRadius : "20"}
          />
        ) : (
          <Select
            placeholder={props.placeholder ? props.placeholder : "..."}
            fontSize={props.fontSize ? props.fontSize : "10"}
            size={props.size ? props.size : "md"}
            w={props.w ? props.w : "100"}
            borderRadius={props.borderRadius ? props.borderRadius : "20"}
          >
            {props.options.map((option) => {
              return (
                <option value={option} key={option}>
                  {option}
                </option>
              );
            })}
          </Select>
        )}
      </InputGroup>
    </Box>
  );
}

export default SettingInput;
