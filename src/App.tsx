import { useState } from "react";
import { Login, TodoList } from "./pages";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
interface ThemState {
  theme: {
    darkmode: boolean;
  };
}
const App = () => {
  const token = localStorage.getItem("token");
  const [user] = useState<string | null>(token);
  const selector = useSelector((state: ThemState) => state.theme);
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [rtlPlugin],
  });
  const darkTheme = createTheme({
    palette: {
      mode: selector.darkmode ? "dark" : "light",
    },
  });

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={darkTheme}>
        <CacheProvider value={cacheRtl}>
          {user && user.length > 0 && user[0] !== undefined ? (
            <TodoList />
          ) : (
            <>
              <CssBaseline />
              <Login />
            </>
          )}
        </CacheProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
