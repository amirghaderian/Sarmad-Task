import { useEffect, useState, Suspense } from "react";
import TodoList from "./pages/TodoList";
import Login from "./pages/login/Login";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const App = () => {
  const [user, setUser] = useState<string>("");
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [ rtlPlugin],
  });
  useEffect(() => {
    // setUser(`{"username":"admin","password":"123"}`);
  }, []);
  return (
    <>
      <CacheProvider value={cacheRtl}>
        {user.length > 0 && user[0] !== undefined ? (
          <TodoList />
        ) : (
          <>
            <Suspense fallback={<h1>Loading Login page</h1>}>
              <Login />
            </Suspense>
          </>
        )}
      </CacheProvider>
    </>
  );
};

export default App;
