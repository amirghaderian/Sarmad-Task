import {useState, Suspense } from "react";
import { Login, TodoList } from "./pages";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const App = () => {
  const token = localStorage.getItem("token");
  const [user] = useState<string | null>(token);
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [rtlPlugin],
  });

  return (
    <>
      <CacheProvider value={cacheRtl}>
        {user && user.length > 0 && user[0] !== undefined ? (
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
