import { createContext, useState } from "react";
import ConfirmSubscription from "./pages/ConfirmSubscription";
import LandingPage from "./pages/LandingPage";

export const UsernameContext = createContext({
  changeUsername: (username: string) => {},
});

function App() {
  const [username, setUsername] = useState<string>("");

  function changeUsername(username: string) {
    setUsername(username);
  }

  if (!username)
    return (
      <UsernameContext.Provider value={{ changeUsername }}>
        <LandingPage />
      </UsernameContext.Provider>
    );
  else
    return (
      <UsernameContext.Provider value={{ changeUsername }}>
        <ConfirmSubscription />
      </UsernameContext.Provider>
    );
}

export default App;
