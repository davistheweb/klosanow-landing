import React, { useRef } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { aboutSlide } from "@/utils";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type NavBtnProps = {
  onClick?: () => void;
};

const PrevBtn: React.FC<NavBtnProps> = ({ onClick }) => (
  <Box as="button" onClick={onClick}>
    <ChevronLeftIcon color="primary.50" boxSize={8} />
  </Box>
);

const NextBtn: React.FC<NavBtnProps> = ({ onClick }) => (
  <Box as="button" onClick={onClick}>
    <ChevronRightIcon color="primary.50" boxSize={8} />
  </Box>
);


export default function VisionSlide(): React.JSX.Element {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    infinte: true,
    arrows: false,
    speed: 500,
    slideToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "10px",
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings} ref={sliderRef}>
        {aboutSlide.map(({ id, title, desc }) => (
          <div key={id}>
            <Box>
              <Box
                bgColor="primary.5"
                height={{ base: "400px" }}
                py="6.5rem"
                px={{ base: "1rem", md: "8rem" }}
                borderRadius="20px"
                display="flex"
                justifyContent="center"
                // alignItems="center"
                gap={{ base: "2rem", md: "8rem" }}
                flexDirection={{ base: "column", md: "row" }}
                position="relative"
              >
                {/* <Box>
                  <Image
                    loading="lazy"
                    src={slideItem.img_url}
                    alt="vision"
                    width={687}
                    height={412}
                  />
                </Box> */}
                <EllipseElement />

                <Box>
                  <Heading
                    fontSize={{ base: "3xl", md: "4xl" }}
                    fontWeight={500}
                    textAlign={{ base: "center" }}
                    color="black.60"
                  >
                    {title}
                  </Heading>
                  <Box
                    display="flex"
                    justifyContent="center"
                    // alignItems="center"
                  >
                    <Text
                      fontSize="20px"
                      mt="1rem"
                      color="black.60"
                      textAlign={{ base: "center" }}
                      lineHeight="144%;"
                      width={{ base: "100%", md: "60%" }}
                      zIndex={20}
                    >
                      {desc}
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </div>
        ))}
      </Slider>
      <Box
        mt="1.5rem"
        display="flex"
        gap="4rem"
        justifyContent="center"
        alignItems="center"
      >
        <PrevBtn onClick={() => sliderRef.current?.slickPrev()} />
        <Box
          as="span"
          w="28px"
          h="5px"
          borderRadius="50px"
          bgColor="primary.20"
        ></Box>
        <NextBtn onClick={() => sliderRef.current?.slickNext()} />
      </Box>
    </>
  );
}

const EllipseElement: React.FC = () => (
  <>
    <Box
      as="div"
      width={{ base: "20px", md: "208px" }}
      height={{ base: "20px", md: "208px" }}
      borderRadius={"50%"}
      bg={"primary.15"}
      transform={"translateY(0)"}
      mt={{ md: "1rem" }}
      mr={{ md: "1rem" }}
      position="absolute"
      top={"1%"}
      left={"2%"}
      // zIndex={-1}
    />
    <Box
      as="div"
      width={"64px"}
      height={"64px"}
      borderRadius={"50%"}
      bg={"primary.15"}
      transform={"translateY(0)"}
      mt={{ md: "1rem" }}
      mr={{ md: "1rem" }}
      position="absolute"
      top={"65%"}
      left={"139px"}
      // zIndex={-1}
    />
    <Box
      as="div"
      width={"27px"}
      height={"27px"}
      borderRadius={"50%"}
      bg={"primary.15"}
      transform={"translateY(0)"}
      mt={{ md: "1rem" }}
      mr={{ md: "1rem" }}
      position="absolute"
      top={"23%"}
      left={"425px"}
      // zIndex={-1}
    />
    <Box
      as="div"
      width={"130px"}
      height={"130px"}
      borderRadius={"50%"}
      bg={"primary.15"}
      transform={"translateY(0)"}
      mt={{ md: "1rem" }}
      mr={{ md: "1rem" }}
      position="absolute"
      top={"35%"}
      left={"748px"}
      // zIndex={-1}
    />
    <Box
      as="div"
      width={"64px"}
      height={"64px"}
      borderRadius={"50%"}
      bg={"primary.15"}
      transform={"translateY(0)"}
      mt={{ md: "1rem" }}
      mr={{ md: "1rem" }}
      position="absolute"
      top={"10%"}
      left={"1000px"}
    />
  </>
);
