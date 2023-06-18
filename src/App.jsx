import React from "react";

import "normalize.css";
import "./globalStyles.css";
import { useMediaQuery, Box, Divider } from "@chakra-ui/react";
import { Header } from "Layouts";
import { MobileNavBar } from "Components";

function App() {
  const [isSmallerThen768] = useMediaQuery("(max-width: 768px)");
  const [tabsHeight, setTabsHeight] = React.useState(0);

  const handleTabsHeight = (ref) => setTabsHeight(ref.current.clientHeight);

  return (
    <Box mb={isSmallerThen768 ? `${tabsHeight + 8}px` : "0px"}>
      <Header />
      {isSmallerThen768 && <MobileNavBar handleTabsHeight={handleTabsHeight} />}
    </Box>
  );
}

export default App;
