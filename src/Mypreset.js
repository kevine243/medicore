import { definePreset } from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";

const MyPreset = definePreset(Aura, {
  components: {
    button: {
      colorScheme: {
        root: {
          background: "red",
          color: "blue",
        },
      },
      borderRadius: "600px",
    },
  },
});

export default MyPreset;
