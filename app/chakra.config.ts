import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "30em", // 480px
  md: "48em", // 768px
  lg: "62em", // 992px
  xl: "80em", // 1280px
  "2xl": "96em", // 1536px
};

const theme = extendTheme({
  breakpoints,
  fonts: {
    heading: `'Playfair Display', serif`,
    body: `'Encode Sans', sans-serif`,
  },
  colors: {
    primary: {
      100: "#191231",
      90: "#291D51",
      80: "#3D2C7A",
      70: "#523BA3",
      60: "#6649CB",
      50: "#7B58F4",
      40: "#9174F6",
      30: "#A790F8",
      20: "#BDABF9",
      15: "#DBD0FF",
      10: "#D3C7FB",
      5: "#E5DEFD",
    },
    secondary: {
      100: "#2B1D19",
      90: "#483129",
      80: "#6C493D",
      70: "#916152",
      60: "#B57A66",
      50: "#D9927B",
      40: "#DFA491",
      30: "#E6B6A7",
      20: "#ECC8BD",
      10: "#F2DBD3",
      5: "#F7E9E5",
    },
    black: {
      100: "#000000",
      90: "#000000",
      80: "#000000",
      70: "#000000",
      60: "#191231",
      50: "#525256",
      40: "#2A2A2A",
      30: "#555555",
      20: "#808080",
      10: "#AAAAAA",
      5: "#CCCCCC",
    },
    neutral: {
      100: "#333333",
      90: "#555555",
      80: "#808080",
      70: "#AAAAAA",
      60: "#D4D4D4",
      50: "#FFFFFF",
      40: "#FAFAFA",
      30: "#F2DED7",
      20: "#525256",
      10: "#797980",
      5: "#F4F4F4",
    },
    success: {
      100: "#0C3003",
      90: "#124804",
      80: "#186006",
      70: "#249108",
      60: "#30C10B",
      50: "#3DF110",
      40: "#63F43E",
      30: "#8AF76E",
      20: "#B1F99F",
      10: "#D8FCCF",
      5: "#EBFEE7",
    },
    transparent: {
      100: "transparent",
    },
  },

  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        // borderRadius: '0px'
      },
    },
  },
});
export default theme;
