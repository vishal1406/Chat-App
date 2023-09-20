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
         contrastText: "#FFFFFF",
         lightCyan: "#EAF4F4",
      },
      typography: {
         fontFamily: ["Roboto"],
         fontSize: 12,
      },
   },
});

export default theme;
