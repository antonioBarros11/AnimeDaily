import AnimeDetails from "./pages/animeDetails/AnimeDetails";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchAnime from "./pages/searchAnime/SearchAnime";
import Layout from "./pages/layout/Layout";
import News from "./pages/news/News";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/anime-search" element={<SearchAnime />} />
            <Route path="/anime-details/:id" element={<AnimeDetails />} />
            <Route path="/anime-news" element={<News />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
