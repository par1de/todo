import {
  Flex,
  Heading,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Spacer,
  Kbd,
} from "@chakra-ui/react";
import {
  CheckIcon,
  HamburgerIcon,
} from '@chakra-ui/icons';

const Header = () => {
  return (
    <Flex
      bg="#109bc5"
      borderRadius="1rem"
      w="80%"
      shadow='2xl'
      p={4}
      my={4}
      mx="auto"
      color="white"
      direction="row"
    >
      <Heading
        as="h1"
        fontSize='2.5rem'
      >
        <CheckIcon mr={3} />
        Todo App
      </Heading>

      <Spacer />

      <Menu>
        <MenuButton
          mt={1}
          fontSize='2rem'
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          _hover={{ opacity: 0.6 }}
          variant=""
        />
        <MenuList>
          <MenuItem
            // icon={<AddIcon />}
            command={<span><Kbd>ctrl</Kbd> + <Kbd>O</Kbd></span>}
          >
            Open
          </MenuItem>
          <MenuItem
            // icon={<ExternalLinkIcon />}
            command={<span><Kbd>ctrl</Kbd> + <Kbd>S</Kbd></span>}
          >
            Export TodoList...
          </MenuItem>
        </MenuList>
      </Menu>

    </Flex>
  );
};

export default Header;