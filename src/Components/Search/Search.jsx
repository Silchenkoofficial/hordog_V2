import React from "react";

import { Box, ButtonGroup, Flex, IconButton, Input } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  const searchInputRef = React.useRef(null);

  return (
    <Flex bg={"white"} py={1} px={4} rounded={"full"}>
      <Input
        ref={searchInputRef}
        variant={"unstyled"}
        border="none"
        placeholder="Поиск"
        color="text.main"
        fontSize={16}
      />
      <IconButton
        rounded={"full"}
        variant={"ghost"}
        color="text.secondary"
        icon={<FiSearch size={24} />}
        onClick={() => {
          alert("Вы пытаетесь найти: " + searchInputRef.current.value);
        }}
      />
    </Flex>
  );
};

export default Search;
