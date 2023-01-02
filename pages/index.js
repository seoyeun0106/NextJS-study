import { useEffect, useState } from "react";
import Seo from "../components/Seo";
import axios from "axios";
export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getAPI = async () => {
      const result = await axios.get("/movies");
      console.log(result);
      setMovies(result.data.results);
    };
    getAPI();
  }, []);
  return (
    <>
      <Seo title="seoyeun"></Seo>
      <h2>Popular Movies</h2>
      {movies.map((movie) => {
        return <div>{movie.original_title}</div>;
      })}
    </>
  );
}
