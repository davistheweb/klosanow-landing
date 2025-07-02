import React from "react";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
// import empowerImg from "/public/images/general/frame.png";
import { ImageSlide } from "../ui/ImageSlide";

export default function Empower() {
  return (
    <>
      <Box mt={{ base: "4rem", md: "10rem" }}>
        <Stack
          direction={{ base: "column", md: "row" }}
          px={{ base: "1rem", md: "6rem" }}
          position="relative"
        >
          <Flex
            p={8}
            flex={1}
            alignItems={"center"}
            justify={"center"}
            mt={{ md: "2rem" }}
          >
            <Stack spacing={6} w={"full"} maxW={"lg"}>
              <Heading
                fontSize={{ base: "3xl", md: "4xl" }}
                textAlign={{ base: "start" }}
              >
                <Text
                  color={"primary.100"}
                  fontWeight={700}
                  lineHeight={"138%"}
                  fontSize={{ base: "1.7rem", lg: "2.5rem" }}
                >
                  Empowering Learners and Tutors Through Online Education
                </Text>
              </Heading>
              <Text
                color={"black.100"}
                fontSize={{ base: "md", md: "lg" }}
                mt={"1rem"}
                mb=".3rem"
                fontWeight={400}
              >
                The Klosanow platform is both effective and efficient, enabling
                learners access learning contents created by tutors.
              </Text>
            </Stack>
          </Flex>
          <Box
            as="div"
            width={"34px"}
            height={"34px"}
            borderRadius={"50%"}
            bg={"secondary.30"}
            transform={"translateY(0)"}
            mt={{ md: "32rem" }}
            mr={{ md: "12rem" }}
          ></Box>
          <Flex
            flex={1}
            position="relative"
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box
              as="div"
              position="absolute"
              width={{ base: "340px", md: "360px", lg: "400px" }}
              height={{ base: "341px", md: "361px", lg: "401px" }}
              bgColor="neutral.30"
              borderRadius="full"
              top="20%"
              left={{ md: "-45%", lg: 0 }}
            />
            <Box as="div" zIndex={10}>
              <ImageSlide />
            </Box>
          </Flex>
        </Stack>
      </Box>
    </>
  );
}
