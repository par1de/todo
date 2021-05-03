import { useState } from "react";
import {
  Box,
  Button,
  HStack,
  Textarea,
  Flex,
  Select,
} from "@chakra-ui/react";
import {
  AddIcon,
  DeleteIcon,
} from '@chakra-ui/icons';

const Form = ({ handleCreate, handleDeleteAll }) => {
  const [value, setValue] = useState("");
  const [tag, setTag] = useState("");

  const handleInputChange = (e) => {
    let input = e.target.value;
    setValue(input);
  };

  const handleSelectChange = (e) => {
    let select = e.target.value;
    setTag(select);
  };

  const handleSubmit = (e) => {
    handleCreate(value, tag);
    setValue("");
  };


  return (
    <Box
      display={{ lg: "flex" }}
      w="80%"
      my={1}
      mx="auto"
      p={4}
    >

    <Flex>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder="Inserisci il nome di un attività..."
        shadow="md"        
        borderColor="gray.300"
        borderRadius="1rem"
        my={3}
        p={2}
      />
      <Select
        m={8}
        variant="filled"
        // value={value}
        onChange={handleSelectChange}
        placeholder="Priorità"
      >
        <option value="dodgerblue">Bassa</option>
        <option value="orange">Media</option>
        <option value="tomato">Alta</option>
        <option value="slateblue">Vita o morte</option>
      </Select>
    </Flex>

      <HStack justify="center" m={4}>
        <Button
          color="white"
          bg="green.500"
          size="lg"
          shadow="md"
          _hover={{ opacity: 0.6 }}
          onClick={handleSubmit}
        >
          <AddIcon mr={1} mb={1}/>
          Add Task
        </Button>
        <Button
          color="white"
          bg="tomato"
          size="lg"
          shadow="md"
          _hover={{ opacity: 0.6 }}
          onClick={handleDeleteAll}
        >
          <DeleteIcon mr={1} mb={1} />
          Empty All
        </Button>
      </HStack>
    </Box>
  );
};

export default Form;