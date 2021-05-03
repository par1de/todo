import React from 'react';
import {
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
  IconButton,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import { EditIcon } from '@chakra-ui/icons';

const EditTask = (id, handleDelete) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef()
  const finalRef = React.useRef()

  return (
    <>
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
              onClick={() => handleDelete(id)}
              colorScheme="blue" mr={3}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditTask;