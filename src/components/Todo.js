import React from 'react';
import {
  Text,
  IconButton,
  Flex,
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
import EditTask from "./EditTask";

const Todo = ({ desc, task, handleDelete, handleEdit }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef()
  const finalRef = React.useRef()

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
        {desc}
      </Text>
      <Spacer />
      
      {/* <EditTask id={task.id} handleDelete={handleDelete} /> */}

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
              <Input ref={initialRef} placeholder="Nuovo nome del task..." />
            </FormControl>
            <FormControl>
              <Select
                mt={3}
                variant="filled"
                // onChange={handleSelectChange}
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
              onClick={() => handleDelete(task.id)}
              colorScheme="blue" mr={3}
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
};

export default Todo;