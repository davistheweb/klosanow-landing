"use client";

import * as React from "react";
import { Text, Box, Heading } from "@chakra-ui/react";
import { sections } from "@/utils";

const PrivacyPage: React.FC = () => (
  <Box
    mt={{ base: "1rem", md: "3rem" }}
    px={{ base: "1rem", md: "6rem" }}
    py="3rem"
  >
    {sections.map((section, idx) => (
      <React.Fragment key={idx}>
        {section.title && (
          <Heading
            fontWeight={700}
            fontSize={{ base: "3xl", md: "1xl" }}
            mt={{ base: "1rem", md: "2rem" }}
          >
            <Text>{section.title}</Text>
          </Heading>
        )}
        {section.paragraphs.map((paragraph, i) => (
          <Text key={i} mt={{ base: "1rem", md: "2rem" }}>
            {paragraph}
          </Text>
        ))}
      </React.Fragment>
    ))}
  </Box>
);

export default PrivacyPage;
