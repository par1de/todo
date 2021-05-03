import {
  Text,
  IconButton,
  Flex,
  Spacer
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const Todo = ({ desc, task, handleDelete, handleEdit }) => {
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
      <IconButton
        mr={1}
        icon={<EditIcon />}
        onClick={() => handleEdit(task.id)}
      />
      <IconButton
        icon={<DeleteIcon />}
        onClick={() => handleDelete(task.id)}
      />
    </Flex>
  );
};

export default Todo;