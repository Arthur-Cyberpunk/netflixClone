import { useEffect, useState } from "react";
import "./App.css";
import FeatureMovie from "./components/FeatureMovie";
import Header from "./components/Header";
import MovieRow from "./components/MovieRow";
import Tmdb from "./Tmdb";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);
  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      let originals = list.filter((i) => i.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1),
      );
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
      setFeatureData(chosenInfo);
      console.log(chosenInfo);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);
  return (
    <div className="page">
      <Header black={blackHeader} />
      {featureData && <FeatureMovie item={featureData} />}
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      <footer>
        Feito com{" "}
        <span role="img" arial-label="coração">
          ❤️
        </span>
        <br />
        Dados pegos do site Themoviedb.org
      </footer>
    </div>
  );
}

export default App;
