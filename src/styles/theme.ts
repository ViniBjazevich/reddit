import { extendBaseTheme } from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";

const { Button } = chakraTheme.components;

export const theme = extendBaseTheme({
  colors: {
    brand: {
      100: "#FF3c00",
    },
  },
  fonts: {
    body: "Open Sans, sans-serif",
  },
  styles: {
    global: () => ({
      boyd: {
        bg: "gray.200",
      },
    }),
  },
  components: {
    Button,
  },
});
