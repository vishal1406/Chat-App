import { ThemeProvider } from "@mui/material/styles";
import { Chat } from "./screens";
import theme from "./assets/theme";

const App = () => {
   return (
      <ThemeProvider theme={theme}>
         <Chat />
      </ThemeProvider>
   );
};

export default App;
