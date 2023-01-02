import { useEffect, useState } from "react";
import Seo from "../components/Seo";
import axios from "axios";

export default function Home({ results }) {
  const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   const getAPI = async () => {
  //     const result = await axios.get("/movies");
  //     console.log(result);
  //     setMovies(result.data.results);
  //   };
  //   getAPI();
  //    setMovies(result.data.results);
  // }, []);
  return (
    <>
      <Seo title="seoyeun"></Seo>
      <h2>Popular Movies</h2>
      {results.map((movie) => {
        return <div>{movie.original_title}</div>;
      })}
    </>
  );
}
export async function getServerSideProps() {
  const { results } = await (
    await fetch("http://localhost:3000/movies")
  ).json();
  return {
    props: {
      results,
    },
  };
}
