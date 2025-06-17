import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  SimpleGrid,
  Text,
  chakra,
  VisuallyHidden,
  Stack,
} from "@chakra-ui/react";
import Logo from "@/public/images/general/logo.png";
import Whatsapp from "@/public/images/socials/WhatsApp.png";
import Linkedin from "@/public/images/socials/LinkedIn.png";
import Twitter from "@/public/images/socials/Twitter.png";
import Instagram from "@/public/images/socials/Instagram.png";
import styles from "./footer.module.scss";
import { authFooter, navFooter, SocialBtnProps } from "@/utils";

const SocialBtns = ({ children, label, href }: SocialBtnProps) => {
  return (
    <chakra.button
      rounded="full"
      w="8"
      h="8"
      cursor="pointer"
      as="a"
      href={href}
      target="_blank"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition={"background 0.3s ease"}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer(): React.JSX.Element {
  return (
    <>
      <Box
        as="footer"
        h="50%"
        bgColor="primary.5"
        px={{ base: "1rem", md: "3rem" }}
      >
        <Box pt="4rem" py="4rem">
          <SimpleGrid
            templateColumns={{ sm: "1fr 1fr", md: " 2fr 1fr 1fr" }}
            spacing={{ base: "8", md: "10" }}
            px={10}
            pl={{ base: "25px", md: "60px" }}
            mb="20px"
            className={styles.footer_ul}
          >
            <Box>
              <Image src={Logo} alt="logo" width={140} height={100} loading="lazy" />
              <Box width={{ base: "100%", md: "404px" }} mt="2rem">
                <Text color="black.40">
                  Bridging the Gap Between Learners and Tutors
                </Text>
              </Box>
              <Box mt="3rem">
                <Text color="black.40" fontSize="lg">
                  © {new Date().getFullYear()} All rights reserved{" "}
                </Text>
              </Box>
            </Box>
            <Box>
              <Text color="black.40" fontSize="lg">
                Quick Links
              </Text>
              <Box
                mt="1rem"
                display="flex"
                justifyContent={{ base: "none", md: "space-between" }}
                gap={{ base: "5rem", md: "none" }}
                alignItems="center"
              >
                <Box>
                  <ul>
                    {navFooter.map(({ href, title }, index) => (
                      <Link
                        href={href}
                        style={{ cursor: "pointer", width: "100%" }}
                        key={index}
                        // legacyBehavior
                      >
                        {/* <a
                          key={title}
                          style={{ cursor: "pointer", width: "100%" }}
                        >
                        </a> */}
                        {title}
                      </Link>
                    ))}
                  </ul>
                </Box>
                <Box>
                  <ul>
                    {authFooter?.map(({ href, title }, index) => (
                      <Link
                        href={href}
                        key={index}
                        // legacyBehavior
                        style={{ cursor: "pointer", width: "100%" }}
                      >
                        {title}
                      </Link>
                    ))}
                  </ul>
                </Box>
              </Box>
            </Box>
            <Box>
              <Text color="black.40" fontSize="lg">
                Follow Us
              </Text>
              <Stack direction="row" spacing={2} mt="1.5rem">
                <SocialBtns label="Whatsapp" href="#">
                  <Image src={Whatsapp} alt="klosanow Whatsapp" />
                </SocialBtns>
                <SocialBtns
                  label="Linkedin"
                  href="https://www.linkedin.com/company/klosanow/"
                >
                  <Image src={Linkedin} alt="klosanow Linkedin" />
                </SocialBtns>
                <SocialBtns label="Twitter" href="https://twitter.com/klosanow">
                  <Image src={Twitter} alt="klosanow Twitter" />
                </SocialBtns>
                <SocialBtns
                  label="Instagram"
                  href="https://www.instagram.com/klosanow?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
                >
                  <Image src={Instagram} alt="klosanow Instagram" />
                </SocialBtns>
              </Stack>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}
