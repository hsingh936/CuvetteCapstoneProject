import React, { useEffect, useState } from "react";

const News = () => {
  const [news, setNews] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d8b08a3aca69487da760a93d86635dbf");
        const data = await response.json();
  
        if (data.articles && data.articles.length > 0) {
          setNews(data.articles[0]);
        } else {
        
          console.error("No articles available.");
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchNews();
  }, []);
  
  

  useEffect(() => {
    const dateObj = new Date();
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const strTime = `${formattedHours}:${formattedMinutes} ${ampm}`;
    setTime(strTime);
  }, []);

  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = `${dd}-${mm}-${yyyy}`;
    setDate(formattedToday);
  }, []);

  return (
    <div style={{ height: "90vh", width: "30vw", position: "relative", borderRadius: "12px", padding: "6px" }}>
      <img src={news.urlToImage} alt="" style={{ height: "60vh", borderRadius: "12px", width: "30vw" }} />
      <div style={{ height: "25vh", borderRadius: "12px", width: "30vw", background: "white", fontSize: "1.5rem", padding: "6px" }}>
        {news.description}
      </div>
      <div style={{ position: "absolute", width: "30vw", height: "30vh", background: "rgba(0, 0, 0, 0.74)", top: "31vh", padding: "24px", boxSizing: "border-box" }}>
        <p style={{ color: "white", fontSize: "1.5rem", marginBottom: "10px" }}>{news.title}</p>
        <span style={{ color: "white", fontSize: "1.3rem", marginRight: "10px" }}>{date}</span>
        <span style={{ color: "white", fontSize: "1.3rem", marginRight: "10px" }}>{time}</span>
      </div>
    </div>
  );
}

export default News;
