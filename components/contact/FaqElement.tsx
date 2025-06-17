import * as React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from "@chakra-ui/react";
import { faqItems } from "@/utils";

export const FaqElement: React.FC = () => (
  <Box as="div" mt={{ base: "1rem", md: "6rem" }}>
    <Text
      color={"primary.100"}
      fontWeight={700}
      textAlign="center"
      fontSize="40px"
    >
      FAQS
    </Text>
    <Box as="div">
      <Accordion
        bgColor="neutral.50"
        width={{ base: "430px", md: "500px", lg: "900px" }}
        py="3rem"
        px="3rem"
        allowToggle
      >
        {faqItems.map(({ title, text }, _i) => (
          <AccordionItem border="none" key={_i}>
            <h2>
              <AccordionButton border="none">
                <Box as="span" flex="1" textAlign="left" fontWeight={600}>
                  {title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              width={{
                base: "100%",
                //  md: "500", lg: "900px"y
              }}
              borderBottom="1px"
              borderTop="1px"
              borderColor="neutral.5"
              style={{ whiteSpace: "pre-line" }}
            >
              {text}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  </Box>
);
