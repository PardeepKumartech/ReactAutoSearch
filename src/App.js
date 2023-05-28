import "./App.css";

import AutoSearchGoogle from "./components/AutoSearchGoogle";
import UserSearchHistory from "./components/UserSearchHistory";
function App() {
  return (
    <>
      <div className="container">
        <AutoSearchGoogle />
        <UserSearchHistory />
      </div>
    </>
  );
}

export default App;
