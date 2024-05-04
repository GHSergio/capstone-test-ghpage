import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Main } from "./pages";
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
              <Route path="/main" element={<Main />}></Route>
            </Routes>
          </BrowserRouter>
        </PodcastListContext>
      </UserContext>
    </>
  );
}

export default App;
