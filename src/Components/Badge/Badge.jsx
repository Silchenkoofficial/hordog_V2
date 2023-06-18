import React from "react";
import { Badge as ChakraBadge } from "@chakra-ui/react";

const Badge = ({ value }) => {
  return (
    <ChakraBadge
      background="custom.green"
      color="white"
      minW={"14px"}
      h={"14px"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      fontSize={"9px"}
      position={"absolute"}
      top={"0px"}
      right={"0px"}
      rounded={"9999px"}
      border={"2px"}
      borderColor={"primary.main.500"}
    >
      {value}
    </ChakraBadge>
  );
};

export default Badge;
