import React from "react";

import {
  Box,
  Container,
  HStack,
  useMediaQuery,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";

import { Logo, Search } from "Components";
import { Drawer } from "Widgets";

import { BiMenu } from "react-icons/bi";
import { FiHeart, FiShoppingBag } from "react-icons/fi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
// import { Drawer } from "Widgets"

const Header = () => {
  const [isLargerThen768] = useMediaQuery("(min-width: 768px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box bg="primary.main.500" py={6}>
      <Container maxW={"1024px"}>
        <HStack alignItems={"center"}>
          <Logo />
          <Box flex={1} ml={4}>
            <Search />
          </Box>
          <Box ml={4}>
            <HStack>
              <IconButton
                onClick={onOpen}
                icon={<HiOutlineMenuAlt2 size={24} />}
              />
              <Drawer
                btnRef={btnRef}
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
              />
            </HStack>
          </Box>
        </HStack>
      </Container>
    </Box>
  );
};

export default Header;
