import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

import { termsSection } from "@/utils";


const TermsPage: React.FC = () => (
  <Box
    mt={{ base: "1rem", md: "3rem" }}
    px={{ base: "1rem", md: "6rem" }}
    py="3rem"
  >
    {termsSection.map((section, idx) => (
      <Box key={idx} mb={{ base: "2rem", md: "3rem" }}>
        <Heading fontWeight={700} fontSize={{ base: "3xl", md: "1xl" }}>
          {section.title}
        </Heading>
        {section.paragraphs.map((para, pIdx) => (
          <Text key={pIdx} mt={{ base: "1rem", md: "1rem" }}>
            {para}
          </Text>
        ))}
      </Box>
    ))}
  </Box>
);

export default TermsPage;
