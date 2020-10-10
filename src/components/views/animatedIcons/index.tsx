import * as React from "react";
import styled, { Box } from "@xstyled/styled-components";
import { Playground, Center, Vstack } from "../../";
import { Wallet, Camera, Cloud, Bell, Folder } from "./icons";
const AnimatedIcons = () => {
  return (
    <Playground style={{ backgroundColor: "#fff" }}>
      <Vstack space={2} style={{ width: "100%" }}>
        <Center intrinsic style={{ width: "100%" }}>
          <Box row justifyContent="space-around" width="100%">
            <Folder />
            <Cloud />
            <Wallet />
          </Box>
        </Center>
        <Center intrinsic style={{ width: "100%" }}>
          <Box row justifyContent="space-around" width="100%">
            <Bell />
            <Camera />
          </Box>
        </Center>
      </Vstack>
    </Playground>
  );
};

export default AnimatedIcons;
