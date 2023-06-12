import React from "react";

import { Flex, Heading, Image, useMediaQuery } from "@chakra-ui/react";
import LogoSVG from "Assets/Logo/Logo.svg";

const Logo = () => {
  const [isLargerThen768] = useMediaQuery("(min-width: 768px)");

  return (
    <Flex alignItems={"center"} gap={4}>
      <Image src={LogoSVG} maxW={isLargerThen768 ? "72px" : "48px"} />
      {isLargerThen768 && (
        <Heading fontSize={"28px"} fontWeight={"900"}>
          HorDog
        </Heading>
      )}
    </Flex>
  );
};

export default Logo;
