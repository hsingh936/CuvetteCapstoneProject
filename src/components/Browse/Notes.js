import { useState } from "react";

const Notes = () => {
  const [text, setText] = useState(JSON.parse(window.localStorage.getItem("text")) || "");

  const handleChange = (e) => {
    const updatedText = e.target.value;
    setText(updatedText);
    window.localStorage.setItem("text", JSON.stringify(updatedText));
  };

  const noteStyle = {
    color: "white",
    background: "#F1C75B",
    height: "60vh",
    width: "30vw",
    position: "relative",
    borderRadius: "12px",
    padding: "6px",
    fontFamily: "Roboto, sans-serif", 
  };

  const titleStyle = {
    color: "black",
    fontSize: "2rem",
  };

  return (
    <div style={noteStyle}>
      <p style={titleStyle}>All notes</p>
      <textarea
        style={{ width: "29vw", height: "55vh", margin: "auto", border: "none", background: "transparent", fontFamily: "Roboto, sans-serif" }}
        value={text}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default Notes;
