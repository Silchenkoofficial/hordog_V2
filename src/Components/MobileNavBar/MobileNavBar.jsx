import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  HStack,
  IconButton,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FiHome, FiShoppingBag, FiHeart } from "react-icons/fi";
import { RxStack } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";

const tabs = [
  {
    icon: <FiHome size={24} />,
    label: "Главная",
  },
  {
    icon: <RxStack size={24} />,
    label: "Каталог",
  },
  {
    icon: <FiShoppingBag size={24} />,
    label: "Корзина",
  },
  {
    icon: <FiHeart size={24} />,
    label: "Избранное",
  },
  {
    icon: <CgProfile size={24} />,
    label: "Профиль",
  },
];

const MobileNavBar = ({ handleTabsHeight }) => {
  const ref = React.useRef(null);
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    handleTabsHeight(ref);
  }, []);

  return (
    <Container
      ref={ref}
      maxW="1024px"
      display={"flex"}
      bgColor="primary.main.500"
      position={"fixed"}
      bottom={0}
      left={0}
      right={0}
      height={"56px"}
      boxShadow={
        "0px 0px 2px rgba(40, 41, 61, 0.04), 0px -4px 8px rgba(96, 97, 112, 0.16)"
      }
    >
      <HStack flex={1} alignItems={"center"} justifyContent={"space-between"}>
        {tabs.map((el, index) => (
          <Button key={el.label} variant={"unstyled"} flex={1}>
            <Box
              display={"flex"}
              flexDir={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              maxH={"100%"}
              gap={1}
              flex={1}
            >
              <Box flex={1}>{el.icon}</Box>
              <Text fontSize={9}>{el.label}</Text>
            </Box>
          </Button>
        ))}
      </HStack>
    </Container>
  );
};

export default MobileNavBar;
