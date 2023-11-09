import { useEffect, useState } from "react";
import styles from "./List.module.css";
const List = ({ genre }) => {
  const [movies, setMovies] = useState([]);
  console.log(movies);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        'X-RapidAPI-Key': 'f42cf5e4cemsh48975bb4c220dc4p115275jsn75cb68562515',
        'X-RapidAPI-Host': "moviesdatabase.p.rapidapi.com"
      },
    };
    const fetchMovies = async () => {
      await fetch(
        `https://moviesdatabase.p.rapidapi.com/titles?genre=${genre}&year=2020`,
        options
      )
        .then((response) => response.json())
        .then((response) => setMovies(response.results.splice(4, 4)))
        .catch((err) => console.error(err));
    };
    fetchMovies();
  }, [genre]);
  return (
    <>
      <p className={styles.heading} style={{ overflowY: "hidden" }}>
        {genre}
      </p>
      <div style={{ display: "flex", overflow: "hidden", marginLeft: "2vw" }}>
        {movies.map((movie, idx) => {
          return (
            <div key={idx} style={{ width: "20vw", margin: "2vw" }}>
              <img
                src={movie?.primaryImage?.url} alt=""
                style={{
                  objectFit: "cover",
                  width: "20vw",
                  height: "15vh",
                  borderRadius: "12px",
                }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default List;