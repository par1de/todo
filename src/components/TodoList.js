import React from 'react';
import { useState } from 'react';
import { 
  Flex,
  Heading,
  SimpleGrid,
  Text,
  IconButton,
  Spacer,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const TodoList = ({ tasks, handleDelete, handleCreate }) => {
  const [value, setValue] = useState("");
  const [tag, setTag] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef()
  const finalRef = React.useRef()

  const EditTask = (id) => {
    handleSubmit();
    handleDelete(id);
  }

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
    <>
      {tasks !== undefined && tasks.length === 0 && (
      <Flex
        align="center"
        direction="column"
      >
        <Heading fontSize={{ base: "1.3rem", md: "1.8rem" }}>
          Non sono presenti attività
        </Heading>
        <Heading fontSize={{ base: "1.1rem", md: "1.5rem" }}>
          Enjoy the rest of the day 😁️
        </Heading>
      </Flex>
      )}
      {tasks && (
        <SimpleGrid
          spacingX="0.5rem"
          spacingY="30px"
          w="80%"
          mx="auto"
          my={2}
          columns={{ sm: 1, lg: 2, xl: 3 }}
        >
          {tasks.map((task) => {
            return (
              <Flex
              p={5}
              shadow="lg"
              borderWidth="1px"
              flex="1"
              borderRadius="2xl"
              borderLeft="8px"
              borderColor={task.tag}
            >
              <Text
                mt={1}
                fontSize={{ sm: "1.3rem", md: "1rem" }}
              >
                {task.value}
              </Text>
              <Spacer />
              <IconButton
                onClick={onOpen}
                mr={1}
                icon={<EditIcon />}
              >
              </IconButton>
              <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Edita il tuo task</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <FormControl>
                      <FormLabel>Nome Task</FormLabel>
                      <Input
                        ref={initialRef}
                        placeholder="Nuovo nome del task..."
                        onChange={handleInputChange}
                      />
                    </FormControl>
                    <FormControl>
                      <Select
                        mt={3}
                        variant="filled"
                        onChange={handleSelectChange}
                        placeholder="Priorità"
                      >
                        <option value="dodgerblue">Bassa</option>
                        <option value="orange">Media</option>
                        <option value="tomato">Alta</option>
                        <option value="slateblue">Vita o morte</option>
                      </Select>
                    </FormControl>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      onClick={() => EditTask(task.id)}
                      colorScheme="teal" mr={3}
                    >
                      Save
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
        
              <IconButton
                icon={<DeleteIcon />}
                onClick={() => handleDelete(task.id)}
              />
            </Flex>
            );
          })}
        </SimpleGrid>
      )}
    </>
  );
};

export default TodoList;