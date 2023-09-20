import { createTheme } from "@mui/material/styles";

const theme = createTheme({
   typography: {
      button: {
         textTransform: "none",
      },
   },
   palette: {
      primary: {
         main: "#33CCCC",
         contrast: "#FFFFFF",
         lightCyan: "#F0FFFF",
      },
      typography: {
         fontFamily: ["Roboto"],
         fontSize: 12,
      },
   },
});

export default theme;
