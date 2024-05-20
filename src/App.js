import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Callback, Main } from "./pages";
import PodcastListContext from "./contexts/PodcastListContext";
import UserContext from "./contexts/UserContext";
function App() {
  return (
    <>
      <UserContext>
        <PodcastListContext>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/callback" element={<Callback />} />
              <Route path="/main" element={<Main />}></Route>
              <Route path="*" element={<Login />}></Route>
            </Routes>
          </BrowserRouter>
        </PodcastListContext>
      </UserContext>
    </>
  );
}

export default App;
