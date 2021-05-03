import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useState } from "react";
import { v1 as v1id } from "uuid";
import Footer from "./components/Footer";
import {
  Alert,
  Flex,
  useToast,
 } from "@chakra-ui/react";

import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  const [tasks, setTasks] = useState([]);
  const toast = useToast();

  const handleCreate = (value, tag) => {
    if (value !== "") {
      setTasks([...tasks, { id: v1id(), value, tag }]);
      toast({
        title: "Success",
        description: "Task creato con successo!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Error",
        description: "Inserisci qualcosa nel box!",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const handleEdit = (id) => {
    return;
  }

  const handleDelete = (id) => {
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
    toast({     
      title: "Success",
      description: "Task eliminato con successo!",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleDeleteAll = () => {
    if (tasks.length !== 0) {
      setTasks([]);
      toast({
        title: "Success",
        description: "Tasks eliminato con successo!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Error",
        description: "Non ci sono Task da eliminare!",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <>
    <ColorModeSwitcher />
    <Flex h="100%" className="App" direction="column">
      <Header />
      <Form handleCreate={handleCreate} handleDeleteAll={handleDeleteAll} />
      <TodoList tasks={tasks} handleDelete={handleDelete} handleEdit={handleEdit} />
    </Flex>
    <Footer />
    </>
  );
}

export default App;