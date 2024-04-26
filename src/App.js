import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Main } from "./pages";
// import {
//   CommuteList,
//   LearnList,
//   PreSleepList,
//   MyPodcastList,
//   MyFavoriteList,
// } from "./pages/MainLists";
import PodcastListContext from "./contexts/PodcastListContext";
// import SpotifyToken from "./components/SpotifyToken";

function App() {
  return (
    <>
      <BrowserRouter>
        <PodcastListContext>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/main/*" element={<Main />}>
              {/* <Route path="commuteList" element={<CommuteList />} />
              <Route path="learnList" element={<LearnList />} />
              <Route path="preSleepList" element={<PreSleepList />} />
              <Route path="myPodcastList" element={<MyPodcastList />} />
              <Route path="myFavoriteList" element={<MyFavoriteList />} /> */}
            </Route>
          </Routes>
        </PodcastListContext>
      </BrowserRouter>
    </>
  );
}

export default App;
