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
    infinte: true,
    arrows: false,
    speed: 500,
    slideToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
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
      <Box width={{ base: "390px" }} px={"4rem"} py={"5rem"}>
        <Slider {...settings}>
          {ImgPaths.map(({ url, width, height }, _i) => (
            <div key={_i}>
              <Box
                height={{ base: "400px" }}
                display="flex"
                justifyContent="center"
                // alignItems="center"
                position="relative"
              >
                <Image
                  src={url}
                  width={width}
                  height={height}
                  alt="img-slides"
                ></Image>
              </Box>
            </div>
          ))}
        </Slider>
      </Box>
    </>
  );
}
