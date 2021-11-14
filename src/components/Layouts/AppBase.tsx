import React from "react";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { HeaderBasic as Header } from "../Organisms/HeaderBasic";

export const AppBase: React.FC = ({ children }) => {
  return (
    <>
      <Grid h="100vh" templateRows="auto 1fr">
        <GridItem h="100%">
          <Header />
        </GridItem>
        <GridItem overflowY="scroll" h="100%">
          <Box p="0 1rem" h="inherit">
            <Flex justifyContent="center" alignItems="center">
              {children}
            </Flex>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};
