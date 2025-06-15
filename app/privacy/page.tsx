"use client";

import * as React from "react";
import { Text, Box, Heading } from "@chakra-ui/react";

const PrivacyPage: React.FC = () => (
  <>
    <Box
      //   bgColor={"primary.50"}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      mt={{ base: "1rem", md: "6rem" }}
    >
      <Heading fontSize={{ base: "3xl", md: "4xl" }}>
        <Text>Empowering Learners and Tutors Through Online Education</Text>
      </Heading>
    </Box>
  </>
);

export default PrivacyPage;
