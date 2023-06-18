import React from "react";

import {
  Box,
  Button,
  Container,
  Divider,
  DrawerBody,
  Drawer as DrawerChakra,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Icon,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";

import { FiHome, FiShoppingBag, FiHeart } from "react-icons/fi";
import { AiOutlinePercentage } from "react-icons/ai";
import { HiOutlineNewspaper } from "react-icons/hi";
import { MdPreview } from "react-icons/md";
import { RxStack } from "react-icons/rx";
import { BiChevronRight } from "react-icons/bi";

import { GrClose } from "react-icons/gr";

const drawerMenu = [
  {
    icon: <RxStack size={24} />,
    text: "Каталог",
  },
  {
    icon: <FiHeart size={24} />,
    text: "Избранное",
  },
  {
    icon: <AiOutlinePercentage size={24} />,
    text: "Акции",
  },
  {
    icon: <HiOutlineNewspaper size={24} />,
    text: "Новости",
  },
  {
    icon: <MdPreview size={24} />,
    text: "Отзывы",
  },
];

const Drawer = ({ isOpen, onOpen, onClose, btnRef }) => {
  return (
    <DrawerChakra
      isOpen={isOpen}
      placement="right"
      size={"full"}
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody>
          <VStack alignItems={"flex-start"}>
            <HStack justify={"space-between"} py={4} w={"full"}>
              <GrClose onClick={onClose} cursor={"pointer"} size={24} />
              <Button variant={"unstyled"}>Войти</Button>
            </HStack>
            <VStack alignItems={"flex-start"} mb={"12px"} w={"full"}>
              {drawerMenu.map((el, index) => (
                <Button variant={"unstyled"} w={"full"}>
                  <HStack key={el.text} justify={"space-between"} py={"10px"}>
                    <HStack spacing={"16px"}>
                      {el.icon}
                      <Text fontSize={"16px"} fontWeight={"semibold"}>
                        {el.text}
                      </Text>
                    </HStack>
                    <BiChevronRight color={"grey"} size={28} />
                  </HStack>
                </Button>
              ))}
            </VStack>
            <Divider />
            <VStack alignItems={"flex-start"} py={"12px"} w={"full"}>
              {[
                "Оплата и доставка",
                "Часто спрашивают",
                "Обратная связь",
                "Контакты",
              ].map((el) => (
                <Button variant={"unstyled"} w={"full"} textAlign={"left"}>
                  {el}
                </Button>
              ))}
            </VStack>
            <Divider />
            <Box>Text</Box>
            <Box>Text</Box>
            <Box>Text</Box>
            <Box>Text</Box>
            <Box>Text</Box>
            <Box>Text</Box>
            <Box>Text</Box>
            <Box>Text</Box>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </DrawerChakra>
  );
};

export default Drawer;
