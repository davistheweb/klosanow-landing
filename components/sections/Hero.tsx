import * as React from "react";
import {
  Box,
  Button,
  Link,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
// import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
// import HeroImg from "/public/images/general/hero.png";

export default function Hero(): React.JSX.Element {
  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: "0.8" }}
    >
      <Box
        mt={{ md: "8rem", lg: "8rem" }}
        height={{ base: "100vh", md: "85vh" }}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          px={{ base: "0.6rem", md: "6rem" }}
          position="relative"
          as={motion.div}
        >
          <Box
            as="div"
            position="absolute"
            right={{ base: "23%", md: "75%", lg: "78.5%" }}
            width="472px"
            height="472px"
            border={1}
            borderColor={"secondary.30"}
            borderStyle={"solid"}
            borderRadius="50%"
            top={{ base: "-35%", md: "-40%" }}
            zIndex={"1"}
          ></Box>

          <Flex
            p={8}
            flex={1}
            alignItems={"center"}
            justify={"center"}
            mt={{ md: "2rem" }}
            as={motion.div}
          >
            <Stack spacing={6} w={"full"} maxW={"lg"}>
              <Heading
                fontSize={{ base: "3xl", md: "4xl" }}
                textAlign={{ base: "start" }}
                as={motion.h1}
                initial={{ y: -100 }}
                whileInView={{ y: 0 }}
                transition={{ duration: "0.8" }}
              >
                <Text
                  color={"primary.100"}
                  fontWeight={700}
                  lineHeight={"138%"}
                  fontSize={{ base: "1.7rem", lg: "2.5rem" }}
                >
                  Online teaching and learning just got seamless with Klosanow
                </Text>
                {/* <Text
                  color={"primary.100"}
                  fontWeight={700}
                  lineHeight={"138%"}
                >
                  learning just got
                </Text>
                <Text
                  color={"primary.100"}
                  fontWeight={700}
                  lineHeight={"138%"}
                >
                  seamless with Klosanow
                </Text> */}
              </Heading>
              <Text
                as={motion.div}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: "0.8" }}
                color={"black.100"}
                fontSize={"18px"}
                mt={{ md: "0.2rem" }}
                mb=".3rem"
              >
                Create engaging video learning content, send it to your learning
                community and stay connected 24/7 through the messaging feature
                on the platform.
              </Text>
              {/* <Stack
                as={motion.div}
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                transition={{ duration: "0.8" }}
                direction={{ base: "column", md: "row" }}
                spacing={4}
              >
                <Button
                  size="lg"
                  bg="primary.50"
                  color="neutral.50"
                  px="3rem"
                  borderRadius="5px"
                  _hover={{
                    opacity: 0.8,
                  }}
                  fontWeight={400}
                  fontSize="16px"
                >
                  <Link
                    href="https://klosanow-frontend.vercel.app"
                    isExternal
                    display={{ base: "none", md: "block" }}
                  >
                    Get Started
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  borderColor="primary.50"
                  px="3rem"
                  color="primary.100"
                  fontWeight={400}
                  fontSize="16px"
                  _hover={{
                    opacity: 0.8,
                  }}
                >
                  <Link href="#">Watch Demo</Link>
                </Button>
              </Stack> */}
              <Stack
                as={motion.div}
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                transition={{ duration: "0.8" }}
                direction={{ base: "row" }}
                spacing={4}
              >
                <Button
                  size="lg"
                  bg="primary.50"
                  color="neutral.50"
                  px="3rem"
                  borderRadius="5px"
                  _hover={{
                    opacity: 0.8,
                  }}
                  fontWeight={400}
                  fontSize="16px"
                >
                  <Link href="#">Join waitlist</Link>
                </Button>
              </Stack>
            </Stack>
          </Flex>

          <Box
            as="div"
            width={"34px"}
            height={"34px"}
            borderRadius={"50%"}
            bg={"secondary.30"}
            transform={"translateY(0)"}
            mt={{ md: "14rem" }}
            mr={{ md: "8rem" }}
          ></Box>

          <Flex
            flex={1}
            alignItems={"center"}
            justifyContent={"center"}
            position="relative"
            as={motion.div}
            whileHover={{ scale: 1.1 }}
            animate={{
              scale: [1.1, 1],
              x: [-100, 0],
            }}
            transition={{ duration: "0.5" }}
            justifyItems={"center"}
          >
            <Box
              as="div"
              position="absolute"
              width={{ base: "360px", md: "360px", lg: "430px" }}
              height={{ base: "361px", md: "361px", lg: "431px" }}
              bgColor="neutral.30"
              borderRadius="full"
              justifySelf={"center"}
              left={{ base: "-1", md: "-4" }}
            />
            <Box
              as="div"
              width="100%"
              height="100%"
              style={{
                zIndex: "10",
              }}
              display="flex"
              justifyContent="center"
              alignItems="center"
              ml={{ base: "15px", lg: "0" }}
            >
              <Image
                loading="lazy"
                src="/images/general/hero.png"
                alt="hero-img"
                width={900}
                height={500}
              />
            </Box>
            <Box
              as="div"
              position="absolute"
              display={{ base: "none", md: "block" }}
              top={{ md: "40%", lg: "50.5%" }}
              width="472px"
              height="472px"
              border={1}
              borderColor={"neutral.30"}
              borderStyle={"solid"}
              borderRadius="50%"
              right={{ base: "-65%", md: "-40%" }}
              zIndex={"1"}
            />
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
}
