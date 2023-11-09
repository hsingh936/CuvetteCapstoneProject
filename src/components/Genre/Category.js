import styles from "./Category.module.css";
import action from "../../image/action.png";
import drama from "../../image/drama.png";
import fantasy from "../../image/fantasy.png";
import fiction from "../../image/fiction.png";
import horror from "../../image/horror.png";
import music from "../../image/music.png";
import romance from "../../image/romance.png";
import thriller from "../../image/thriller.png";
import western from "../../image/western.png";
import Chips from "../Global/Chips";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const genres = [
  {
    id: "Action",
    color: "#FF5209",
    image: <img style={{ width: "160px", height: "120px" }} src={action} alt="" />,
  },
  {
    id: "Drama",
    color: "#D7A4FF",
    image: <img style={{ width: "160px", height: "120px" }} src={drama} alt="" />,
  },
  {
    id: "Fantasy",
    color: " #FF4ADE",
    image: <img style={{ width: "160px", height: "120px" }} src={fantasy} alt="" />,
  },
  {
    id: "Fiction",
    color: "#6CD061",
    image: <img style={{ width: "160px", height: "120px" }} src={fiction} alt="" />,
  },
  {
    id: "Horror",
    color: "#7358FF",
    image: <img style={{ width: "160px", height: "120px" }} src={horror} alt="" />,
  },
  {
    id: "Music",
    color: "#E61E32",
    image: <img style={{ width: "160px", height: "120px" }} src={music} alt="" />,
  },
  {
    id: "Romance",
    color: "#11B800",
    image: <img style={{ width: "160px", height: "120px" }} src={romance} alt="" />,
  },
  {
    id: "Thriller",
    color: "#84C2FF",
    image: <img style={{ width: "160px", height: "120px" }} src={thriller} alt="" />,
  },
  {
    id: "Western",
    color: "#912500",
    image: <img style={{ width: "160px", height: "120px" }} src={western} alt="" />,
  },
];
const Category = () => {
  const [categories, setCategories] = useState([]);
  const [lengthError, setLengthError] = useState(false);
  const navigate = useNavigate();
  const handleSignUp = () => {
    if (categories.length < 3) {
      setLengthError(true);
      return;
    } else {
      setLengthError(false);
      window.localStorage.setItem("genres", JSON.stringify([...categories]));
      navigate("/browse");
    }
  };
  return (
    <div className={styles.body}>
      <div className={styles.left}>
        <p className={styles.heading}>Super app</p>
        <p className={styles.subHeading}>Choose your entertainment category</p>
        <div style={{ marginTop: "10vh" }}>
          <Chips
            categories={categories}
            color={"green"}
            setCategories={setCategories}
          />
          {lengthError ? (
            <p className={styles.error}>Please choose at least 3</p>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className={styles.right}>
        {genres.map((data, idx) => (
          <Block
            data={data}
            idx={idx}
            categories={categories}
            setCategories={setCategories}
          />
        ))}
      </div>
      <button className={styles.signUp} onClick={handleSignUp}>
        Next Page
      </button>
    </div>
  );
};

const Block = ({ data, idx, setCategories, categories }) => {
    const [selected, setSelected] = useState();
    const handleClick = () => {
      if (categories.includes(data.id)) {
        const index = categories.indexOf(data.id);
        categories.splice(index, 1);
        setCategories([...categories]);
      } else {
        setCategories([...categories, data.id]);
      }
      setSelected(!selected);
    };
  
    useEffect(() => {
      setSelected(categories.includes(data.id));
    }, [categories, data.id]);
  
    return (
      <div
        onClick={handleClick}
        key={idx}
        style={{
          background: data.color, 
          color: "white",
          padding: "16px",
          borderRadius: "12px",
          border: `${selected ? "4px solid green" : "4px solid white"}`,
        }}
      >
        <p style={{ marginBottom: "4px", fontSize: "18px" }}>{data.id}</p>
        {data.image}
      </div>
    );
  };
  
export default Category;
