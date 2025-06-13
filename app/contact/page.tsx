"use client";

import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { ContactForm, FaqElement } from "@/components/contact";
import Image from "next/image";
// import contactImg from "/public/images/general/contact.png";

export default function ContactPage() {
  return (
    <>
      <Box
        mt={{ base: "1rem", md: "6rem" }}
        px={{ base: "1rem", md: "6rem" }}
        py="6rem"
      >
        <Box
          bgColor={"neutral.40"}
          p="4rem"
          borderRadius="20px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Box>
            <Text
              as="span"
              fontSize="lg"
              ml={"2rem"}
              position={"relative"}
              color={"neutral.10"}
              _after={{
                content: '""',
                width: "40px",
                height: "1px",
                position: "absolute",
                left: "-20%",
                bottom: "0",
                bg: "neutral.10",
              }}
            >
              We reply under 24hrs
            </Text>
          </Box>
          <Heading
            fontSize={{ base: "3xl", md: "4xl" }}
            textAlign="center"
            mt="1rem"
          >
            <Text color={"primary.100"} fontWeight={500}>
              Connect with Us
            </Text>
            <Text textAlign="center" color={"primary.100"} fontWeight={500}>
              Today
            </Text>
          </Heading>
          <Box
            mt={{ base: "1rem", md: "4rem" }}
            display="flex"
            gap="12rem"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <ContactForm />
            </Box>
            <Box display={{ base: "none", md: "block" }}>
              <Image
                loading="lazy"
                src="/images/general/contact.png"
                alt="connect-img"
                width={500}
                height={500}
              />
            </Box>
          </Box>
        </Box>
        <Box
          bgColor={"neutral.5"}
          // p="4rem"
          // borderRadius="20px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          pb="5rem"
        >
          <FaqElement />
        </Box>
      </Box>
    </>
  );
}
