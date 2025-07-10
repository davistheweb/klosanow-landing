"use client";
import React from "react";
import Image from "next/image";
import { Box } from "@chakra-ui/react";
import Slider from "react-slick";
import { ImgPaths } from "@/utils";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function ImageSlide(): React.JSX.Element {
  const settings = {
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    centerMode: true,
    centerPadding: "0px", // No extra padding
    adaptiveHeight: true, // Adjusts height dynamically to the slide content
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <Box
      width={{ base: "340px", md: "360px", lg: "400px" }}
      height={{ base: "341px", md: "361px", lg: "401px" }}
      position="relative"
      overflow="hidden"
    >
      <Slider {...settings}>
        {ImgPaths.map(({ url, width, height }, _i) => (
          <div key={_i} style={{ width: "100%", height: "100%" }}>
            <Box
              width="100%"
              height="100%" // Enforce the full height
              display="flex"
              justifyContent="center"
              alignItems="center"
              position="relative"
              overflow="hidden"
            >
              <Image
                src={url}
                width={width}
                height={height}
                alt="img-slides"
                objectFit="contain"
                objectPosition="50% 50%"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: "auto",
                  height: "100%", // Force height to match container
                  borderRadius: "50%",
                }}
              />
            </Box>
          </div>
        ))}
      </Slider>
    </Box>
  );
}
