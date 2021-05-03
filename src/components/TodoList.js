import { 
  Flex,
  Heading,
  SimpleGrid 
} from "@chakra-ui/react";
import Todo from "./Todo";

const TodoList = ({ tasks, handleDelete, handleEdit, handleCreate }) => {
  return (
    <>
      {tasks !== undefined && tasks.length === 0 && (
      <Flex
        align="center"
        direction="column"
      >
        <Heading
          fontSize={{ base: "1.3rem", md: "1.8rem" }}
        >
          Non sono presenti attività
        </Heading>
        <Heading         
          fontSize={{ base: "1.1rem", md: "1.5rem" }}
        >
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
              <Todo
                desc={task.value}
                key={task.id}
                tag={task.tag}
                task={task}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                handleCreate={handleCreate}
              />
            );
          })}
        </SimpleGrid>
      )}
    </>
  );
};

export default TodoList;