import React from "react";

import {
  Box,
  Button,
  Image,
  Container,
  HStack,
  Text,
  useMediaQuery,
  Heading,
  Flex,
  IconButton,
} from "@chakra-ui/react";

import { Logo, Search } from "Components";
import { BiMenu } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FiHeart, FiShoppingBag } from "react-icons/fi";

const Header = () => {
  const [isLargerThen768] = useMediaQuery("(min-width: 768px)");

  return (
    <Box bg="primary.main.500" py={6}>
      <Container maxW={"1024px"}>
        <HStack alignItems={"center"}>
          <Logo />
          <Box flex={1} ml={4}>
            <Search />
          </Box>
          <Box ml={4}>
            {isLargerThen768 && (
              <HStack>
                <IconButton icon={<FiHeart size={24} />} />
                <IconButton icon={<FiShoppingBag size={24} />} />
                <IconButton icon={<CgProfile size={24} />} />
              </HStack>
            )}
          </Box>
        </HStack>
      </Container>
    </Box>
  );
};

export default Header;
